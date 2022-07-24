import { consecutiveId } from '@utils/conseq-id.util';
import { Toast, ToasterOptions, ToastMessage, ToastOptions, ToastType } from '@shared-components/toasts/toaster.types';
import { toasterActions, ToasterActions } from '@shared-components/toasts/core/toaster.store';
import { setTimer } from '@utils/timer.util';
import { Dispatcher } from '@typings/store/actions.type';

export const toastBuilderFactory =
  (toasterOptions: ToasterOptions, dispatch: Dispatcher<ToasterActions>) =>
  (type: ToastType) =>
  (message: ToastMessage, options: Partial<ToastOptions> = {}): Toast => {
    const mergedOptions: ToastOptions = { ...toasterOptions.byType[type], ...options };
    const id = consecutiveId();
    const remove = (): void => dispatch(toasterActions.removeToast({ id }));
    const timer = setTimer(() => remove(), mergedOptions.duration);

    const toast = { ...mergedOptions, id, type, message, timer, remove };
    dispatch(toasterActions.upsertToast({ toast }));

    return toast;
  };
