import { DictionaryKey } from '../utility-types/object.types';

export interface TypedBy<T extends DictionaryKey> {
  type: T;
}
