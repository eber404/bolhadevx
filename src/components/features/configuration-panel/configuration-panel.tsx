import React from 'react'
import { DropdownWin95 } from '../../ui'
import {
  Category as TweetCategory,
  Format as TweetFormat,
  Tone as TweetTone,
  DropdownOption as Option,
} from '../../../utils/tweet-templates'
import styles from './configuration-panel.module.css'

interface ConfigurationPanelProps {
  category: TweetCategory | ''
  format: TweetFormat | ''
  tone: TweetTone
  item: string
  onCategoryChange: (category: TweetCategory | '') => void
  onFormatChange: (format: TweetFormat | '') => void
  onToneChange: (tone: TweetTone) => void
  onItemChange: (item: string) => void
  getCategoryOptions: () => Option[]
  getFormatOptions: () => Option[]
  getToneOptions: () => Option[]
  getItemOptions: () => Option[]
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  category,
  format,
  tone,
  item,
  onCategoryChange,
  onFormatChange,
  onToneChange,
  onItemChange,
  getCategoryOptions,
  getFormatOptions,
  getToneOptions,
  getItemOptions,
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span>⚙️ Configuração do Tweet</span>
      </div>

      <div className={styles.panelContent}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="category">
              Categoria:
            </label>
            <DropdownWin95
              id="category"
              value={category}
              onChange={(e) =>
                onCategoryChange(e.target.value as TweetCategory | '')
              }
              options={getCategoryOptions()}
              placeholder="Selecione uma categoria"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="item">
              Item:
            </label>
            <DropdownWin95
              id="item"
              value={item}
              onChange={(e) => onItemChange(e.target.value)}
              options={getItemOptions()}
              placeholder="Selecione o item específico"
              disabled={!category}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="tone">
              Tom:
            </label>
            <DropdownWin95
              id="tone"
              value={tone}
              onChange={(e) => onToneChange(e.target.value as TweetTone)}
              options={getToneOptions()}
              placeholder="Selecione o tom"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="format">
              Formato:
            </label>
            <DropdownWin95
              id="format"
              value={format}
              onChange={(e) =>
                onFormatChange(e.target.value as TweetFormat | '')
              }
              options={getFormatOptions()}
              placeholder="Selecione o formato"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationPanel
