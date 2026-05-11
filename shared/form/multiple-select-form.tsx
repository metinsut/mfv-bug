"use client";

import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
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

export function MultipleSelectForm(props: Props) {
  const { label, description, disabled, options, placeholder, required } = props;
  const anchor = useComboboxAnchor();
  const field = useFieldContext<string[] | undefined>();
  const isInvalid = isFieldInvalid(field);
  const fieldValue = field.state.value ?? [];
  const selectedOptions = options.filter(
    (option) => option.value !== null && fieldValue.includes(option.value),
  );

  return (
    <Field data-invalid={isInvalid} data-disabled={disabled}>
      <FieldLabel htmlFor={field.name}>
        {label}
        {required && <span>*</span>}
      </FieldLabel>
      <Combobox
        multiple
        autoHighlight
        name={field.name}
        value={selectedOptions}
        onValueChange={(values) => {
          field.handleChange(
            values.map((option) => option.value).filter((value): value is string => value !== null),
          );
        }}
        items={options}
        itemToStringLabel={(option) => option.label}
        itemToStringValue={(option) => option.value ?? ""}
        isItemEqualToValue={(item, value) => item.value === value.value}
        disabled={disabled}
        required={required}
      >
        <ComboboxChips ref={anchor} className="w-full">
          <ComboboxValue>
            {(values: SelectOption[]) => (
              <React.Fragment>
                {values.map((value) => (
                  <ComboboxChip key={getOptionKey(value)}>{value.label}</ComboboxChip>
                ))}
                <ComboboxChipsInput
                  id={field.name}
                  placeholder={values.length ? undefined : placeholder}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  disabled={disabled}
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
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
