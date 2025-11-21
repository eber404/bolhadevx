import React from 'react';
import styles from './checkbox-win95.module.css';

interface CheckboxWin95Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  id?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const CheckboxWin95: React.FC<CheckboxWin95Props> = ({
  id,
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.checkboxContainer} ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-label={ariaLabel || label}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className={`${styles.label} ${disabled ? styles.disabled : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckboxWin95;