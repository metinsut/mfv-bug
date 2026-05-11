import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useAppForm,
} from "@workspace/shared";
import { z } from "zod";
import { m } from "@/paraglide/messages";
import { ChangePasswordForm } from "./-form";

export const Route = createFileRoute("/settings/change-password/")({
  component: ChangePassword,
});

const changePasswordSchema = z.object({
  oldPassword: z.string().min(1),
  newPassword: z.string().min(1),
  confirmPassword: z.string().min(1),
});

function ChangePassword() {
  const navigate = useNavigate();
  const form = useAppForm({
    validators: {
      onSubmit: changePasswordSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  function handleOpenChange() {
    navigate({ to: "/app/settings" });
  }

  return (
    <Dialog open={true} onOpenChange={handleOpenChange}>
      <DialogTrigger>{m.settingsChangePassword()}</DialogTrigger>
      <DialogContent>
        <form.AppForm>
          <DialogHeader>
            <DialogTitle>{m.settingsChangePassword()}</DialogTitle>
            <DialogDescription>{m.settingsSecurityDescription()}</DialogDescription>
          </DialogHeader>
          <ChangePasswordForm />
          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  {m.cancel()}
                </Button>
              }
            />
            <form.SubmitButton label={m.change()} />
          </DialogFooter>
        </form.AppForm>
      </DialogContent>
    </Dialog>
  );
}
