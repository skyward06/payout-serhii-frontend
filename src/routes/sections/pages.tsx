import { lazy, Suspense } from 'react';
import { Outlet, type RouteObject } from 'react-router';

import Skeleton from '@mui/material/Skeleton';

import OrderProvider from 'src/libs/Order';
import { MainLayout } from 'src/layouts/main';
import { AuthCenteredLayout } from 'src/layouts/auth-centered';
import { NewNavBasic } from 'src/layouts/main/navItem/newNavBasic';

import { LoadingScreen } from 'src/components/loading-screen';

import { paths } from '../paths';

// ----------------------------------------------------------------------
const PeerConfirmationPage = lazy(() => import('src/pages/Peer/Confirmation'));
const PaymentStatus = lazy(() => import('src/pages/Order/PaymentStatus'));
const PaymentWaiting = lazy(() => import('src/pages/Order/PaymentWaiting'));
const PaymentSelector = lazy(() => import('src/pages/Order/PaymentSelector'));
const OrderWrapper = lazy(() => import('src/pages/Order/Wrapper'));
const ContactPage = lazy(() => import('src/pages/Contact'));
const AchFormPage = lazy(() => import('src/pages/ACH'));
const StatisticsPage = lazy(() => import('src/pages/Statistics'));
const ActionPage = lazy(() => import('src/pages/Commission/Action'));
const IntroductionPage = lazy(() => import('src/pages/Introduction'));
const AboutUsPage = lazy(() => import('src/pages/AboutUs'));
const RapidRewardsPage = lazy(() => import('src/pages/RapidRewards'));
const SilverGuaranteePage = lazy(() => import('src/pages/SilverGuarantee'));
const CommissionConfirmationPage = lazy(() => import('src/pages/Commission/Confirmation'));
const ConfirmAddressPage = lazy(() => import('src/pages/ConfirmAddress'));
const NewHomePage = lazy(() => import('src/pages/NewHomePage'));
const ComingSoonPage = lazy(() => import('src/pages/ComingSoon'));
const EventPage = lazy(() => import('src/pages/Event'));
const PostPage = lazy(() => import('src/pages/Post/List'));
const PostViewPage = lazy(() => import('src/pages/Post/View'));
const PostProvider = lazy(() => import('src/libs/Post'));
// ----------------------------------------------------------------------

export const statisticsRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NewNavBasic>
          <Outlet />
        </NewNavBasic>
      </Suspense>
    ),
    children: [
      { path: 'intro', element: <IntroductionPage /> },
      { path: 'rapid-rewards', element: <RapidRewardsPage /> },
      { path: 'silverbugs', element: <SilverGuaranteePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'about-us', element: <AboutUsPage /> },
    ],
  },
  {
    path: 'statistics',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <StatisticsPage />
        </MainLayout>
      </Suspense>
    ),
  },
  {
    path: `${paths.dashboard.commission.action}`,
    element: (
      <Suspense>
        <ActionPage />
      </Suspense>
    ),
  },
  {
    path: `${paths.pages.order.root}/:id`,
    children: [
      {
        element: (
          <AuthCenteredLayout>
            <Suspense fallback={<Skeleton />}>
              <OrderProvider>
                <OrderWrapper>
                  <Outlet />
                </OrderWrapper>
              </OrderProvider>
            </Suspense>
          </AuthCenteredLayout>
        ),
        children: [
          { index: true, element: <PaymentSelector /> },
          { path: 'waiting', element: <PaymentWaiting /> },
          { path: 'status', element: <PaymentStatus /> },
        ],
      },
    ],
  },
  {
    path: 'commission/confirmation',
    element: (
      <AuthCenteredLayout>
        <CommissionConfirmationPage />
      </AuthCenteredLayout>
    ),
  },
  {
    path: 'peer/confirmation',
    element: (
      <AuthCenteredLayout>
        <PeerConfirmationPage />
      </AuthCenteredLayout>
    ),
  },
  {
    path: 'confirm-address',
    element: (
      <AuthCenteredLayout>
        <ConfirmAddressPage />
      </AuthCenteredLayout>
    ),
  },
  {
    path: 'new-homepage',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NewNavBasic>
          <NewHomePage />
        </NewNavBasic>
      </Suspense>
    ),
  },
  {
    path: 'coming-soon',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NewNavBasic>
          <ComingSoonPage />
        </NewNavBasic>
      </Suspense>
    ),
  },
  {
    path: 'event',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NewNavBasic>
          <EventPage />
        </NewNavBasic>
      </Suspense>
    ),
  },
  {
    path: 'ach-form',
    element: (
      <AuthCenteredLayout width="860px">
        <Suspense fallback={<LoadingScreen />}>
          <AchFormPage />
        </Suspense>
      </AuthCenteredLayout>
    ),
  },
  {
    path: 'post',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NewNavBasic>
          <Outlet />
        </NewNavBasic>
      </Suspense>
    ),
    children: [
      { index: true, element: <PostPage /> },
      {
        path: ':slug',
        element: (
          <PostProvider>
            <PostViewPage />
          </PostProvider>
        ),
      },
    ],
  },
];
