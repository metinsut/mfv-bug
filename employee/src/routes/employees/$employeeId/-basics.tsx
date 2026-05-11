import { Card, CardContent, CardHeader, CardTitle, withForm } from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { employeeFormOpts } from "./-employee-form";

export const Basics = withForm({
  ...employeeFormOpts,
  render: ({ form }) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">{m.employeeDetails()}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <form.AppField
            name="employeeId"
            children={(field) => (
              <field.InputForm
                label={m.employeeNumber()}
                placeholder={m.employeeNumberPlaceholder()}
              />
            )}
          />
          <div />
          <form.AppField
            name="firstName"
            children={(field) => (
              <field.InputForm
                label={m.firstName()}
                placeholder={m.firstNamePlaceholder()}
                required
              />
            )}
          />
          <form.AppField
            name="lastName"
            children={(field) => (
              <field.InputForm
                label={m.lastName()}
                placeholder={m.lastNamePlaceholder()}
                required
              />
            )}
          />
          <form.AppField
            name="email"
            children={(field) => (
              <field.InputForm label={m.email()} placeholder={m.emailPlaceholder()} type="email" />
            )}
          />
        </CardContent>
      </Card>
    );
  },
});
