import { User } from '.';

export interface IAuth {
  signInWithGoogle: () => void;
  signOut: () => void;
  user: User | null;
  loading?: boolean;
}
