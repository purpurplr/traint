import './checkbox.component.scss';

import clsx from 'clsx';

import { VNode } from 'preact';
import { JSXInternal } from 'preact/src/jsx';

interface CheckboxProps {
  value?: string;
  name?: string;
  label?: VNode | string;
  checked?: boolean;
  onChange?: (e: JSXInternal.TargetedEvent<HTMLInputElement>, target: HTMLInputElement) => void;
}

export const Checkbox = ({ name, value, label, checked, onChange }: CheckboxProps): JSX.Element => {
  const handleChange: JSXInternal.GenericEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e, e.target as HTMLInputElement);
  };

  return (
    <label className="checkbox__container">
      <input className="checkbox__input" type="checkbox" name={name} value={value} onChange={handleChange} />
      <span className={clsx('checkbox', checked && 'checkbox_checked')} aria-hidden="true" />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};
