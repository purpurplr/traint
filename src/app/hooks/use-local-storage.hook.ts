import { StateUpdater, useCallback, useEffect, useState } from 'preact/hooks';
import { useEventListener } from '@hooks/use-event-listener.hook';

// TODO strategy
export function useLocalStorage<T>(key: string, initialValue: T): [T, StateUpdater<T>] {
  const readValue = useCallback((): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error); // TODO Error handling
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: StateUpdater<T> = useCallback(
    (value) => {
      // Prevent build error "window is undefined" but keeps working
      if (typeof window === 'undefined') {
        console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
      }

      try {
        // Allow value to be a function so we have the same API as useState
        console.log('prev', storedValue);
        const newValue = value instanceof Function ? value(storedValue) : value;
        console.log('curr', newValue);

        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(newValue));

        // Save state
        setStoredValue(newValue);

        // We dispatch a custom event so every useLocalStorage hook are notified
        window.dispatchEvent(new Event('local-storage'));
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [storedValue],
  );

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ('key' in event && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue],
  );

  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange);

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener('local-storage', handleStorageChange);

  return [storedValue, setValue];
}
