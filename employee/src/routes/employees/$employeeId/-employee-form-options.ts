import { formOptions } from "@tanstack/react-form";
import { z } from "zod";

export const employeeFormOpts = formOptions({
  defaultValues: {
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
  },
});

export const employeeFormSchema = z.object({
  employeeId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
