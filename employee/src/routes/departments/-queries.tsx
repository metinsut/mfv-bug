import { useQuery } from "@tanstack/react-query";

export const DEPARTMENT_LIST_QUERY_KEY = "department-list";

export function useGetDepartments() {
  return useQuery({
    queryKey: [DEPARTMENT_LIST_QUERY_KEY],
    queryFn: () => [
      {
        id: "1",
        name: "Human Resources",
      },
      {
        id: "2",
        name: "Finance",
      },
    ],
  });
}
