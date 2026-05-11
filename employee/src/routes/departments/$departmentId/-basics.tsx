import { Card, CardContent, CardHeader, CardTitle, withForm } from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { departmentFormOpts } from "./-department-form";

export const Basics = withForm({
  ...departmentFormOpts,
  render: ({ form }) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">{m.departmentDetails()}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <form.AppField
            name="id"
            children={(field) => <field.InputForm label={m.id()} disabled={true} />}
          />
          <form.AppField
            name="name"
            children={(field) => (
              <field.InputForm
                label={m.departmentName()}
                placeholder={m.departmentNamePlaceholder()}
                required
              />
            )}
          />
        </CardContent>
      </Card>
    );
  },
});
