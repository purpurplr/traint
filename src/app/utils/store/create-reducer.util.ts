import { Action, ActionCreator, ExtractActionTypes } from '@typings/store/actions.type';
import { ActionReducer, OnReducer, ReducerTypes } from '@typings/store/reducers.type';

export function on<State, Creators extends readonly ActionCreator[]>(
  ...args: [...creators: Creators, reducer: OnReducer<State extends infer S ? S : never, Creators>]
): ReducerTypes<State, Creators> {
  const reducer = args.pop() as OnReducer<any, Creators>; // eslint-disable-line @typescript-eslint/no-explicit-any
  const types = (args as unknown as Creators).map((creator) => creator.type) as unknown as ExtractActionTypes<Creators>;
  return { reducer, types };
}

export function createReducer<S, A extends Action = Action>(
  ...ons: ReducerTypes<S, readonly ActionCreator[]>[]
): ActionReducer<S, A> {
  const reducerMap = ons.reduce((map, onFunction) => {
    onFunction.types.forEach((type) => {
      const existingReducer = map.get(type);
      if (existingReducer) {
        const newReducer: typeof existingReducer = (state, action) => {
          return onFunction.reducer(existingReducer(state, action), action);
        };
        map.set(type, newReducer);
      } else {
        map.set(type, onFunction.reducer);
      }
    });
    return map;
  }, new Map<A['type'], OnReducer<S, ActionCreator[]>>());

  return (state: S, action: A): S => {
    const reducer = reducerMap.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}
