import { Dispatch, SetStateAction } from "react";

export type THandler<T = void> = (...args: any) => T;

export type TSetAction<T> = Dispatch<SetStateAction<T>>;
