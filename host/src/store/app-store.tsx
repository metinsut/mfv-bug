import { create } from "zustand";

type AppStore = {
  loading: boolean;
  isAppReady: boolean;
  setLoading: (loading: boolean) => void;
  setIsAppReady: (loading: boolean) => void;
  reset: () => void;
};

const initialState = {
  loading: false,
  isAppReady: false,
};

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,
  setLoading: (loading) => set((state) => ({ ...state, loading: loading })),
  setIsAppReady: (isAppReady) => set((state) => ({ ...state, isAppReady: isAppReady })),
  reset: () => set(initialState),
}));
