import Calendar from '@fullcalendar/react'; // => request placed at the top
import type { ICalendarEvent, ICalendarFilters } from 'src/types/calendar';

import dayjs from 'dayjs';
import { useEffect } from 'react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';

import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';

import { useBoolean } from 'src/hooks/useBoolean';
import { useSetState } from 'src/hooks/use-set-state';

import { fIsAfter, fIsBetween, formatDate } from 'src/utils/format-time';

import { DashboardContent } from 'src/layouts/dashboard';
import { CALENDAR_COLOR_OPTIONS } from 'src/_mock/_calendar';

import { StyledCalendar } from '../styles';
import { useEvent } from '../hooks/use-event';
import { useFetchEvents } from '../useApollo';
import { CalendarForm } from '../calendar-form';
import { useCalendar } from '../hooks/use-calendar';
import { CalendarToolbar } from '../calendar-toolbar';
import { CalendarFilters } from '../calendar-filters';
import { CalendarFiltersResult } from '../calendar-filters-result';

// ----------------------------------------------------------------------

export function CalendarView() {
  const theme = useTheme();

  const openFilters = useBoolean();

  const { loading, events, fetchEvents } = useFetchEvents();

  const filters = useSetState<ICalendarFilters>({
    colors: [],
    start: null,
    end: null,
  });

  const dateError = fIsAfter(filters.state.start, filters.state.end);

  const {
    calendarRef,
    //
    view,
    date,
    //
    onDatePrev,
    onDateNext,
    onDateToday,
    onChangeView,
    onSelectRange,
    onClickEvent,
    onInitialView,
    //
    openForm,
    onCloseForm,
    //
    selectEventId,
    selectedRange,
    //
    onClickEventInFilters,
  } = useCalendar();

  const currentEvent = useEvent(events, selectEventId, selectedRange, openForm);

  useEffect(() => {
    onInitialView();
  }, [onInitialView]);

  useEffect(() => {
    const fetchEventsData = async () => {
      const period = { start: formatDate(new Date()), end: formatDate(new Date()) };

      if (view === 'dayGridMonth') {
        period.start = formatDate(
          dayjs(date).utc().startOf('month').add(-1, 'week').toDate(),
          'YYYY-MM-DD'
        );
        period.end = formatDate(
          dayjs(date).utc().endOf('month').add(1, 'week').toDate(),
          'YYYY-MM-DD'
        );
      }

      if (view === 'listWeek' || view === 'timeGridWeek') {
        period.start = formatDate(dayjs(date).utc().startOf('week').toDate(), 'YYYY-MM-DD');
        period.end = formatDate(dayjs(date).utc().endOf('week').toDate(), 'YYYY-MM-DD');
      }

      if (view === 'timeGridDay') {
        period.start = formatDate(dayjs(date).utc().toDate(), 'YYYY-MM-DD');
        period.end = formatDate(dayjs(date).utc().toDate(), 'YYYY-MM-DD');
      }

      await fetchEvents({ variables: { period } });
    };

    fetchEventsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, date]);

  const canReset =
    filters.state.colors.length > 0 || (!!filters.state.start && !!filters.state.end);

  const dataFiltered = applyFilter({ inputData: events, filters: filters.state, dateError });

  const renderResults = (
    <CalendarFiltersResult
      filters={filters}
      totalResults={dataFiltered.length}
      sx={{ mb: { xs: 3, md: 5 } }}
    />
  );

  const flexProps = { flex: '1 1 auto', display: 'flex', flexDirection: 'column' };

  return (
    <Container>
      <DashboardContent maxWidth="xl" sx={{ ...flexProps }}>
        {canReset && renderResults}

        <Card sx={{ ...flexProps, minHeight: '70vh', my: 4 }}>
          <StyledCalendar sx={{ ...flexProps, '.fc.fc-media-screen': { flex: '1 1 auto' } }}>
            <CalendarToolbar
              date={formatDate(date, 'DD MMM YYYY')}
              view={view}
              canReset={canReset}
              loading={loading}
              onNextDate={onDateNext}
              onPrevDate={onDatePrev}
              onToday={onDateToday}
              onChangeView={onChangeView}
              onOpenFilters={openFilters.onTrue}
            />

            <Calendar
              weekends
              selectable
              rerenderDelay={10}
              allDayMaintainDuration
              eventResizableFromStart
              ref={calendarRef}
              initialDate={date}
              initialView={view}
              dayMaxEventRows={3}
              eventDisplay="block"
              events={dataFiltered}
              headerToolbar={false}
              select={onSelectRange}
              eventClick={onClickEvent}
              aspectRatio={3}
              timeZone="utc"
              plugins={[
                listPlugin,
                dayGridPlugin,
                timelinePlugin,
                timeGridPlugin,
                interactionPlugin,
              ]}
            />
          </StyledCalendar>
        </Card>
      </DashboardContent>

      <Dialog
        fullWidth
        maxWidth="xs"
        open={openForm}
        onClose={onCloseForm}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: theme.transitions.duration.shortest - 80,
        }}
        PaperProps={{
          sx: {
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            '& form': { minHeight: 0, display: 'flex', flex: '1 1 auto', flexDirection: 'column' },
          },
        }}
      >
        <DialogTitle sx={{ minHeight: 76 }}>Event</DialogTitle>

        <CalendarForm
          currentEvent={currentEvent}
          colorOptions={CALENDAR_COLOR_OPTIONS}
          onClose={onCloseForm}
        />
      </Dialog>

      <CalendarFilters
        events={dataFiltered}
        filters={filters}
        canReset={canReset}
        dateError={dateError}
        open={openFilters.value}
        onClose={openFilters.onFalse}
        onClickEvent={onClickEventInFilters}
        colorOptions={CALENDAR_COLOR_OPTIONS}
      />
    </Container>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  dateError: boolean;
  filters: ICalendarFilters;
  inputData: ICalendarEvent[];
};

function applyFilter({ inputData, filters, dateError }: ApplyFilterProps) {
  const { colors, start, end } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  inputData = stabilizedThis.map((el) => el[0]);

  if (colors.length) {
    inputData = inputData.filter((event) => colors.includes(event.color as string));
  }

  if (!dateError) {
    if (start && end) {
      inputData = inputData.filter((event) =>
        fIsBetween(formatDate(`${event.start}`), formatDate(`${start}`), formatDate(`${end}`))
      );
    }
  }

  return inputData;
}
