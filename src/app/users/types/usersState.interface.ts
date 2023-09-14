import { UserInterface } from './users.interface';

export interface UsersStateInterface {
  isLoading: boolean;
  data: UserInterface[];
  error: string | null;
}
