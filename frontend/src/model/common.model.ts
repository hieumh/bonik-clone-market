import { Dispatch, SetStateAction } from "react";

export type THandler<T = void> = (...args: any) => T;

export type TSetAction<T> = Dispatch<SetStateAction<T>>;

export enum ESupportCountry {
  EN = "en",
  VN = "vn",
  BN = "bn",
  HN = "hn",
}
