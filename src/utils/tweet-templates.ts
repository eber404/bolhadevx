// Types
export type Category =
  | 'frameworks'
  | 'linguagens'
  | 'metodologias'
  | 'ferramentas'
  | 'bancos'
export type Format = 'hotTake' | 'thread'
export type Tone = 'sarcastic' | 'critical'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface TweetConfig {
  category: Category
  format: Format
  item: string
}

export interface CategoryTemplates {
  hotTake: string[]
  thread: string[]
}

export interface TweetTemplates {
  frameworks: CategoryTemplates
  linguagens: CategoryTemplates
  metodologias: CategoryTemplates
  ferramentas: CategoryTemplates
  bancos: CategoryTemplates
}

export interface Substitution {
  alternative: string
}

export interface Substitutions {
  frameworks: Record<string, Substitution>
  linguagens: Record<string, Substitution>
  metodologias: Record<string, Substitution>
  ferramentas: Record<string, Substitution>
  bancos: Record<string, Substitution>
}

// Templates de tweets satíricos da bolha dev
export const tweetTemplates: TweetTemplates = {
  frameworks: {
    hotTake: [
      '{framework} é só {alternative} com roupas bonitas mas funciona melhor que plain JS',
      'Desenvolvedores que usam {framework} não sabem programar de verdade',
      '{framework} resolve problemas que não existiam e cria outros que não tínhamos antes',
      'Se você precisa de {framework} para ser produtivo, talvez deva mudar de profissão',
    ],
    thread: [
      'Thread sobre {framework}:\n\n1/ Por que teams que usam {framework} demoram 3x mais pra entregar?',
      'Resumo: {framework} é bom pra... na verdade, não é bom pra nada',
      'Galera, vamos ser sinceros sobre {framework}...\n\n1/ É overengineered',
      'Experiência real com {framework}:\n\nSprint 1: Setup do projeto\nSprint 2: Configuração\nSprint 3: Hello World\nSprint 4: Bug da configuração',
    ],
  },
  linguagens: {
    hotTake: [
      '{language} está morrendo, precisamos admitir',
      'Quem ainda programa em {language} em 2024? Série?',
      '{language} foi erro da história da computação',
      'Se seu projeto usa {language}, já comecei rewrite em outra coisa',
    ],
    thread: [
      'Verdades sobre {language} que ninguém quer ouvir:\n\n1/ Se você gosta, tem problemas',
      'Motivos pelos quais {language} ainda existe:\n\n1. Legacy code\n2. Pessoas que não sabem melhor\n3. Masoquismo',
      'Carreira {language} vs {alternative}:\n\n{language}: Job security\n{alternative}: Actually shipping software',
      'Dia na vida de dev {language}:\n\n10h: Começa a codar\n10h30: Primeiro TypeError\n11h: Debugging\n18h: Ainda debugando\n19h: Descobre que era problema de tipagem',
    ],
  },
  metodologias: {
    hotTake: [
      '{methodology} só serve pra justificar why project não entrega',
      'Times ágeis que usam {methodology} são os mais lentos que já vi',
      '{methodology} é burocracia disfarçada de produtividade',
      'Se sua team depende de {methodology}, problema não é methodology, é people',
    ],
    thread: [
      '{methodology} na prática:\n\nSprint 1: Planning infinito\nSprint 2: Cerimônias\nSprint 3: More cerimônias\nSprint 4: Realizamos que não tínhamos time',
      'Red flags de {methodology}:\n\n• More meetings que código\n• Velocity como métrica de sucesso\n• Everyone stressed mas "productive"\n• Product owner que nunca sabe o que quer',
      'Como {methodology} destruiu minha carreira:\n\n1. Acreditei que funcionava\n2. Fiquei 3 anos em projects que não entregavam\n3. Perdi habilidades reais\n4. Agrego zero valor hoje',
    ],
  },
  ferramentas: {
    hotTake: [
      'Quem usa {tool} não sabe o que é performance',
      '{tool} é bloatware disfarçado de productividade',
      'Se você precisa de {tool} pra ser produtivo, problema é você',
      '{tool} adiciona 2GB ao seu projeto pra fazer que VS Code já fazia',
    ],
    thread: [
      'Ferramentas que devs usam pra parecer smart:\n\n{tool} - Pra debugar prints\n{tool} - Pra substituir grep\n{tool} - Pra complicar simples apps',
      'Custo real do {tool}:\n\n• $0 license\n• 8GB RAM\n• 50% CPU time\n• Sua sanidade mental\n• Performance da sua aplicação',
      'Alternativas ao {tool}:\n\n1. Vim\n2. VS Code\n3. Bloco de notas\n4. Papel e caneta\n5. Literamente qualquer coisa',
    ],
  },
  bancos: {
    hotTake: [
      '{database} é só spreadsheets com superpoderes mas 10x mais caro',
      'Quem ainda usa {database} em 2024? Série?',
      'Se sua app usa {database}, já comecei migration pra outra coisa',
      '{database} resolve problemas que não existiam e cria outros que não tínhamos antes',
    ],
    thread: [
      'Verdades sobre {database} que ninguém quer ouvir:\n\n1/ Se você gosta, tem problemas',
      'Motivos pelos quais {database} ainda existe:\n\n1. Legacy systems\n2. Pessoas que não sabem melhor\n3. Inércia corporativa',
      'Carreira {database} vs {alternative}:\n\n{database}: Job security através da complexidade\n{alternative}: Entregando valor de verdade',
      'Dia na vida de dev {database}:\n\n9h: Query lenta\n10h: Índice que não funciona\n11h: Lock no banco\n18h: Ainda tentando otimizar\n19h: Descobre que era problema de schema',
    ],
  },
}

// Opções para os selects
export const categoryOptions: DropdownOption[] = [
  { value: 'frameworks', label: 'Frameworks' },
  { value: 'linguagens', label: 'Linguagens' },
  { value: 'metodologias', label: 'Metodologias' },
  { value: 'ferramentas', label: 'Ferramentas' },
  { value: 'bancos', label: 'Bancos' },
]

export const formatOptions: DropdownOption[] = [
  { value: 'hotTake', label: 'Hot Take' },
  { value: 'thread', label: 'Fake Thread' },
]

export const toneOptions: DropdownOption[] = [
  { value: 'sarcastic', label: 'Sarcástico' },
  { value: 'critical', label: 'Crítico' },
]

// Substituições para os templates
export const substitutions: Substitutions = {
  frameworks: {
    React: { alternative: 'plain JavaScript' },
    Django: { alternative: 'Flask' },
    Laravel: { alternative: 'Plain PHP' },
    Spring: { alternative: 'Plain Java' },
  },
  linguagens: {
    JavaScript: { alternative: 'Vanilla JS' },
    Python: { alternative: 'C++' },
    Java: { alternative: 'Rust' },
    PHP: { alternative: 'Qualquer outra coisa' },
    'C#': { alternative: 'Java' },
  },
  metodologias: {
    Scrum: { alternative: 'Entregas reais' },
    Kanban: { alternative: 'Fazer o trabalho' },
    'Safe Agile': { alternative: 'Common sense' },
    'Extreme Programming': { alternative: 'Programação normal' },
  },
  ferramentas: {
    'IntelliJ IDEA': { alternative: 'VS Code' },
    WebStorm: { alternative: 'Vim' },
    'Docker Desktop': { alternative: 'Terminal Docker' },
    Postman: { alternative: 'curl' },
    'MongoDB Compass': { alternative: 'mongosh' },
  },
  bancos: {
    SQL: { alternative: 'Planilhas' },
    NoSQL: { alternative: 'Arquivos JSON' },
  },
}

// Função para gerar tweet baseado nas configurações
export function generateTweet(config: TweetConfig): string {
  const { category, format, item } = config

  // Obter templates da categoria e formato
  const categoryTemplates = tweetTemplates[category]
  if (!categoryTemplates) return 'Configure as opções corretamente'

  const formatTemplates = categoryTemplates[format]
  if (!formatTemplates || formatTemplates.length === 0)
    return 'Nenhum template disponível'

  // Selecionar template aleatório
  const template =
    formatTemplates[Math.floor(Math.random() * formatTemplates.length)]

  // Obter substituições
  const substitution = substitutions[category]?.[item] || {
    alternative: 'outra coisa',
  }

  // Substituir placeholders
  let tweet = template
    .replace(/{framework}/g, item)
    .replace(/{language}/g, item)
    .replace(/{methodology}/g, item)
    .replace(/{tool}/g, item)
    .replace(/{database}/g, item)
    .replace(/{alternative}/g, substitution.alternative)

  return tweet
}

// Função para preview em tempo real
export function generatePreview(config: TweetConfig): string {
  if (!config.category || !config.format || !config.item) {
    return 'Seu tweet aparecerá aqui...'
  }

  return generateTweet(config)
}
