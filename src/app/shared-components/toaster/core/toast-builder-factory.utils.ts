import { consecutiveId } from '@utils/conseq-id.util';
import { setTimer } from '@utils/timer.util';

import { Toast, ToastMessage, ToastOptions, ToastType } from '../toaster.types';
import { toasterActions, toasterDispatcher } from '../core/toaster.store';
import { DEFAULT_TOAST_OPTIONS } from '../toaster-config.constants';

export function toastBuilderFactory(type: ToastType) {
  return (message: ToastMessage, toastOptions: Partial<ToastOptions> = {}): Toast => {
    const mergedOptions: ToastOptions = { ...DEFAULT_TOAST_OPTIONS[type], ...toastOptions };
    const id = consecutiveId();

    const remove = (): void => toasterDispatcher(toasterActions.removeToast({ id }));
    const timer = setTimer(() => remove(), mergedOptions.duration);

    const toast = { ...mergedOptions, id, type, message, timer, remove };
    toasterDispatcher(toasterActions.upsertToast({ toast }));

    return toast;
  };
}
