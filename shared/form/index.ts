import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { CheckboxForm } from "./checkbox-form";
import { DateForm } from "./date-form";
import { InputForm } from "./input-form";
import { MultipleSelectForm } from "./multiple-select-form";
import { SearchSelectForm } from "./search-select-form";
import { SelectForm } from "./select-form";
import { SubmitButton } from "./submit-button";
import { SwitchForm } from "./switch-form";
import { TextareaForm } from "./textarea-form";

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();

const { useAppForm, withForm, withFieldGroup, useTypedAppFormContext } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    DateForm,
    InputForm,
    TextareaForm,
    SelectForm,
    SearchSelectForm,
    MultipleSelectForm,
    SwitchForm,
    CheckboxForm,
  },
  formComponents: {
    SubmitButton,
  },
});

export {
  fieldContext,
  formContext,
  useAppForm,
  useFieldContext,
  useFormContext,
  useTypedAppFormContext,
  withFieldGroup,
  withForm,
};
