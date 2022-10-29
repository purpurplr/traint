import { Dispatch, SetStateAction } from 'react';

export type StateUpdaterType<S> = Dispatch<SetStateAction<S>>;
