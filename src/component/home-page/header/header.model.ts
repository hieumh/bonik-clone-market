export type TMenuOption = NonNullable<
  Readonly<{
    title: string;
    children?: Array<TMenuOption>;
  }>
>;

export type TCategory = {
  name: string;
  index: number;
};
