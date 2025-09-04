import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { SignUpView } from 'src/sections/SignUp';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Sign Up` };

interface Props {
  isComponent?: boolean;
}

export default function SignUpPage({ isComponent = false }: Props) {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignUpView isComponent={isComponent} />
    </>
  );
}
