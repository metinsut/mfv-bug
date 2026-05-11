import { formOptions } from "@tanstack/react-form";
import z from "zod";

export const departmentFormOpts = formOptions({
  defaultValues: {
    id: "",
    name: "",
  },
});

export const departmentFormSchema = z.object({
  id: z.string(),
  name: z.string(),
});
