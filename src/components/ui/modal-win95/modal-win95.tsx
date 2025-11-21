import React from 'react';
import { createPortal } from 'react-dom';
import MainWindow from '../../layout/main-window/main-window';
import styles from './modal-win95.module.css';

interface ModalWin95Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ModalWin95: React.FC<ModalWin95Props> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnOverlayClick = false,
  width = 400,
  height = 300,
  className = '',
  ...props
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div className={styles.modalContainer}>
        <MainWindow
          title={title}
          onClose={showCloseButton ? onClose : undefined}
          showControls={showCloseButton}
          width={width}
          height={height}
          className={`${styles.modal} ${className}`}
          {...props}
        >
          {title && (
            <h2 id="modal-title" className="sr-only">
              {title}
            </h2>
          )}
          <div className={styles.modalContent}>
            {children}
          </div>
        </MainWindow>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ModalWin95;