import { Action, ActionCreator, ActionsType, ExtractActionTypes } from '@typings/store/actions.type';

export interface OnReducer<State, Creators extends readonly ActionCreator[]> {
  (state: State, action: ActionsType<Creators[number]>): State;
}

export interface ReducerTypes<State, Creators extends readonly ActionCreator[]> {
  reducer: OnReducer<State, Creators>;
  types: ExtractActionTypes<Creators>;
}

export interface ActionReducer<T, V extends Action = Action> {
  (state: T, action: V): T;
}
