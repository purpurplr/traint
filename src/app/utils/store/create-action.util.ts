import { Dictionary } from '@typings/utility-types/object.types';
import { Action, ActionCreator, ActionCreatorConfig, Creator } from '@typings/store/actions.type';

function defineType<T extends string, C extends Creator>(type: T, creator: C): ActionCreator<T, C> {
  return Object.defineProperty(creator, 'type', {
    value: type,
    writable: false,
  }) as ActionCreator<T, C>;
}

export function createAction<T extends string>(type: T): ActionCreator<T, () => Action<T>>;

export function createAction<T extends string, P extends Dictionary>(
  type: T,
  config: ActionCreatorConfig<P>,
): ActionCreator<T, (props: P) => P & Action<T>>;

export function createAction<T extends string>(type: T, config?: ActionCreatorConfig<T>): ActionCreator<T> {
  return config?.hasProps
    ? defineType(type, (properties: Dictionary) => ({ ...properties, type }))
    : defineType(type, () => ({ type }));
}
