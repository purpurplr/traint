import './checkbox.component.scss';
import { ChangeEventHandler, ReactNode } from 'react';

interface CheckboxProps {
  value?: string;
  name?: string;
  label?: ReactNode;
  checked?: boolean;
  // TODO 'onChange' typing
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ name, value, label, checked, onChange }: CheckboxProps): JSX.Element => {
  return (
    <label className="checkbox-container">
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="checkbox__mark" aria-hidden="true" />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};
