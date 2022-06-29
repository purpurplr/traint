import { JSX } from 'preact';

import './checkbox.component.scss';

export interface CheckboxComponentProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: string | JSX.Element;
}

// TODO норм чекбоксы без сломанной анимации и с инпютами внутри
export const CheckboxComponent = ({ checked, onChange, children }: CheckboxComponentProps): JSX.Element => {
  const checkboxClassList = `checkbox ${checked ? 'checkbox_checked' : ''}`;
  return (
    <label className="checkbox-container" onClick={() => onChange?.(!checked)}>
      <div className={checkboxClassList} />
      <span>{children}</span>
    </label>
  );
};
