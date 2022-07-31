import { VNode } from 'preact';

import { useExternalStore } from '@hooks/external-store';
import { resolveRenderable } from '@utils/react/resolve-renderable.util';

import { toasterStore } from '../../core/toaster.store';
import { Toast } from '../../toaster.types';

import { ToastBar } from '../toast-bar/toast-bar.component';
import './toaster.component.scss';

export function Toaster(): VNode {
  const { toastList } = useExternalStore(toasterStore);

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
