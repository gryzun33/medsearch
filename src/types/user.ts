export type User = {
  id: string;
  name: string;
  email: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Profile = {
  name: string;
};
