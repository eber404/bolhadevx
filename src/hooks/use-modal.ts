import { useState, useCallback, useEffect } from 'react';

interface UseModalReturn {
  isOpen: boolean;
  isLoading: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  openWithLoading: () => void;
  stopLoading: () => void;
  closeWithDelay: (delay?: number) => void;
}

export function useModal(initialOpen: boolean = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Abrir modal
  const open = useCallback((): void => {
    setIsOpen(true);
  }, []);

  // Fechar modal
  const close = useCallback((): void => {
    setIsOpen(false);
    setIsLoading(false);
  }, []);

  // Toggle modal
  const toggle = useCallback((): void => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);

  // Abrir modal com loading
  const openWithLoading = useCallback((): void => {
    setIsOpen(true);
    setIsLoading(true);
  }, []);

  // Fechar loading (mas mantém modal aberto)
  const stopLoading = useCallback((): void => {
    setIsLoading(false);
  }, []);

  // Fechar modal após delay
  const closeWithDelay = useCallback((delay: number = 0): void => {
    setTimeout(() => {
      close();
    }, delay);
  }, [close]);

  // Fechar modal com ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return (): void => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, close]);

  // Prevenir scroll do body quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return {
    isOpen,
    isLoading,
    open,
    close,
    toggle,
    openWithLoading,
    stopLoading,
    closeWithDelay
  };
}