import { AreaLoading, useAppForm, Wrapper } from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { Basics } from "./-basics";
import { EmployeeFormHeader } from "./-employee-form-header";
import { employeeFormOpts, employeeFormSchema } from "./-employee-form-options";

export function EmployeeForm() {
  const form = useAppForm({
    ...employeeFormOpts,
    validators: {
      onSubmit: employeeFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Wrapper>
      <AreaLoading className="flex flex-col gap-4" label={m.employees()}>
        <EmployeeFormHeader />
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
