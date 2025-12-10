import { useSuspenseQuery } from '@apollo/client';

import { FETCH_SIGN_UP_PACKAGES } from 'src/sections/SignUp/query';

export function useFetchSignUpPackages() {
  const { data } = useSuspenseQuery(FETCH_SIGN_UP_PACKAGES);

  return { packages: data.signUpPackages ?? [] };
}
