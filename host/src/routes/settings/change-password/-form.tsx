import { FieldGroup, FieldSet, useAppForm } from "@workspace/shared";
import { z } from "zod";
import { m } from "@/paraglide/messages";

const changePasswordSchema = z.object({
  oldPassword: z.string().min(1),
  newPassword: z.string().min(1),
  confirmPassword: z.string().min(1),
});

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

export function ChangePasswordForm() {
  const form = useAppForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validators: {
      onSubmit: changePasswordSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      console.log(value, formApi);
    },
  });

  return (
    <form
      noValidate
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldSet>
        <FieldGroup>
          <form.AppField
            name="oldPassword"
            children={(field) => <field.InputForm label={m.settingsOldPassword()} />}
          />
          <form.AppField
            name="newPassword"
            children={(field) => <field.InputForm label={m.settingsNewPassword()} />}
          />
          <form.AppField
            name="confirmPassword"
            children={(field) => <field.InputForm label={m.settingsConfirmPassword()} />}
          />
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
