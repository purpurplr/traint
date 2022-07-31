import { Cleanup } from 'preact/hooks/src/internal';

export type StoreSubscriber = (handleStoreChange: () => void) => Cleanup;

export interface ExternalStore<T> {
  subscribe: StoreSubscriber;
  getSnapshot: () => T;
}

export interface Instance<T> {
  value: T;
  getSnapshot: () => T;
}
