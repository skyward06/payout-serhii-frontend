import type { RouteObject } from 'react-router';

import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import Container from '@mui/material/Container';

import { LoadingScreen } from 'src/components/loading-screen';

const SignUpPage = lazy(() => import('src/pages/SignUp'));

export const widgetRoutes: RouteObject[] = [
  {
    path: 'widget',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    ),
    children: [{ path: 'sign-up', element: <SignUpPage isComponent /> }],
  },
];
