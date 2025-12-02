import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { ForgotPasswordView } from 'src/sections/ResetPassword/forgotPassword';

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`${CONFIG.site.name} - Forgot Password`}</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
