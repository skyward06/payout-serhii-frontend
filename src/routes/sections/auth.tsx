import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { AuthSplitLayout } from 'src/layouts/auth-split';

import { SplashScreen } from 'src/components/loading-screen';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/SignIn'));
const VerifyResult = lazy(() => import('src/sections/SignUp/Info'));
const VerifyEmail = lazy(() => import('src/sections/SignUp/verify'));
const RedirectingPage = lazy(() => import('src/pages/SignUp/redirect'));
const ResetPasswordPage = lazy(() => import('src/pages/ResetPassword/resetPassword'));
const UpdatePasswordPage = lazy(() => import('src/pages/ResetPassword/updatePassword'));
const ForgotPasswordPage = lazy(() => import('src/pages/ResetPassword/forgotPassword'));

const signIn = {
  path: 'sign-in',
  element: (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Hi, Welcome mineTXC' }}>
        <LoginPage />
      </AuthSplitLayout>
    </GuestGuard>
  ),
};

const signUp = {
  path: 'sign-up',
  element: (
    <GuestGuard>
      <RedirectingPage />
    </GuestGuard>
  ),
};

const forgotPassword = {
  path: 'forgot-password',
  element: (
    <AuthSplitLayout section={{ title: 'Hi, Welcome mineTXC' }}>
      <ForgotPasswordPage />
    </AuthSplitLayout>
  ),
};

const resetPassword = {
  path: 'reset-password',
  element: (
    <AuthSplitLayout section={{ title: 'Hi, Welcome mineTXC' }}>
      <ResetPasswordPage />
    </AuthSplitLayout>
  ),
};

const updatePassword = {
  path: 'update-password',
  element: (
    <AuthSplitLayout section={{ title: 'Hi, Welcome mineTXC' }}>
      <UpdatePasswordPage />
    </AuthSplitLayout>
  ),
};

const verifyEmail = {
  path: 'verify-email',
  element: (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Hi, Welcome mineTXC' }}>
        <VerifyEmail />
      </AuthSplitLayout>
    </GuestGuard>
  ),
};

const verifyResult = {
  path: 'thanks',
  element: (
    <AuthSplitLayout section={{ title: 'Hi, Welcome mineTXC' }}>
      <VerifyResult />
    </AuthSplitLayout>
  ),
};

export const authRoutes = [
  {
    path: '',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      signIn,
      signUp,
      verifyEmail,
      verifyResult,
      resetPassword,
      forgotPassword,
      updatePassword,
    ],
  },
];
