import { ToasterOptions } from './toaster.types';

export const DEFAULT_TOAST_OPTIONS: ToasterOptions = {
  success: { duration: 3000 },
  error: { duration: 6000 },
  message: { duration: 3000 },
  custom: { duration: 4000 },
};
