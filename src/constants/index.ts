// Navigation items
export const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '#services' },
  { label: 'Nossos Diferenciais', href: '#benefits' },
  { label: 'Contato', href: '#contact' },
] as const;

// Services data
export const SERVICES = [
  {
    id: 'community',
    title: 'Comunidade',
    description: 'Conecte-se com outros brasileiros na sua região',
    icon: '👥',
    category: 'community' as const,
  },
  {
    id: 'events',
    title: 'Eventos',
    description: 'Participe de eventos culturais e sociais',
    icon: '🎉',
    category: 'events' as const,
  },
  {
    id: 'support',
    title: 'Suporte',
    description: 'Receba ajuda e orientação quando precisar',
    icon: '🤝',
    category: 'support' as const,
  },
] as const;

// Benefits data
export const BENEFITS = [
  'Acesso a uma comunidade ativa de brasileiros',
  'Eventos e atividades culturais regulares',
  'Suporte e orientação para novos imigrantes',
  'Rede de contatos profissionais',
  'Acesso a recursos e informações úteis',
] as const;

// Contact information
export const CONTACT_INFO = {
  email: 'contato@alobrasil.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main Street, City, State 12345',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/alobrasil',
  instagram: 'https://instagram.com/alobrasil',
  twitter: 'https://twitter.com/alobrasil',
  linkedin: 'https://linkedin.com/company/alobrasil',
} as const;
