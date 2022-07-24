import { Dictionary, ValueOf } from '@typings/utility-types/object.types';
import { isDictionary } from '@utils/collection/is-dictionary.util';

export function mergeDeep<T extends Partial<Dictionary>>(target: T, ...sourceList: Partial<T>[]): T {
  if (!sourceList.length) return target;

  const source = sourceList.shift();

  if (!isDictionary(target)) return target;
  if (!isDictionary(source)) return mergeDeep(target, ...sourceList);

  const result = Object.entries(source).reduce(
    (acc: T, entry) => {
      const [key, value] = entry as [keyof T, ValueOf<T>];

      if (isDictionary(value)) {
        const intermediateTarget = (target[key] ?? {}) as Dictionary & ValueOf<T>;
        acc[key] = mergeDeep(intermediateTarget, value);
      } else {
        acc[key] = value;
      }

      return acc;
    },
    { ...target },
  );

  return mergeDeep(result, ...sourceList);
}
