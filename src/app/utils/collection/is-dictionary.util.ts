import { Dictionary } from '@typings/utility-types/object.types';

export function isDictionary(item: unknown): item is Dictionary {
  return !!item && typeof item === 'object' && !Array.isArray(item);
}
