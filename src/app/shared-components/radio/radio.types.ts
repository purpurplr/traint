import { DictionaryKey } from '@typings/utility-types/object.types';

export interface RadioLike<T extends DictionaryKey = DictionaryKey> {
  isActive: (id: T) => boolean;
  setActiveId: (id: T) => void;
}
