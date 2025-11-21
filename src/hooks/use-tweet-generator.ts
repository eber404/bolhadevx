import { useState, useEffect, useCallback } from 'react';
import {
  generatePreview,
  categoryOptions,
  formatOptions,
  toneOptions,
  Category,
  Format,
  Tone,
  TriggerId,
  TweetConfig,
  DropdownOption
} from '../utils/tweet-templates';

interface TweetGeneratorState {
  category: Category | '';
  format: Format | '';
  tone: Tone;
  item: string;
  triggers: TriggerId[];
  preview: string;
}

const initialState: TweetGeneratorState = {
  category: '',
  format: '',
  tone: 'sarcastic',
  item: '',
  triggers: [],
  preview: '📝 Seu tweet aparecerá aqui...'
};

interface StateUpdates {
  category?: Category | '';
  format?: Format | '';
  tone?: Tone;
  item?: string;
  triggers?: TriggerId[];
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

  // Toggle de trigger
  const toggleTrigger = useCallback((triggerId: TriggerId) => {
    setState(prev => ({
      ...prev,
      triggers: prev.triggers.includes(triggerId)
        ? prev.triggers.filter(id => id !== triggerId)
        : [...prev.triggers, triggerId]
    }));
  }, []);

  // Gerar preview em tempo real
  useEffect(() => {
    if (state.category && state.format && state.item && state.tone) {
      const config: TweetConfig = {
        category: state.category,
        format: state.format,
        tone: state.tone,
        item: state.item,
        triggers: state.triggers
      };
      const preview = generatePreview(config);
      updateState({ preview });
    } else {
      updateState({ preview: initialState.preview });
    }
  }, [state.category, state.format, state.item, state.tone, state.triggers, updateState]);

  // Verificar se pode copiar
  const canCopy = Boolean(state.category && state.format && state.item);

  // Obter opções baseado na categoria selecionada
  const getCategoryOptions = useCallback((): DropdownOption[] => categoryOptions, []);

  const getFormatOptions = useCallback((): DropdownOption[] => formatOptions, []);

  const getToneOptions = useCallback((): DropdownOption[] => toneOptions, []);

  // Obter opções de itens baseado na categoria
  const getItemOptions = useCallback((): DropdownOption[] => {
    if (!state.category) return [];

    switch (state.category) {
      case 'frameworks':
        return [
          { value: 'React', label: 'React' },
          { value: 'Angular', label: 'Angular' },
          { value: 'Vue', label: 'Vue' },
          { value: 'Next', label: 'Next.js' },
          { value: 'Nuxt', label: 'Nuxt.js' }
        ];
      case 'linguagens':
        return [
          { value: 'JavaScript', label: 'JavaScript' },
          { value: 'TypeScript', label: 'TypeScript' },
          { value: 'Python', label: 'Python' },
          { value: 'Java', label: 'Java' },
          { value: 'PHP', label: 'PHP' }
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
    triggers: state.triggers,
    preview: state.preview,

    // Actions
    setCategory,
    setFormat,
    setTone,
    setItem,
    toggleTrigger,

    // Getters
    canCopy,
    getCategoryOptions,
    getFormatOptions,
    getToneOptions,
    getItemOptions
  };
}