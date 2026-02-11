import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { DashboardLayout, DashboardContent } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

import { paths } from '../paths';

// ----------------------------------------------------------------------
const SaleListPage = lazy(() => import('src/pages/Sale/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const DashboardPage = lazy(() => import('src/pages/Dashboard'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ProfilePage = lazy(() => import('src/pages/Profile'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const RewardPage = lazy(() => import('src/pages/Reward/List'));
const StatisticsDetailPage = lazy(() => import('src/pages/Reward/Statistics/Detail'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ResourcePage = lazy(() => import('src/pages/Resource/List'));
const ResourceDetailPage = lazy(() => import('src/pages/Resource/Detail'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ActivationPage = lazy(() => import('src/pages/Activation'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const PlacementListPage = lazy(() => import('src/pages/Placement/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const CommissionListPage = lazy(() => import('src/pages/Commission/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const TeamCommissionListPage = lazy(() => import('src/pages/TeamCommission'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const CommunicationPage = lazy(() => import('src/pages/Communication'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const EmailRegionListPage = lazy(() => import('src/pages/Region'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// const PackageProvider = lazy(() => import('src/libs/Packages'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const TXCRequestPage = lazy(() => import('src/pages/TXCRequest/List'));
const TXCRequestCreatePage = lazy(() => import('src/pages/TXCRequest/Create'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ReimbursementProvider = lazy(() => import('src/libs/Reimbursement'));
const ReimbursementListPage = lazy(() => import('src/pages/Reimbursement/List'));
const ReimbursementCreatePage = lazy(() => import('src/pages/Reimbursement/Create'));
const ReimbursementEditPage = lazy(() => import('src/pages/Reimbursement/Edit'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const SponsorListPage = lazy(() => import('src/pages/Sponsor/List'));
const SponsorWrapper = lazy(() => import('src/pages/Sponsor'));
const SponsorTreePage = lazy(() => import('src/pages/Sponsor/Tree'));
// const SponsorNewPage = lazy(() => import('src/pages/Sponsor/New'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const NotificationListPage = lazy(() => import('src/pages/Notification/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const InvoiceListPage = lazy(() => import('src/pages/Invoice/List'));
// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <DashboardContent maxWidth="xl">
              <Outlet />
            </DashboardContent>
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <Navigate to={paths.dashboard.overview.root} replace />, index: true },
      {
        path: 'overview',
        children: [{ index: true, element: <DashboardPage /> }],
      },
      {
        path: 'sales',
        children: [{ index: true, element: <SaleListPage /> }],
      },
      {
        path: 'reward',
        children: [
          { index: true, element: <RewardPage /> },
          {
            path: 'statistics',
            children: [{ path: ':id', element: <StatisticsDetailPage /> }],
          },
        ],
      },
      {
        path: 'sponsorships',
        children: [
          {
            element: (
              <SponsorWrapper>
                <Outlet />
              </SponsorWrapper>
            ),
            children: [
              { index: true, element: <Navigate to="approved" replace /> },
              { path: 'approved', element: <SponsorListPage allowState="APPROVED" /> },
              { path: 'pending', element: <SponsorListPage allowState="PENDING" /> },
              { path: 'added', element: <SponsorListPage allowState="ADDED" /> },
              { path: 'graveyard', element: <SponsorListPage allowState="GRAVEYARD" /> },
              { path: 'tree', element: <SponsorTreePage /> },
              // {
              //   path: 'new',
              //   element: (
              //     <PackageProvider>
              //       <SponsorNewPage />
              //     </PackageProvider>
              //   ),
              // },
            ],
          },
        ],
      },
      { path: 'placement', element: <PlacementListPage /> },
      { path: 'commission', element: <CommissionListPage /> },
      { path: 'email-region', element: <EmailRegionListPage /> },
      {
        path: 'resource',
        children: [
          { index: true, element: <ResourcePage /> },
          { path: ':slug', children: [{ index: true, element: <ResourceDetailPage /> }] },
        ],
      },
      {
        path: 'my-account',
        element: (
          <ProfilePage>
            <Outlet />
          </ProfilePage>
        ),
        children: [
          { index: true, element: <Outlet /> },
          {
            path: 'activation',
            element: <ActivationPage />,
          },
        ],
      },
      {
        path: 'notifications',
        element: (
          <AuthGuard>
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </AuthGuard>
        ),
        children: [{ index: true, element: <NotificationListPage /> }],
      },
      {
        path: 'invoices',
        element: <InvoiceListPage />,
      },
      { path: 'team', element: <TeamCommissionListPage /> },
      { path: 'communication', element: <CommunicationPage /> },
      {
        path: 'txc-request',
        children: [
          { index: true, element: <TXCRequestPage /> },
          { path: 'new', element: <TXCRequestCreatePage /> },
        ],
      },
      {
        path: 'reimbursement',
        children: [
          { index: true, element: <ReimbursementListPage /> },
          { path: 'new', element: <ReimbursementCreatePage /> },
          {
            path: ':id',
            element: (
              <ReimbursementProvider>
                <ReimbursementEditPage />
              </ReimbursementProvider>
            ),
          },
        ],
      },
      // { path: 'refund-policy', element: <RefundPolicyPage /> },
    ],
  },
];
