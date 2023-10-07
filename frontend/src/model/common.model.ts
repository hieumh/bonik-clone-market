import { Dispatch, SetStateAction } from "react";

export type THandler<T = void> = (...args: any) => T;

export type TSetAction<T> = Dispatch<SetStateAction<T>>;

export interface IPaginationResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
}

export enum ESupportCountry {
  EN = "en",
  VN = "vn",
  BN = "bn",
  HN = "hn",
}
