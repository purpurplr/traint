import { ActionLibrary, Dispatcher } from '@typings/store/actions.type';
import { ActionReducer } from '@typings/store/reducers.type';
import { createReducer, on } from '@utils/store/create-reducer.util';
import { props } from '@utils/store/action-config.util';
import { useReducer } from 'preact/hooks';
import { Toast } from '@shared-components/toasts/toaster.types';
import { createAction } from '@utils/store/create-action.util';

export const toasterActions = {
  addToast: createAction('[Toaster] Add Toast', props<{ toast: Toast }>()),
  updateToast: createAction('[Toaster] Update Toast', props<{ patch: Partial<Toast> }>()),
  upsertToast: createAction('[Toaster] Upsert Toast', props<{ toast: Toast }>()),
  removeToast: createAction('[Toaster] Remove Toast', props<{ id?: string }>()),
  setToastsLimit: createAction('[Toaster] Set Toasts Limit', props<{ limit: number }>()),
};

export type ToasterActions = ActionLibrary<typeof toasterActions>;
interface ToasterState {
  toastList: Toast[];
  toastsLimit: number;
}

const toasterReducer: ActionReducer<ToasterState, ToasterActions> = createReducer(
  on(toasterActions.addToast, (state, { toast }) => ({
    ...state,
    toastList: [toast, ...state.toastList].slice(0, state.toastsLimit),
  })),

  on(toasterActions.updateToast, (state, { patch }) => ({
    ...state,
    toastList: state.toastList.map((toast) => (toast.id === patch.id ? { ...toast, ...patch } : toast)),
  })),

  on(toasterActions.upsertToast, (state, { toast }) => {
    const action = state.toastList.find((t) => t.id === toast.id)
      ? toasterActions.updateToast({ patch: toast })
      : toasterActions.addToast({ toast });

    return toasterReducer(state, action);
  }),

  on(toasterActions.removeToast, (state, { id }) => ({
    ...state,
    toastList: state.toastList.filter((toast) => toast.id !== id),
  })),

  on(toasterActions.setToastsLimit, (state, { limit }) => ({
    ...state,
    toastsLimit: limit,
    toastList: state.toastList.slice(0, limit),
  })),
);

export function useToasterStore(): [Toast[], Dispatcher<ToasterActions>] {
  const [state, dispatch] = useReducer(toasterReducer, {
    toastList: [],
    toastsLimit: 0,
  });

  return [state.toastList, dispatch];
}
