import React from 'react';
import styles from './title-bar.module.css';

interface TitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  showControls?: boolean;
  className?: string;
}

const TitleBar: React.FC<TitleBarProps> = ({
  title,
  onClose,
  onMinimize,
  onMaximize,
  showControls = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`${styles.titleBar} ${className}`}
      {...props}
    >
      <div className={styles.titleSection}>
        <img src="/bird.ico" alt="" className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </div>

      {showControls && (
        <div className={styles.controls}>
          {onMinimize && (
            <button
              className={styles.titleBarButton}
              onClick={onMinimize}
              aria-label="Minimizar"
              title="Minimizar"
            >
              <span>_</span>
            </button>
          )}
          {onMaximize && (
            <button
              className={styles.titleBarButton}
              onClick={onMaximize}
              aria-label="Maximizar"
              title="Maximizar"
            >
              <span>□</span>
            </button>
          )}
          {onClose && (
            <button
              className={`${styles.titleBarButton} ${styles.closeButton}`}
              onClick={onClose}
              aria-label="Fechar"
              title="Fechar"
            >
              <span>×</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TitleBar;