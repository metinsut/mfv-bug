import { create } from "zustand";

type UserStore = {
  setUser: (user: any) => void;
  reset: () => void;
} & any;

const initialUser: any = {
  fullName: "John Doe",
  email: "john.doe@example.com",
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialUser,
  setUser: (user: any) => set(user),
  reset: () => set(initialUser),
}));
