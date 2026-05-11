export type SelectOption = {
  label: string;
  value: string | null;
  disabled?: boolean;
};

type Props<T> = {
  items: T[] | undefined;
  getValue: (item: T) => string | undefined | null;
  getLabel: (item: T) => string | undefined | null;
};

export function toOptions<T>(props: Props<T>): SelectOption[] {
  const { items, getValue, getLabel } = props;

  return (items ?? [])
    ?.map((item) => {
      const value = getValue(item);
      if (!value) return null;

      return {
        value,
        label: getLabel(item) ?? value,
      };
    })
    .filter((opt): opt is NonNullable<typeof opt> => opt !== null);
}
