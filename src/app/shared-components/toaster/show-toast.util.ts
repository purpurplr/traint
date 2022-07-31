import { toastBuilderFactory } from './core/toast-builder-factory.utils';

export const showToast = Object.assign(toastBuilderFactory('custom'), {
  error: toastBuilderFactory('error'),
  success: toastBuilderFactory('success'),
  message: toastBuilderFactory('message'),
});
