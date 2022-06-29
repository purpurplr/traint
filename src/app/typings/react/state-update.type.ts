export type StateUpdate<S> = S | ((prevState: S) => S);
