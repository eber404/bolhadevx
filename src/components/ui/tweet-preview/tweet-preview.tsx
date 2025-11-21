import React from 'react'
import styles from './tweet-preview.module.css'

interface TweetPreviewProps {
  preview: string
  showHeader?: boolean
  className?: string
}

const TweetPreview: React.FC<TweetPreviewProps> = ({
  preview,
  showHeader = true,
  className = '',
}) => {
  return (
    <div className={`${styles.tweetPreview} ${className}`}>
      {showHeader && (
        <div className={styles.previewHeader}>
          <span>🐦 Preview do Tweet</span>
        </div>
      )}

      <div className={styles.tweetContainer}>
        <div className={styles.tweetContent}>
          <div className={styles.tweetText}>{preview}</div>

          <div className={styles.tweetMeta}>
            <span className={styles.timestamp}>há 1s</span>
            <span className={styles.divider}>·</span>
            <span className={styles.source}>Twitter Web App</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetPreview
