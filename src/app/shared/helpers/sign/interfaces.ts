export interface User {
  username: string;
  permission: string;
}

export interface NewUser {
  UserName: string;
  Email: string;
  Password: string;
  PasswordConfirmation: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}
