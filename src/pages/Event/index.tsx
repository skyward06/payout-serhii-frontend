import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { CalendarView } from 'src/sections/Event/View';

export default function EventPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Event`}</title>
      </Helmet>

      <CalendarView />
    </>
  );
}
