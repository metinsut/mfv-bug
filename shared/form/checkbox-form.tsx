import { Checkbox } from "../components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../components/ui/field";
import { useFieldContext } from ".";
import { isFieldInvalid } from "./field-helpers";

type Props = Omit<
  React.ComponentProps<typeof Checkbox>,
  "id" | "name" | "checked" | "onBlur" | "onCheckedChange" | "aria-invalid"
> & {
  label: string;
  description?: string;
};

export function CheckboxForm(props: Props) {
  const { label, description, disabled, required, ...rest } = props;
  const field = useFieldContext<boolean | undefined>();
  const isInvalid = isFieldInvalid(field);

  return (
    <Field orientation="horizontal" data-invalid={isInvalid} data-disabled={disabled}>
      <FieldContent>
        <FieldLabel htmlFor={field.name}>
          {label}
          {required && <span>*</span>}
        </FieldLabel>
        {description ? <FieldDescription>{description}</FieldDescription> : null}
        {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
      </FieldContent>
      <Checkbox
        {...rest}
        id={field.name}
        name={field.name}
        checked={Boolean(field.state.value)}
        disabled={disabled}
        required={required}
        onBlur={field.handleBlur}
        onCheckedChange={field.handleChange}
        aria-invalid={isInvalid}
      />
    </Field>
  );
}
