import type { IDatePickerControl } from './common';

// ----------------------------------------------------------------------

export type ICalendarFilters = {
  colors: string[];
  start: IDatePickerControl;
  end: IDatePickerControl;
};

export type ICalendarDate = string | number;

export type ICalendarView = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';

export type ICalendarRange = { start: ICalendarDate; end: ICalendarDate } | null;

export type ICalendarEvent = {
  id: string;
  color: string;
  title: string;
  description: string;
  allDay: boolean;
  end: ICalendarDate;
  start: ICalendarDate;
  region: string;
};
