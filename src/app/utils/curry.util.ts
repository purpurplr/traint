import { Curry } from 'ts-toolbelt/out/Function/Curry';

type AnyFunction = (...args: any[]) => any; // eslint-disable-line @typescript-eslint/no-explicit-any

export function curry<F extends AnyFunction>(func: F): Curry<F> {
  return function curried(this: ThisParameterType<F>, ...args: unknown[]) {
    if (args.length >= func.length) {
      return func.apply(this, args) as unknown;
    }

    return (...args2: unknown[]) => {
      return curried.apply(this, [...args, ...args2]);
    };
  } as unknown as Curry<F>;
}
