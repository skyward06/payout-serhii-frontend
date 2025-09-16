import type { Member } from 'src/sections/Profile/type';

export type AuthContextValue = {
  user?: Member | null;
  code: any;
  loading: boolean;
  isAuthenticated: boolean;
  setCode: (value: any) => void;
  signIn: (token: string) => void;
  signOut: () => void;
};
