import React from 'react';
import { DropdownOption } from '../../../utils/tweet-templates';
import styles from './dropdown-win95.module.css';

interface DropdownWin95Props extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownOption[];
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

const DropdownWin95: React.FC<DropdownWin95Props> = ({
  value,
  onChange,
  options,
  disabled = false,
  className = '',
  placeholder = 'Selecione...',
  'aria-label': ariaLabel,
  ...props
}) => {
  const selectClass = [
    styles.dropdown,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <select
      className={selectClass}
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownWin95;