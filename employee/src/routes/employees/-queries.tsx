import { useQuery } from "@tanstack/react-query";

export const EMPLOYEE_LIST_QUERY_KEY = "employee-list";
export const EMPLOYEE_DETAIL_QUERY_KEY = "employee-detail";

export function useGetEmployees() {
  return useQuery({
    queryKey: [EMPLOYEE_LIST_QUERY_KEY],
    queryFn: () => [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
      },
    ],
  });
}
