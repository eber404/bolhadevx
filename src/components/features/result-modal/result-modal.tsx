import React from 'react';
import { ButtonWin95, ModalWin95 } from '../../ui';
import { useCopy } from '../../../hooks/use-copy';
import TweetPreview from '../../ui/tweet-preview/tweet-preview';
import styles from './result-modal.module.css';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  tweet: string;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, tweet }) => {
  const { copy, isCopied, copyError } = useCopy();

  const handleCopy = async () => {
    const success = await copy(tweet);
    if (success) {
      // Auto close after successful copy
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <ModalWin95
      isOpen={isOpen}
      onClose={onClose}
      title="🐦 Tweet Gerado!"
      width={450}
      height={300}
      closeOnOverlayClick={false}
    >
      <div className={styles.modalContent}>
        <div className={styles.tweetSection}>
          <TweetPreview
            preview={tweet}
            showHeader={false}
            className={styles.finalTweet}
          />
        </div>

        <div className={styles.actions}>
          <ButtonWin95
            onClick={handleCopy}
            className={`${styles.copyButton} ${isCopied ? styles.copied : ''}`}
            disabled={!tweet}
          >
            {isCopied ? '✓ Copiado!' : copyError ? '❌ Falhou' : 'Copy'}
          </ButtonWin95>
        </div>

        {copyError && (
          <div className={styles.errorMessage}>
            ❌ {copyError}
          </div>
        )}
      </div>
    </ModalWin95>
  );
};

export default ResultModal;