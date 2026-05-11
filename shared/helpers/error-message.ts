import { AxiosError } from "axios";

type CustomError = {
  message?: string;
};

type ProblemDetails = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
};

type Props = AxiosError | Error | unknown | CustomError | ProblemDetails;

export const errorMessage = async (error: Props) => {
  if (!error) {
    return null;
  }

  if (error instanceof AxiosError) {
    const responseData = error?.response?.data;

    if (responseData instanceof Blob) {
      const text = await responseData.text();
      const json = JSON.parse(text);
      return json.message;
    }

    if (responseData && typeof responseData === "object" && "detail" in responseData) {
      const problemDetails = responseData as ProblemDetails;
      return problemDetails.detail || problemDetails.title || error?.message || error?.toString();
    }

    return responseData?.message || error?.message || error?.toString();
  }

  if (error && typeof error === "object" && "detail" in error) {
    const problemDetails = error as ProblemDetails;
    return problemDetails.detail || problemDetails.title;
  }

  if (error instanceof Error || (error as CustomError).message) {
    return (error as Error | CustomError).message || error?.toString();
  }

  return String(error);
};
