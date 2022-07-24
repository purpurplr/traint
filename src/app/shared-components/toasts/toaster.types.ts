import { Renderable } from '@typings/react/renderable.type';
import { Timer } from '@utils/timer.util';

export type ToastType = 'success' | 'error' | 'message' | 'custom';

export interface Toast {
  id: string;
  type: ToastType;
  message: ToastMessage;
  duration: number;

  timer: Timer;
  remove: () => void;
}

export type ToastMessage = Renderable<Toast>;

export type ToastOptions = Required<Pick<Toast, 'duration'>>;

export interface ToasterOptions {
  toastsLimit: number;
  byType: Record<ToastType, ToastOptions>;
}

export type CookAToast = (message: ToastMessage, options?: ToastOptions) => Toast;

export type ToasterApi = CookAToast & {
  [key in Exclude<ToastType, 'custom'>]: CookAToast;
};
