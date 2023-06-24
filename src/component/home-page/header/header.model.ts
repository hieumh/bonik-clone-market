import { ReactNode } from "react";

export type TMenuOption = NonNullable<
  Readonly<{
    title: string;
    children?: Array<TMenuOption>;
  }>
>;

export type TCategory = {
  name: string;
  index: number;
  icon?: ReactNode;
  children?: Array<TCategory>;
};

export type TFashionCategory = {
  name: string;
  children: Array<string>;
};
