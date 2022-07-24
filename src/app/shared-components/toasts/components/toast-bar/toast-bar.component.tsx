import { VNode } from 'preact';

import { resolveRenderable } from '@utils/react/resolve-renderable.util';
import { Toast } from '@shared-components/toasts/toaster.types';

import './toast-bar.component.scss';

export function ToastBar({ toast }: { toast: Toast }): VNode {
  return (
    <div className={`toast toast_type_${toast.type}`}>
      <div>icon</div>
      <div>{resolveRenderable(toast.message, toast)}</div>
      <button onClick={toast.remove}>close</button>
    </div>
  );
}
