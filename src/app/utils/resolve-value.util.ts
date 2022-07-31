import { isFunction } from '@utils/is-function.util';

export function resolveValue<V, P>(valueOrFunction: V | ((arg: P) => V), arg: P): V {
  return isFunction(valueOrFunction) ? valueOrFunction(arg) : valueOrFunction;
}
