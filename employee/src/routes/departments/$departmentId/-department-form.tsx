import { AreaLoading, useAppForm, Wrapper } from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { Basics } from "./-basics";
import { DepartmentFormHeader } from "./-department-form-header";
import { departmentFormOpts, departmentFormSchema } from "./-department-form-options";

export function DepartmentForm() {
  const form = useAppForm({
    ...departmentFormOpts,
    validators: {
      onSubmit: departmentFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Wrapper>
      <AreaLoading className="flex flex-col gap-4" label={m.departments()}>
        <DepartmentFormHeader />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.AppForm>
            <div className="flex flex-col gap-4">
              <Basics form={form} />
              <div className="flex justify-end">
                <form.SubmitButton label={m.save()} />
              </div>
            </div>
          </form.AppForm>
        </form>
      </AreaLoading>
    </Wrapper>
  );
}
