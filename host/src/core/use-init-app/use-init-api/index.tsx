import { useQueryClient } from "@tanstack/react-query";
import { authWrapper, setHostUrl, useAuthStore } from "@workspace/shared";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { axiosInstance } from "@/api";
import { useAppStore } from "@/store/app-store";
import { useUserStore } from "@/store/user-store";

const baseUrl = import.meta.env.VITE_HOST_API_URL;

export function useInitApi() {
  const setUser = useUserStore((state) => state.setUser);
  const accessToken = useAuthStore((state) => state.accessToken);
  const setLoading = useAppStore((state) => state.setLoading);
  const reset = useAppStore((state) => state.reset);
  const setIsAppReady = useAppStore((state) => state.setIsAppReady);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!baseUrl) {
      throw new Error("VITE_HOST_API_URL is not set");
    }
    authWrapper({
      axiosInstance,
      baseUrl,
    });
    setHostUrl(baseUrl);
  }, []);

  useEffect(() => {
    const initUser = async () => {
      if (!accessToken) {
        setLoading(false);
        reset();
        return;
      }

      try {
        setLoading(true);
        queryClient.clear();

        const decodedToken: any = jwtDecode(accessToken ?? "");

        if (!decodedToken) {
          reset();
          throw new Error("No session");
        }

        setUser(decodedToken);
        setIsAppReady(true);
      } catch (error) {
        reset();
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    initUser();
  }, [accessToken, setUser, setIsAppReady, reset, setLoading, queryClient]);
}
