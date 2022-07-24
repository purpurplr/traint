import { ToasterOptions } from '@shared-components/toasts/toaster.types';

export const DEFAULT_TOASTER_OPTIONS: ToasterOptions = {
  toastsLimit: 6,
  byType: {
    success: { duration: 3000 },
    error: { duration: 6000 },
    message: { duration: 3000 },
    custom: { duration: 4000 },
  },
};
