import React from 'react';
import styles from './button-win95.module.css';

interface ButtonWin95Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  primary?: boolean;
}

const ButtonWin95: React.FC<ButtonWin95Props> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}) => {
  const buttonClass = [
    styles.win95Button,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonWin95;