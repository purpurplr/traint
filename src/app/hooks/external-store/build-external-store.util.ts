import { StateUpdater } from 'preact/hooks';

import { Action, Dispatcher } from '@typings/store/actions.type';
import { ActionReducer } from '@typings/store/reducers.type';
import { resolveValue } from '@utils/resolve-value.util';

import { ExternalStore } from './external-store.types';

export function buildExternalStore<T>(initialState: T): [ExternalStore<T>, StateUpdater<T>];

export function buildExternalStore<T, A extends Action = Action>(
  initialState: T,
  reducer: ActionReducer<T, A>,
): [ExternalStore<T>, Dispatcher<A>];

export function buildExternalStore<T, A extends Action = Action>(
  initialState: T,
  reducer?: ActionReducer<T, A>,
): [ExternalStore<T>, Dispatcher<A> | StateUpdater<T>] {
  let state: T = initialState;

  let handleStoreChange: (() => void) | null = null;

  const externalStore: ExternalStore<T> = {
    subscribe: (notify) => (handleStoreChange = notify),
    getSnapshot: () => state,
  };

  let stateUpdater: StateUpdater<T> | Dispatcher<A>;

  if (reducer) {
    stateUpdater = (action: A): void => {
      state = reducer(state, action);
      handleStoreChange?.();
    };
  } else {
    stateUpdater = (update: T | ((previousState: T) => T)): void => {
      state = resolveValue(update, state);
      handleStoreChange?.();
    };
  }

  return [externalStore, stateUpdater];
}
