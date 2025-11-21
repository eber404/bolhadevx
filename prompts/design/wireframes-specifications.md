# Design de UX/UI - Bolha Tweet Creator (Estilo Windows 95)

## 1. Mapa da Tela e Layout Principal

### Estrutura Geral
```
┌─────────────────────────────────────────────────────────┐
│ ⬛️ Bolha Tweet Creator                    □ □ ×        │  ← Title Bar Win95
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─ Seção de Configuração ────────────────────────┐    │
│  │                                                 │    │
│  │ [Categoria: ▼] [Formato: ▼] [Tom: ▼]           │    │
│  │                                                 │    │
│  │ ☑ Include sarcasmo    ☑ Add emoji bomb         │    │
│  │ ☐ Thread mode        ☐ Pergunta final          │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  ┌─ Preview do Tweet ────────────────────────────┐      │
│  │                                                 │    │
│  │ 📝 Seu tweet aparecerá aqui...                  │    │
│  │                                                 │    │
│  │ 🔥 TypeScript é só JavaScript com roupas bonitas│    │
│  │ mas funciona melhor que plain JS 🤔             │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘      │
│                                                         │
│          ┌───────────────────────────────┐             │
│          │     [Generate Hot Take]        │             │  ← Botão Principal Win95
│          └───────────────────────────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Popup de Resultado
```
┌─────────────────────────────────────────┐
│ 🐦 Tweet Gerado!            □ ×        │  ← Popup Modal Win95
├─────────────────────────────────────────┤
│                                         │
│ ┌─ Tweet Final ──────────────────────┐   │
│ │                                     │   │
│ │ 🔥 Desenvolvedores que usam         │   │
│ │    TypeScript são só hipsters       │   │
│ │    que acham que type safety        │   │
│ │    resolve problemas de negócio     │   │
│ │    😂 #devlife #ts                  │   │
│ │                                     │   │
│ └─────────────────────────────────────┘   │
│                                         │
│          ┌───────────────┐               │
│          │    [Copy]     │               │  ← Botão Copy
│          └───────────────┘               │
└─────────────────────────────────────────┘
```

## 2. Componentes Visuais Necessários

### Janela Principal
- **TitleBar**: Barra de título Win95 com botões minimize/maximize/close
- **MainWindow**: Container principal com bordas 3D afundadas
- **StatusBar**: Barra de status inferior (opcional)

### Form Controls
- **DropdownWin95**: Selects customizados com aparência Win95
- **CheckboxWin95**: Checkboxes no estilo clássico
- **ButtonWin95**: Botões 3D com efeito bevel
- **LabelWin95**: Rótulos de texto com fonte MS Sans Serif

### Conteúdo
- **TweetPreview**: Área de preview com fundo branco/baixo contraste
- **ProgressBarWin95**: Barra de progresso animada fake
- **ModalWin95**: Janela popup para resultado final
- **CopyButton**: Botão específico para copiar conteúdo

### Elementos Decorativos
- **IconSystem**: Ícones clássicos de sistema (16x16px)
- **BevelBorders**: Bordas 3D para separar seções
- **GridBackground**: Fundo quadriculado sutil (opcional)

## 3. Estados dos Componentes

### ButtonWin95
```
Idle:      [ Button ]      ← Cinza claro com borda 3D
Hover:     [ Button ]      ← Ligeiramente mais claro
Pressed:   ┌ Button ┐      ← Efeito "afundado" invertido
Disabled:  [ Button ]      ← Cinza escuro, sem cursor
```

### CheckboxWin95
```
Unchecked: ☐                ← Quadrado vazio com borda
Checked:   ☑                ← Quadrado com X dentro
Hover:     ☐                ← Borda mais destacada
Disabled:  ☐                ← Cinza escuro
```

### DropdownWin95
```
Closed:    [ Category ▼ ]   ← Botão com seta dropdown
Open:      ┌ Category ▲ ┐   ├── Lista suspensa
           └─────────────┘   │  • Option 1
                              │  • Option 2
                              │  └───
```

### ModalWin95
```
Hidden:     display: none
Visible:    opacity: 1, position: fixed
Animating:  fadeIn/fadeOut com timing Win95
```

## 4. Especificações de Comportamento e Interações

### Fluxo Principal
1. **Carregamento**: Janela aparece centralizada com efeito fade-in
2. **Seleção**: Mudanças nos controles atualizam preview em tempo real
3. **Geração**: Click no botão principal inicia animação de progresso
4. **Resultado**: Modal aparece com tweet final e opção de copiar

### Interações Específicas
- **Preview Dinâmico**: Atualiza automaticamente conforme mudanças
- **ProgressBar Fake**: Dura 2-3 segundos com mensagens cômicas:
  - "Compiling hot takes..."
  - "Adding controversy..."
  - "Maximizing engagement..."
- **Copy Button**: Efeito visual quando copiado e toast message
- **Keyboard Support**: Tab navigation entre controles, Enter para gerar

### Efeitos Visuais
- **3D Bevel**: Bordas claras/escuras para criar profundidade
- **Inset Borders**: Áreas de conteúdo com bordas "afundadas"
- **Text Shadows**: Sutil para criar profundidade no texto
- **Hover Effects**: Mudanças sutis de cor/brightness

## 5. Microinterações e Animações Retrô

### Animações Window95 Style
- **Window Drag**: Move janela com cursor de movimento
- **Window Resize**: Redimensionamento com handle no canto
- **Click Sounds**: (Opcional) Sons de clique clássicos
- **Blink Cursor**: Cursor piscando em inputs de texto

### Progress Bar Animation
```
Loading:  ░░░░░░░░░░░░░░░░░░░░ 0%
Step 1:   ████████░░░░░░░░░░░░ 40%
Step 2:   ████████████████░░░░ 80%
Complete: ████████████████████ 100%
```

### Button Press Animation
- **MouseDown**: Efeito de afundamento instantâneo
- **MouseUp**: Retorna ao estado normal com slight delay
- **Click Feedback**: Flash visual e som (opcional)

### Modal Animations
- **Appear**: Scale from center com timing quadrático
- **Disappear**: Fade out com shrink
- **Bounce**: Slight bounce no final do appear

## 6. Paleta e Estilo Visual

### Cores Windows 95 Core
```css
/* System Colors */
--win95-gray:     #C0C0C0;  /* Main dialog gray */
--win95-white:    #FFFFFF;  /* Window backgrounds */
--win95-black:    #000000;  /* Text and borders */
--win95-dark-gray: #808080;  /* Disabled elements */
--win95-light-gray: #DFDFDF; /* Highlight backgrounds */

/* 3D Effect Colors */
--win95-bevel-light: #FFFFFF;
--win95-bevel-dark:  #808080;
--win95-bevel-shadow: #000000;

/* Accent Colors */
--win95-blue:     #000080;  /* Selected items */
--win95-red:      #800000;  /* Close button hover */
--win95-green:    #008000;  /* Success states */
```

### Tipografia
- **Font Family**: MS Sans Serif, sans-serif (fallback: system-ui)
- **Sizes**:
  - Title: 11pt bold
  - Labels: 9pt
  - Body: 8pt
  - Small: 7pt

### Spacing
- **Base Unit**: 4px (grid system Win95)
- **Padding**: 8px (múltiplo de 4)
- **Margins**: 4px, 8px, 12px, 16px
- **Button Size**: 23px height (Win95 standard)

## 7. Considerações de Acessibilidade

### Contraste e Legibilidade
- **Text Colors**: Sempre preto sobre branco ou branco sobre azul escuro
- **High Contrast Mode**: Opção para aumentar contraste
- **Focus Indicators**: Dotted borders claros em elementos focados

### Navegação por Teclado
- **Tab Order**: Lógico e sequencial através dos controles
- **Enter Key**: Aciona botão principal/submit
- **Space Bar**: Toggle checkboxes e buttons
- **Arrow Keys**: Navegação em dropdowns

### Leitores de Tela
- **ARIA Labels**: Descrições claras para todos os controles
- **Live Regions**: Anúncio de mudanças no preview
- **Role Attributes**: Roles HTML semânticos onde aplicável

### Redução de Movimento
- **prefers-reduced-motion**: Desabilitar animações não essenciais
- **Static Alternatives**: Feedback visual sem animações
- **Timing Controls**: Opções para ajustar velocidade das animações

### Tamanhos e Resposividade
- **Minimum Target Size**: 44x44px para touch accessibility
- **Text Scaling**: Support para font-size até 200%
- **Layout Flexível**: Janela redimensionável mantendo usabilidade

---

Este documento serve como guia completo para implementação da interface, garantindo consistência visual e comportamento alinhado com a estética Windows 95 enquanto mantém acessibilidade moderna.