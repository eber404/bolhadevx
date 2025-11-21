import { useState, useEffect, useCallback } from 'react';
import {
  generatePreview as createPreview,
  categoryOptions as categoryList,
  formatOptions as formatList,
  toneOptions as toneList,
  Category,
  Format,
  Tone,
  TweetConfig,
  DropdownOption
} from '../utils/tweet-templates';

interface TweetGeneratorState {
  category: Category | '';
  format: Format | '';
  tone: Tone;
  item: string;
  preview: string;
}

const initialState: TweetGeneratorState = {
  category: '',
  format: '',
  tone: 'sarcastic',
  item: '',
  preview: '📝 Seu tweet aparecerá aqui...'
};

interface StateUpdates {
  category?: Category | '';
  format?: Format | '';
  tone?: Tone;
  item?: string;
  preview?: string;
}

export function useTweetGenerator() {
  const [state, setState] = useState<TweetGeneratorState>(initialState);

  // Atualizar uma propriedade do estado
  const updateState = useCallback((updates: StateUpdates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Atualizar categoria
  const setCategory = useCallback((category: Category | '') => {
    updateState({
      category,
      item: '', // Reset item when category changes
      preview: initialState.preview
    });
  }, [updateState]);

  // Atualizar formato
  const setFormat = useCallback((format: Format | '') => {
    updateState({ format });
  }, [updateState]);

  // Atualizar tom
  const setTone = useCallback((tone: Tone) => {
    updateState({ tone });
  }, [updateState]);

  // Atualizar item específico (framework, linguagem, etc.)
  const setItem = useCallback((item: string) => {
    updateState({ item });
  }, [updateState]);

  // Gerar preview em tempo real
  useEffect(() => {
    if (state.category && state.format && state.item) {
      const config: TweetConfig = {
        category: state.category,
        format: state.format,
        item: state.item
      };
      const preview = createPreview(config);
      updateState({ preview });
    } else {
      updateState({ preview: initialState.preview });
    }
  }, [state.category, state.format, state.item, updateState]);

  // Verificar se pode copiar
  const canCopy = Boolean(state.category && state.format && state.item);

  // Obter opções baseado na categoria selecionada
  const getCategoryOptions = useCallback((): DropdownOption[] => categoryList, []);

  const getFormatOptions = useCallback((): DropdownOption[] => formatList, []);

  const getToneOptions = useCallback((): DropdownOption[] => toneList, []);

  // Obter opções de itens baseado na categoria
  const getItemOptions = useCallback((): DropdownOption[] => {
    if (!state.category) return [];

    switch (state.category) {
      case 'frameworks':
        return [
          { value: 'React', label: 'React' },
          { value: 'Django', label: 'Django' },
          { value: 'Laravel', label: 'Laravel' },
          { value: 'Spring', label: 'Spring' }
        ];
      case 'linguagens':
        return [
          { value: 'JavaScript', label: 'JavaScript' },
          { value: 'Python', label: 'Python' },
          { value: 'Java', label: 'Java' },
          { value: 'PHP', label: 'PHP' },
          { value: 'C#', label: 'C#' }
        ];
      case 'metodologias':
        return [
          { value: 'Scrum', label: 'Scrum' },
          { value: 'Kanban', label: 'Kanban' },
          { value: 'Safe Agile', label: 'SAFe Agile' },
          { value: 'Extreme Programming', label: 'Extreme Programming' }
        ];
      case 'ferramentas':
        return [
          { value: 'IntelliJ IDEA', label: 'IntelliJ IDEA' },
          { value: 'WebStorm', label: 'WebStorm' },
          { value: 'Docker Desktop', label: 'Docker Desktop' },
          { value: 'Postman', label: 'Postman' },
          { value: 'MongoDB Compass', label: 'MongoDB Compass' }
        ];
      case 'bancos':
        return [
          { value: 'SQL', label: 'SQL' },
          { value: 'NoSQL', label: 'NoSQL' }
        ];
      default:
        return [];
    }
  }, [state.category]);

  return {
    // Estado essencial
    category: state.category,
    format: state.format,
    tone: state.tone,
    item: state.item,
    preview: state.preview,

    // Actions
    setCategory,
    setFormat,
    setTone,
    setItem,

    // Getters
    canCopy,
    getCategoryOptions,
    getFormatOptions,
    getToneOptions,
    getItemOptions
  };
}