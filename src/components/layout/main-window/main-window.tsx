import React from 'react'
import TitleBar from '../title-bar/title-bar'
import styles from './main-window.module.css'

interface MainWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children: React.ReactNode
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  showTitleBar?: boolean
  showControls?: boolean
  className?: string
  width?: number | string
  height?: number | string
}

const MainWindow: React.FC<MainWindowProps> = ({
  title,
  children,
  onClose,
  onMinimize,
  onMaximize,
  showTitleBar = true,
  showControls = true,
  className = '',
  width = 600,
  height = 400,
  ...props
}) => {
  return (
    <div
      className={`${styles.mainWindow} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      {...props}
    >
      {showTitleBar && (
        <TitleBar
          title={title || ''}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          showControls={showControls}
        />
      )}

      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default MainWindow
