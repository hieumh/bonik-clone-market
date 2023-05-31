import { Dispatch, SetStateAction } from 'react';

export type THandler = (...args: any) => void;

export type TSetAction<T> = Dispatch<SetStateAction<T>>;
