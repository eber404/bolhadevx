// Types
export type Category = 'frameworks' | 'linguagens' | 'metodologias' | 'ferramentas';
export type Format = 'hotTake' | 'sarcastic' | 'thread';
export type Tone = 'serious' | 'sarcastic' | 'ironic' | 'angry';
export type TriggerId = 'question' | 'emojiBomb' | 'hashtag' | 'controversy' | 'relatable';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface EngagementTrigger {
  id: TriggerId;
  label: string;
  symbol: string;
}

export interface TweetConfig {
  category: Category;
  format: Format;
  tone: Tone;
  item: string;
  triggers: TriggerId[];
}

export interface CategoryTemplates {
  hotTake: string[];
  sarcastic: string[];
  thread: string[];
}

export interface TweetTemplates {
  frameworks: CategoryTemplates;
  linguagens: CategoryTemplates;
  metodologias: CategoryTemplates;
  ferramentas: CategoryTemplates;
}

export interface Substitution {
  alternative: string;
}

export interface Substitutions {
  frameworks: Record<string, Substitution>;
  linguagens: Record<string, Substitution>;
  metodologias: Record<string, Substitution>;
  ferramentas: Record<string, Substitution>;
}

// Templates de tweets satíricos da bolha dev
export const tweetTemplates: TweetTemplates = {
  frameworks: {
    hotTake: [
      "🔥 {framework} é só {alternative} com roupas bonitas mas funciona melhor que plain JS {emoji}",
      "Desenvolvedores que usam {framework} não sabem programar de verdade {emoji}",
      "{framework} resolve problemas que não existiam e cria outros que não tínhamos antes {emoji}",
      "Se você precisa de {framework} para ser produtivo, talvez deva mudar de profissão {emoji}"
    ],
    sarcastic: [
      "😂 {framework} resolve todos os problemas que não existiam perfeitamente {emoji}",
      "Amo como {framework} torna o código 10x mais complexo para um problema simples {emoji}",
      "Graças a {framework}, agora preciso de 3 horas para entender um hello world {emoji}",
      "Sem {framework} eu não conseguia fazer um botão que demora 2 segundos pra carregar {emoji}"
    ],
    thread: [
      "🧵 Thread sobre {framework}:\n\n1/ Por que teams que usam {framework} demoram 3x mais pra entregar?",
      "Resumo: {framework} é bom pra... na verdade, não é bom pra nada {emoji}",
      "Galera, vamos ser sinceros sobre {framework}... {emoji}\n\n1/ É overengineered",
      "Experiência real com {framework}:\n\nSprint 1: Setup do projeto\nSprint 2: Configuração\nSprint 3: Hello World\nSprint 4: Bug da configuração"
    ]
  },
  linguagens: {
    hotTake: [
      "{language} está morrendo, precisamos admitir {emoji}",
      "Quem ainda programa em {language} em 2024? Série? {emoji}",
      "{language} foi erro da história da computação {emoji}",
      "Se seu projeto usa {language}, já comecei rewrite em outra coisa {emoji}"
    ],
    sarcastic: [
      "😍 Amo como {language} trata strings como arrays de caracteres ou ints dependendo do dia {emoji}",
      "{language} tem os melhores erros em tempo de execução que eu já vi {emoji}",
      "O debugger é meu melhor amigo quando programo em {language} {emoji}",
      "{language}: onde null != undefined mas undefined == null faz sentido {emoji}"
    ],
    thread: [
      "🧵 Verdades sobre {language} que ninguém quer ouvir:\n\n1/ Se você gosta, tem problemas",
      "Motivos pelos quais {language} ainda existe:\n\n1. Legacy code\n2. Pessoas que não sabem melhor\n3. Masochismo",
      "Carreira {language} vs {alternative}:\n\n{language}: Job security\n{alternative}: Actually shipping software",
      "Dia na vida de dev {language}:\n\n10h: Começa a codar\n10h30: Primeiro TypeError\n11h: Debugging\n18h: Ainda debugando\n19h: Descobre que era problema de tipagem"
    ]
  },
  metodologias: {
    hotTake: [
      "{methodology} só serve pra justificar why project não entrega {emoji}",
      "Times ágeis que usam {methodology} são os mais lentos que já vi {emoji}",
      "{methodology} é burocracia disfarçada de produtividade {emoji}",
      "Se sua team depende de {methodology}, problema não é methodology, é people {emoji}"
    ],
    sarcastic: [
      "😂 {methodology} transformed our team!\n\nAgora temos meetings infinitos sobre why não entregamos nada {emoji}",
      "Graças a {methodology}, tenho chart colorido pra mostrar que não fiz nada {emoji}",
      "Amo quando {methodology} me permite blame others nos daily stands {emoji}",
      "{methodology}: where we celebrate failure velocity e ignore actual delivery {emoji}"
    ],
    thread: [
      "🧵 {methodology} na prática:\n\nSprint 1: Planning infinito\nSprint 2: Cerimônias\nSprint 3: More cerimônias\nSprint 4: Realizamos que não tínhamos time",
      "Red flags de {methodology}:\n\n• More meetings que código\n• Velocity como métrica de sucesso\n• Everyone stressed mas \"productive\"\n• Product owner que nunca sabe o que quer",
      "Como {methodology} destruiu minha carreira:\n\n1. Acreditei que funcionava\n2. Fiquei 3 anos em projects que não entregavam\n3. Perdi habilidades reais\n4. Agrego zero valor hoje"
    ]
  },
  ferramentas: {
    hotTake: [
      "Quem usa {tool} não sabe o que é性能 {emoji}",
      "{tool} é bloatware disfarçado de productividade {emoji}",
      "Se você precisa de {tool} pra ser produtivo, problema é você {emoji}",
      "{tool} adiciona 2GB ao seu projeto pra fazer que VS Code já fazia {emoji}"
    ],
    sarcastic: [
      "😍 Amo como {tool} consome 8GB de RAM pra abrir um arquivo de texto {emoji}",
      "{tool} revolucionou minha vida! Agora posso esperar 5 minutos pelo autocomplete {emoji}",
      "Graças a {tool}, meu laptop de 2020 funciona como um de 2010 {emoji}",
      "O melhor do {tool} é quando crasha no meio do commit e perde tudo {emoji}"
    ],
    thread: [
      "🧵 Ferramentas que devs usam pra parecer smart:\n\n{tool} - Pra debugar prints\n{tool} - Pra substituir grep\n{tool} - Pra complicar simples apps",
      "Custo real do {tool}:\n\n• $0 license\n• 8GB RAM\n• 50% CPU time\n• Sua sanidade mental\n• Performance da sua aplicação",
      "Alternativas ao {tool}:\n\n1. Vim\n2. VS Code\n3. Bloco de notas\n4. Papel e caneta\n5. Literamente qualquer coisa"
    ]
  }
};

// Opções para os selects
export const categoryOptions: DropdownOption[] = [
  { value: 'frameworks', label: 'Frameworks' },
  { value: 'linguagens', label: 'Linguagens' },
  { value: 'metodologias', label: 'Metodologias' },
  { value: 'ferramentas', label: 'Ferramentas' }
];

export const formatOptions: DropdownOption[] = [
  { value: 'hotTake', label: 'Hot Take' },
  { value: 'sarcastic', label: 'Sarcastic' },
  { value: 'thread', label: 'Thread Fake' }
];

export const toneOptions: DropdownOption[] = [
  { value: 'serious', label: 'Sério' },
  { value: 'sarcastic', label: 'Sarcástico' },
  { value: 'ironic', label: 'Irônico' },
  { value: 'angry', label: 'Raivoso' }
];

// Substituições para os templates
export const substitutions: Substitutions = {
  frameworks: {
    React: { alternative: 'plain JavaScript' },
    Angular: { alternative: 'jQuery' },
    Vue: { alternative: 'React copiado' },
    Next: { alternative: 'Create React App' },
    Nuxt: { alternative: 'HTML estático' }
  },
  linguagens: {
    JavaScript: { alternative: 'TypeScript' },
    TypeScript: { alternative: 'JavaScript' },
    Python: { alternative: 'C++' },
    Java: { alternative: 'Rust' },
    PHP: { alternative: 'Qualquer outra coisa' }
  },
  metodologias: {
    Scrum: { alternative: 'Entregas reais' },
    Kanban: { alternative: 'Fazer o trabalho' },
    'Safe Agile': { alternative: 'Common sense' },
    'Extreme Programming': { alternative: 'Programação normal' }
  },
  ferramentas: {
    'IntelliJ IDEA': { alternative: 'VS Code' },
    'WebStorm': { alternative: 'Vim' },
    'Docker Desktop': { alternative: 'Terminal Docker' },
    'Postman': { alternative: 'curl' },
    'MongoDB Compass': { alternative: 'mongosh' }
  }
};

// Emojis baseados no tom
export const toneEmojis = {
  serious: ['🤔', '💭', '📝'],
  sarcastic: ['😂', '🤡', '💀', '😅'],
  ironic: ['😏', '🙃', '😌'],
  angry: ['😠', '🤬', '💢', '😤']
};

// Gatilhos de engajamento
export const engagementTriggers: EngagementTrigger[] = [
  { id: 'question', label: 'Pergunta final', symbol: '?' },
  { id: 'emojiBomb', label: 'Emoji bomb', symbol: '💣' },
  { id: 'hashtag', label: 'Hashtag obrigatória', symbol: '#devlife' },
  { id: 'controversy', label: 'Polêmica leve', symbol: '🔥' },
  { id: 'relatable', label: 'Problema universal', symbol: '😭' }
];

// Função para gerar tweet baseado nas configurações
export function generateTweet(config: TweetConfig): string {
  const { category, format, tone, item, triggers } = config;

  // Obter templates da categoria e formato
  const categoryTemplates = tweetTemplates[category];
  if (!categoryTemplates) return 'Configure as opções corretamente';

  const formatTemplates = categoryTemplates[format];
  if (!formatTemplates || formatTemplates.length === 0) return 'Nenhum template disponível';

  // Selecionar template aleatório
  const template = formatTemplates[Math.floor(Math.random() * formatTemplates.length)];

  // Obter substituições
  const substitution = substitutions[category]?.[item] || { alternative: 'outra coisa' };

  // Obter emoji baseado no tom
  const toneEmojiList = toneEmojis[tone] || toneEmojis.sarcastic;
  const emoji = toneEmojiList[Math.floor(Math.random() * toneEmojiList.length)];

  // Substituir placeholders
  let tweet = template
    .replace(/{framework}/g, item)
    .replace(/{language}/g, item)
    .replace(/{methodology}/g, item)
    .replace(/{tool}/g, item)
    .replace(/{alternative}/g, substitution.alternative)
    .replace(/{emoji}/g, emoji);

  // Adicionar gatilhos
  triggers.forEach(trigger => {
    switch (trigger) {
      case 'question':
        if (!tweet.endsWith('?') && !tweet.endsWith('！')) {
          tweet += ' Concordam?';
        }
        break;
      case 'emojiBomb':
        tweet += ' 😂😅🤡💀';
        break;
      case 'hashtag':
        tweet += ' #devlife #programming';
        break;
      case 'controversy':
        tweet = '🔥 ' + tweet;
        break;
      case 'relatable':
        tweet += ' alguém mais passa por isso?';
        break;
    }
  });

  return tweet;
}

// Função para preview em tempo real
export function generatePreview(config: TweetConfig): string {
  if (!config.category || !config.format || !config.item) {
    return '📝 Seu tweet aparecerá aqui...';
  }

  return generateTweet(config);
}