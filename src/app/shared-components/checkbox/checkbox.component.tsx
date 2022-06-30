import { JSX } from 'preact';
import clsx from 'clsx';

import './checkbox.component.scss';

export interface CheckboxComponentProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: string | JSX.Element;
}

// TODO норм чекбоксы без сломанной анимации и с инпютами внутри
export const CheckboxComponent = ({ checked, onChange, children }: CheckboxComponentProps): JSX.Element => {
  return (
    <label className="checkbox-container" onClick={() => onChange?.(!checked)}>
      <div className={clsx('checkbox', { checkbox_checked: checked })} />
      <span>{children}</span>
    </label>
  );
};
