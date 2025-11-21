import React from 'react';
import { CheckboxWin95, DropdownWin95 } from '../../ui';
import {
  engagementTriggers,
  Category,
  Format,
  Tone,
  TriggerId,
  DropdownOption
} from '../../../utils/tweet-templates';
import styles from './configuration-panel.module.css';

interface ConfigurationPanelProps {
  category: Category | '';
  format: Format | '';
  tone: Tone;
  item: string;
  triggers: TriggerId[];
  onCategoryChange: (category: Category | '') => void;
  onFormatChange: (format: Format | '') => void;
  onToneChange: (tone: Tone) => void;
  onItemChange: (item: string) => void;
  onTriggerToggle: (triggerId: TriggerId) => void;
  getCategoryOptions: () => DropdownOption[];
  getFormatOptions: () => DropdownOption[];
  getToneOptions: () => DropdownOption[];
  getItemOptions: () => DropdownOption[];
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  category,
  format,
  tone,
  item,
  triggers,
  onCategoryChange,
  onFormatChange,
  onToneChange,
  onItemChange,
  onTriggerToggle,
  getCategoryOptions,
  getFormatOptions,
  getToneOptions,
  getItemOptions
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
              onChange={(e) => onCategoryChange(e.target.value as Category | '')}
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
              onChange={(e) => onToneChange(e.target.value as Tone)}
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
              onChange={(e) => onFormatChange(e.target.value as Format | '')}
              options={getFormatOptions()}
              placeholder="Selecione o formato"
            />
          </div>
        </div>

        <div className={styles.triggersSection}>
          <div className={styles.triggersHeader}>
            <span>⚡ Gatilhos de Engajamento:</span>
          </div>
          <div className={styles.triggersGrid}>
            {engagementTriggers.map((trigger) => (
              <CheckboxWin95
                key={trigger.id}
                id={trigger.id}
                checked={triggers.includes(trigger.id)}
                onChange={() => onTriggerToggle(trigger.id)}
                label={`${trigger.symbol} ${trigger.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPanel;