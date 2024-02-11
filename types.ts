export type Link = {
  name: string;
  url: string;
};

export type User = {
  id: string;
  name: string;
};

export type UserInject = {
  user?: Ref<User | undefined>;
  login: () => void;
  logout: () => void;
};
