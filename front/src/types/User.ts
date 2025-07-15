export type User = {
  email: string;
  password: string;
};

export const initialUser: User = {
  email: "",
  password: "",
};

export type HandleUserEvent = {
  target: {
    name: string;
    value: string;
  };
};
