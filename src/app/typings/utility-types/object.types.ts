export type DictionaryKey = string | number | symbol;

export type Dictionary<T = unknown> = Record<DictionaryKey, T>;

export type ValueOf<T> = T[keyof T];
