import React from 'react';
import styles from './progress-bar-win95.module.css';

interface ProgressBarWin95Props extends React.HTMLAttributes<HTMLDivElement> {
  progress?: number;
  message?: string;
  showPercentage?: boolean;
  className?: string;
}

const ProgressBarWin95: React.FC<ProgressBarWin95Props> = ({
  progress = 0,
  message = '',
  showPercentage = true,
  className = '',
  ...props
}) => {
  const isVisible = progress > 0 && progress < 100;

  if (!isVisible && !message) return null;

  return (
    <div className={`${styles.progressBarContainer} ${className}`} {...props}>
      {message && (
        <div className={styles.message}>
          {message}
        </div>
      )}

      {isVisible && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          >
            {showPercentage && (
              <span className={styles.percentageText}>
                {progress}%
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBarWin95;