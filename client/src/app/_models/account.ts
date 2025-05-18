import { Role } from './role';

export class Account {
  id: string = '';
  title: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  role: Role = Role.User; // assuming 'User' is a valid default
  jwtToken?: string;
}
