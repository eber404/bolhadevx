# Task 2: Implementação da Interface React (Estilo Windows 95)

Você é um desenvolvedor React especializado em interfaces retrô e CSS customizado. Sua missão é implementar completamente a interface do Bolha Tweet Creator seguindo as especificações detalhadas em `design/wireframes-specifications.md`.

## Contexto do Projeto

Este é um gerador de tweets satíricos da "bolha dev" com visual Windows 95. A aplicação é uma SPA com fluxo simples: configuração → preview → geração → cópia. Não há autenticação ou backend - tudo funciona no frontend.

## Requisitos Técnicos

### Stack
- **Frontend**: React + Vite
- **Estilos**: CSS Modules com CSS Variables para tema Win95
- **Ícones**: SVG inline ou font icons estilo system
- **Fonte**: MS Sans Serif (fallback system-ui)
- **Build**: Vite para desenvolvimento e produção

### Estrutura de Arquivos Sugerida
```
src/
├── components/
│   ├── ui/
│   │   ├── button-win95/
│   │   │   ├── button-win95.jsx
│   │   │   └── button-win95.module.css
│   │   ├── checkbox-win95/
│   │   ├── dropdown-win95/
│   │   ├── modal-win95/
│   │   ├── progress-bar-win95/
│   │   └── tweet-preview/
│   ├── layout/
│   │   ├── title-bar/
│   │   ├── main-window/
│   │   └── status-bar/
│   └── features/
│       ├── tweet-generator/
│       ├── configuration-panel/
│       └── result-modal/
├── styles/
│   ├── win95-theme.css
│   ├── global.css
│   └── variables.css
├── hooks/
│   └── use-tweet-generator.js
├── utils/
│   └── tweet-templates.js
└── assets/
    └── icons/
```

## Componentes Obrigatórios

### 1. Sistema de Estilos Win95
- CSS Variables com cores autênticas Windows 95
- Estilos 3D bevel borders
- Font system: MS Sans Serif fallback
- Grid base: 4px units
- Estados: idle/hover/pressed/disabled

### 2. Componentes UI Primitivos
- **ButtonWin95** (`button-win95/`): Botões 3D com todos os estados
- **CheckboxWin95** (`checkbox-win95/`): Checkboxes estilo Win95 com X customizado
- **DropdownWin95** (`dropdown-win95/`): Select custom com dropdown visual
- **LabelWin95** (`label-win95/`): Text labels com tipografia Win95
- **ProgressBarWin95** (`progress-bar-win95/`): Barra de progresso fake animada

### 3. Componentes de Layout
- **TitleBar** (`title-bar/`): Barra de título com botões minimize/maximize/close
- **MainWindow** (`main-window/`): Container principal com bordas 3D
- **ModalWin95** (`modal-win95/`): Popup centralizado com animações retrô
- **TweetPreview** (`tweet-preview/`): Área de preview estilo Twitter

### 4. Features Principais
- **ConfigurationPanel** (`configuration-panel/`): Painel com selects e checkboxes
- **TweetGenerator** (`tweet-generator/`): Lógica de geração e preview dinâmico
- **ResultModal** (`result-modal/`): Modal final com tweet e botão copy

## Funcionalidades Específicas

### Preview Dinâmico
- Atualização em tempo real conforme mudanças nos controles
- Templates de tweets baseados em seleções
- Formatação automática com emojis e hashtags

### Geração de Tweets
- Funções para gerar tweets baseados em:
  - Categoria (frameworks, linguagens, metodologias)
  - Formato (hot take, thread fake, opinião polêmica)
  - Tom (sarcástico, sério, irônico)
  - Gatilhos (pergunta final, emoji bomb, etc.)

### Animações Retrô
- Progress bar fake com mensagens cômicas
- Efeito de afundamento em botões
- Fade-in/out de modais
- Hover effects sutis

### Acessibilidade
- Suporte completo a navegação por teclado
- ARIA labels em todos elementos interativos
- High contrast mode option
- `prefers-reduced-motion` support

## Implementação Detalhada

### 1. Setup Inicial
- Configurar Vite + React
- Instalar dependências necessárias
- Criar estrutura de pastas
- Configurar CSS Modules e variables

### 2. Sistema de Temas
```css
/* styles/variables.css */
:root {
  /* Windows 95 Core Colors */
  --win95-gray: #C0C0C0;
  --win95-white: #FFFFFF;
  --win95-black: #000000;
  --win95-dark-gray: #808080;
  --win95-light-gray: #DFDFDF;

  /* 3D Effects */
  --win95-bevel-light: #FFFFFF;
  --win95-bevel-dark: #808080;
  --win95-bevel-shadow: #000000;

  /* Typography */
  --font-family: 'MS Sans Serif', system-ui, sans-serif;
  --font-size-title: 11pt;
  --font-size-label: 9pt;
  --font-size-body: 8pt;
}
```

### 3. Componentes UI Base
Implementar todos os componentes UI com:
- CSS Modules para escopo local
- Estados visuais completos
- Props para customização
- Event handlers padronizados
- Accessibility attributes

### 4. Lógica de Geração
Criar sistema de templates:
```javascript
// utils/tweet-templates.js
export const tweetTemplates = {
  frameworks: {
    hotTake: [
      "🔥 {framework} é só {alternative} com roupas bonitas",
      "Desenvolvedores que usam {framework} não sabem programar de verdade"
    ],
    sarcastic: [
      "😂 {framework} resolve todos os problemas que não existiam",
      "Amo como {framework} torna o código 10x mais complexo"
    ]
  },
  // ... mais categorias
}
```

### 5. Estados e Hooks
- `use-tweet-generator.js`: gerencia estado da configuração e preview
- `use-modal.js`: controla abertura/fechamento de modais
- `use-copy.js`: funcionalidade de copiar texto com feedback

### 6. Responsividade
- Design responsivo mantendo proporções Win95
- Breakpoints para mobile/tablet/desktop
- Manter usabilidade em diferentes tamanhos

## Critérios de Aceite

### Visual
- [ ] Interface 100% fiel ao estilo Windows 95
- [ ] Todas as cores, fontes e espaçamentos conforme spec
- [ ] Efeitos 3D bevel funcionando em todos elementos
- [ ] Estados visuais completos (idle/hover/pressed/disabled)

### Funcionalidade
- [ ] Preview dinâmico atualizando em tempo real
- [ ] Geração de tweets funcionando com todas as opções
- [ ] Progress bar fake com animações e mensagens
- [ ] Modal de resultado com botão copy funcional
- [ ] Navegação por teclado completa (Tab, Enter, Space, Arrows)

### Acessibilidade
- [ ] ARIA labels em todos elementos interativos
- [ ] Suporte a leitores de tela
- [ ] High contrast mode funcionando
- [ ] Redução de movimentos (prefers-reduced-motion)
- [ ] Tamanhos de clique adequados (44px minimum)

### Código
- [ ] Componentes reutilizáveis e bem documentados
- [ ] CSS Modules para escopo local
- [ ] Hooks customizados para lógica compartilhada
- [ ] Sem warnings no console
- [ ] Performance otimizada

## Entregáveis

1. **Código completo** da interface React
2. **Estilos CSS** seguindo spec Windows 95
3. **Componentes** documentados com PropTypes
4. **Funcionalidades** testadas manualmente
5. **Build** de produção funcionando

## Convenções de Nomenclatura

- **Arquivos e pastas**: `kebab-case` (ex: `button-win95/`)
- **Componentes React**: `PascalCase` (ex: `ButtonWin95`)
- **Hooks**: `camelCase` com prefixo `use` (ex: `useTweetGenerator`)
- **Arquivos CSS**: `.module.css` para CSS Modules
- **Utilidades**: `kebab-case` (ex: `tweet-templates.js`)

## Dicas Adicionais

- Use border-style: outset/inset para efeitos 3D
- CSS text-shadow para profundidade sutil
- Transform: scale(0.98) para efeito pressed
- CSS transitions rápidas (150ms) para feeling retrô
- Teste em diferentes browsers para consistência

Referência visual: Use screenshots de Windows 95 original como guia para cores, espaçamentos e comportamentos.

---

**Deadline**: Implementação completa em 2-3 dias
**Prioridade**: Fidelidade visual Windows 95 > Funcionalidade > Performance
**Testing**: Foco em visual e UX, não é necessário testes unitários extensivos