import type { AxiosInstance } from "axios";
import { toast } from "sonner";
import { errorMessage } from "../helpers/error-message";
import { getAuthTokens, setAccessToken, setRefreshToken } from "./auth-store";

type Props = {
  axiosInstance: AxiosInstance;
  baseUrl: string;
};

export function authWrapper(props: Props) {
  const { axiosInstance, baseUrl } = props;

  axiosInstance.interceptors.request.use(
    (config) => {
      const { accessToken } = getAuthTokens();
      config.baseURL = baseUrl;
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response) {
        const originalRequest = error.config;
        const { refreshToken, hostUrl } = getAuthTokens();

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshUrl = `${hostUrl}/api/v1/auth/refresh`;

          try {
            const res = await fetch(refreshUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refreshToken,
              }),
            });

            const body = await res.json();
            if (!res.ok) {
              throw body;
            }

            if (body.accessToken) {
              setAccessToken(body.accessToken);
              setRefreshToken(body.refreshToken);
              axiosInstance.defaults.headers.Authorization = `Bearer ${body.accessToken}`;
              originalRequest.headers.Authorization = `Bearer ${body.accessToken}`;
              return axiosInstance(originalRequest);
            }
          } catch (error) {
            console.log({ error });
            console.log("session expired - 401");
            window.history.replaceState(null, "", "/login");
          }
        }

        if (error.response.status === 403) {
          console.log({ error });
          console.log("forbidden - 403");
          window.history.replaceState(null, "", "/app/403");
        }
      }

      const errorText = await errorMessage(error);
      toast.error("invalid operation", {
        description: errorText,
      });

      return Promise.reject(error);
    },
  );
}
