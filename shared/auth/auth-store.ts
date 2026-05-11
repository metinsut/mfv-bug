import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthState = {
  accessToken?: string;
  refreshToken?: string;
  tenantId?: string;
  hostUrl?: string;
};

type AuthStore = AuthState & {
  setAccessToken: (accessToken?: string) => void;
  setRefreshToken: (refreshToken?: string) => void;
  setTenantId: (tenantId?: string) => void;
  setHostUrl: (hostUrl?: string) => void;
  reset: () => void;
};

const initialState: AuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  tenantId: undefined,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      setAccessToken: (accessToken) => set((state) => ({ ...state, accessToken: accessToken })),
      setRefreshToken: (refreshToken) => set((state) => ({ ...state, refreshToken: refreshToken })),
      setTenantId: (tenantId) => set((state) => ({ ...state, tenantId: tenantId })),
      setHostUrl: (hostUrl) => set((state) => ({ ...state, hostUrl: hostUrl })),
      reset: () => set(initialState),
    }),
    {
      name: "mf-vite-bug-example-auth",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export function getAuthTokens() {
  const { accessToken, refreshToken, tenantId, hostUrl } = useAuthStore.getState();

  return {
    accessToken,
    refreshToken,
    tenantId,
    hostUrl,
  };
}

export function setAccessToken(accessToken?: string) {
  useAuthStore.getState().setAccessToken(accessToken);
}

export function setRefreshToken(refreshToken?: string) {
  useAuthStore.getState().setRefreshToken(refreshToken);
}

export function setTenantId(tenantId?: string) {
  useAuthStore.getState().setTenantId(tenantId);
}

export function setHostUrl(hostUrl?: string) {
  useAuthStore.getState().setHostUrl(hostUrl);
}
