import { authWrapper } from "@workspace/shared";
import { useEffect } from "react";
import { axiosInstance } from "@/api";

const baseUrl = import.meta.env.VITE_EMPLOYEE_API_URL;

export function useInitApp() {
  useEffect(() => {
    if (!baseUrl) {
      console.error("VITE_EMPLOYEE_API_URL is not set");
      return;
    }
    authWrapper({
      axiosInstance,
      baseUrl,
    });
  }, []);
}
