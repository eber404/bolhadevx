import React from 'react';
import styles from './toast.module.css';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message?: string;
  isVisible: boolean;
  type?: ToastType;
  onClose?: () => void;
  autoHide?: boolean;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, type = 'info', onClose, autoHide = true, duration = 3000 }) => {
  React.useEffect(() => {
    if (isVisible && autoHide) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoHide, duration, onClose]);

  if (!isVisible || !message) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return '🔔';
    }
  };

  return (
    <div className={`${styles.toast} ${styles[type]} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.toastContent}>
        <span className={styles.toastIcon}>{getIcon()}</span>
        <span className={styles.toastMessage}>{message}</span>
        {onClose && (
          <button
            className={styles.toastClose}
            onClick={onClose}
            aria-label="Fechar notificação"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;