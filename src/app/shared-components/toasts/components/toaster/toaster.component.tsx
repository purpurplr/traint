import { VNode } from 'preact';

import { resolveRenderable } from '@utils/react/resolve-renderable.util';
import { Toast } from '@shared-components/toasts/toaster.types';

import { ToastBar } from '../toast-bar/toast-bar.component';
import './toaster.component.scss';

export interface ToasterProps {
  toastList: Toast[];
}

export function Toaster({ toastList }: ToasterProps): VNode {
  const pause = (): void => toastList.forEach(({ timer }) => timer.pause());
  const resume = (): void => toastList.forEach(({ timer }) => timer.resume());

  return (
    <div className={`toaster`} onMouseEnter={pause} onMouseLeave={resume}>
      {toastList.map((toast: Toast) => (
        <div key={toast.id} className={`toaster__toast`}>
          {toast.type === 'custom' ? resolveRenderable(toast.message, toast) : <ToastBar toast={toast} />}
        </div>
      ))}
    </div>
  );
}
