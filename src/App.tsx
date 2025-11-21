import { useTweetGenerator } from './hooks/use-tweet-generator'
import { useCopy } from './hooks/use-copy'
import { ButtonWin95, TweetPreview } from './components/ui'
import { MainWindow } from './components/layout'
import ConfigurationPanel from './components/features/configuration-panel/configuration-panel'
import styles from './App.module.css'

function App() {
  const tweetGenerator = useTweetGenerator()
  const { copy, isCopied } = useCopy()

  // Handle copy button click
  const handleCopy = async () => {
    if (
      tweetGenerator.preview &&
      tweetGenerator.preview !== '📝 Seu tweet aparecerá aqui...'
    ) {
      const success = await copy(tweetGenerator.preview)
      if (!success) {
        alert('Erro ao copiar tweet. Tente novamente.')
      }
    } else {
      alert('Configure as opções primeiro para gerar um tweet.')
    }
  }

  return (
    <div className={styles.app}>
      <MainWindow
        title="Bolha Dev - Tweet Creator"
        width={650}
        height={450}
        className={styles.mainWindow}
      >
        <div className={styles.content}>
          <ConfigurationPanel
            category={tweetGenerator.category}
            format={tweetGenerator.format}
            tone={tweetGenerator.tone}
            item={tweetGenerator.item}
            onCategoryChange={tweetGenerator.setCategory}
            onFormatChange={tweetGenerator.setFormat}
            onToneChange={tweetGenerator.setTone}
            onItemChange={tweetGenerator.setItem}
            getCategoryOptions={tweetGenerator.getCategoryOptions}
            getFormatOptions={tweetGenerator.getFormatOptions}
            getToneOptions={tweetGenerator.getToneOptions}
            getItemOptions={tweetGenerator.getItemOptions}
          />

          <TweetPreview
            preview={tweetGenerator.preview}
            className={styles.preview}
          />

          <div className={styles.copySection}>
            <ButtonWin95
              onClick={handleCopy}
              disabled={
                !tweetGenerator.category ||
                !tweetGenerator.format ||
                !tweetGenerator.item
              }
              className={`${styles.copyButton} ${
                isCopied ? styles.copied : ''
              }`}
              primary
            >
              {isCopied ? '✓ Copiado!' : 'Copy'}
            </ButtonWin95>
          </div>
        </div>
      </MainWindow>
    </div>
  )
}

export default App
