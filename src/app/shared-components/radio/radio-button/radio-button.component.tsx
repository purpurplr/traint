import { ComponentChildren, VNode } from 'preact';
import { useMemo } from 'preact/hooks';

import { consecutiveId } from '@utils/conseq-id.util';
import { RadioLike } from '@shared-components/radio/radio.types';

import './radio-button.component.scss';

interface RadioButtonProps extends Partial<RadioLike> {
  id?: string;
  children?: ComponentChildren;
}

export function RadioButton({ id, isActive, setActiveId, children }: RadioButtonProps): VNode {
  const safeId = useMemo(() => id ?? consecutiveId(), [id]);

  const setActive = (shouldActivate: boolean): void => {
    if (shouldActivate) setActiveId?.(safeId);
  };

  return (
    <div className="radio-button">
      <input type="radio" id={safeId} checked={isActive?.(safeId)} onChange={(v) => setActive(v.returnValue)} />
      <label className="radio-button__label" htmlFor={safeId}>
        {children}
      </label>
    </div>
  );
}
