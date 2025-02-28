export class User {
  id: string;
  email: string;
  name: string;
  password: string;
}

export type UserLogin = Omit<User, 'name'>;

export type UserResponse = Omit<User, 'password'>;

export type UpdatePasswordData = {
  password: string;
};
