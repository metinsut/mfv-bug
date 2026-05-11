import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../components/ui/combobox";
import { Field, FieldDescription, FieldError, FieldLabel } from "../components/ui/field";
import type { SelectOption } from "../helpers/to-options";
import { useFieldContext } from ".";
import { isFieldInvalid } from "./field-helpers";

type Props = {
  label: string;
  options: SelectOption[];
  placeholder: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
};

function getOptionKey(option: SelectOption) {
  return option.value ?? option.label;
}

export function SearchSelectForm(props: Props) {
  const { label, description, disabled, options, placeholder, required } = props;
  const field = useFieldContext<string | null>();
  const isInvalid = isFieldInvalid(field);
  const selectedOption = options.find((option) => option.value === field.state.value) ?? null;

  return (
    <Field data-invalid={isInvalid} data-disabled={disabled}>
      <FieldLabel htmlFor={field.name}>
        {label}
        {required && <span>*</span>}
      </FieldLabel>
      <Combobox
        name={field.name}
        value={selectedOption}
        onValueChange={(option) => field.handleChange(option?.value ?? null)}
        items={options}
        itemToStringLabel={(option) => option.label}
        itemToStringValue={(option) => option.value ?? ""}
        isItemEqualToValue={(item, value) => item.value === value.value}
        disabled={disabled}
        required={required}
      >
        <ComboboxInput
          id={field.name}
          className="w-full"
          placeholder={placeholder}
          onBlur={field.handleBlur}
          aria-invalid={isInvalid}
          disabled={disabled}
          showClear
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(option: SelectOption) => (
              <ComboboxItem key={getOptionKey(option)} value={option} disabled={option.disabled}>
                {option.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {isInvalid ? <FieldError errors={field.state.meta.errors} /> : null}
    </Field>
  );
}
