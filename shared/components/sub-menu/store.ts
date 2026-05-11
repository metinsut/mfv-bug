import { create } from "zustand";

type StoreType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function createSubMenuStore() {
  return create<StoreType>((set) => ({
    open: false,
    setOpen: (open) => set({ open }),
  }));
}
