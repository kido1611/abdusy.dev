import type { InjectionKey } from "vue";

export const ProvideInjectKey: InjectionKey<UserInject> =
  Symbol("provide-inject");

export type User = {
  id: string;
  name: string;
};

export type UserInject = {
  user?: Ref<User | undefined>;
  login: () => void;
  logout: () => void;
};
