import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import NotificationListPage from 'src/sections/Notification/table';

export default function NotificationPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Notifications`}</title>
      </Helmet>

      <Breadcrumbs
        heading="Notifications"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <NotificationListPage />
    </>
  );
}
