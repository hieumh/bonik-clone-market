export type TMenuOption = NonNullable<
  Readonly<{
    title: string;
    children?: Array<TMenuOption>;
  }>
>;
