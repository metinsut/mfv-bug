import { CheckCircleIcon } from "@phosphor-icons/react";
import type { ButtonProps } from "../components/ui/button";
import { Button } from "../components/ui/button";
import { Spinner } from "../components/ui/spinner";
import { useFormContext } from ".";

type Props = {
  label: string;
  buttonProps?: ButtonProps;
};

export function SubmitButton(props: Props) {
  const { label, buttonProps } = props;
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => [state.isSubmitting, state.isDirty]}>
      {([isSubmitting, isDirty]) => (
        <Button type="submit" disabled={isSubmitting || !isDirty} {...buttonProps}>
          {isSubmitting ? <Spinner /> : <CheckCircleIcon />}
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
