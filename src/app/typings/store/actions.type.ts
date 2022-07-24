import { Dictionary } from '@typings/utility-types/object.types';
import { UnknownFunction } from '@typings/utility-types/function.types';

export declare interface Action<T extends string = string> {
  readonly type: T;
}

export type Creator<P extends never[] = never[], R extends object = object> = (...args: P) => R;

export type ActionCreator<T extends string = string, C extends Creator = Creator> = C & Action<T>;

export interface ActionCreatorConfig<T> {
  hasProps: boolean;
  props: T;
}

export type ActionsType<A> = A extends ActionCreator<infer T, infer C> ? ReturnType<C> & { type: T } : never;

export type ExtractActionTypes<Creators extends readonly ActionCreator[]> = {
  [Key in keyof Creators]: Creators[Key] extends ActionCreator<infer T> ? T : never;
};

export type ActionLibrary<T extends Dictionary<UnknownFunction> = Dictionary<UnknownFunction>> = T extends Dictionary<
  (...args: never[]) => infer R
>
  ? R
  : unknown;

export type Dispatcher<T extends ActionLibrary> = (action: T) => void;
