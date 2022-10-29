import { UnknownFunction } from '@interfaces/utility-types/function.types';

export function isFunction(valOrFunction: unknown): valOrFunction is UnknownFunction {
  return typeof valOrFunction === 'function';
}
