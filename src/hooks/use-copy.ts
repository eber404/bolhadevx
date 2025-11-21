import { useState, useCallback } from 'react';

interface UseCopyReturn {
  copy: (text: string) => Promise<boolean>;
  isCopied: boolean;
  copyError: string | null;
  reset: () => void;
  isClipboardSupported: boolean;
}

export function useCopy(): UseCopyReturn {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  // Função para copiar texto para a área de transferência
  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!text) {
      setCopyError('Nenhum texto para copiar');
      return false;
    }

    try {
      // Tentar usar a API moderna do Clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback para browsers mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;

        // Estilizar o textarea para ficar invisível
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.style.opacity = '0';
        textArea.style.pointerEvents = 'none';
        textArea.setAttribute('aria-hidden', 'true');

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (!successful) {
          throw new Error('Comando de cópia falhou');
        }
      }

      // Sucesso!
      setIsCopied(true);
      setCopyError(null);

      // Reset do estado após 2 segundos
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return true;
    } catch (error) {
      console.error('Erro ao copiar texto:', error);
      setCopyError('Falha ao copiar texto');

      // Reset do erro após 3 segundos
      setTimeout(() => {
        setCopyError(null);
      }, 3000);

      return false;
    }
  }, []);

  // Reset manual dos estados
  const reset = useCallback((): void => {
    setIsCopied(false);
    setCopyError(null);
  }, []);

  // Verificar se a API do Clipboard está disponível
  const isClipboardSupported: boolean = Boolean(
    navigator.clipboard &&
    window.isSecureContext
  );

  return {
    copy,
    isCopied,
    copyError,
    reset,
    isClipboardSupported
  };
}