import { StateUpdater, useCallback, useEffect, useState } from 'preact/hooks';
import { useEventListener } from '@hooks/use-event-listener.hook';

// TODO strategy
export function useLocalStorage<T>(key: string, initialValue: T): [T, StateUpdater<T>] {
  const readStoredValue = useCallback((): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error); // TODO Error handling
      return initialValue;
    }
  }, [initialValue, key]);

  const [value, setValue] = useState<T>(readStoredValue);

  const setStoredValue: StateUpdater<T> = useCallback(
    (valueToStore) => {
      try {
        const newValue = valueToStore instanceof Function ? valueToStore(value) : valueToStore;
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
        window.dispatchEvent(new Event('traint-storage'));
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [value],
  );

  useEffect(() => {
    setValue(readStoredValue());
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if (!('key' in event) || event.key === key) {
        setValue(readStoredValue());
      }
    },
    [key, readStoredValue],
  );

  useEventListener('storage', handleStorageChange);
  useEventListener('traint-storage', handleStorageChange);

  return [value, setStoredValue];
}
