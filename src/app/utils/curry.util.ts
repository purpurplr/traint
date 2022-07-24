import { F } from 'ts-toolbelt';

export function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn> {
  return function curried(this: ThisParameterType<Fn>, ...args: unknown[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args) as unknown;
    }

    return (...args2: unknown[]) => {
      return curried.apply(this, [...args, ...args2]);
    };
  } as F.Curry<Fn>;
}
