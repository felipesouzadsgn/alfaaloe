// ============================================
// CONFIGURAÇÕES CENTRALIZADAS DE SEO / AEO
// ============================================

export const SITE = {
  name: 'Especialista Forever Living',
  url: 'https://www.alfaaloe.com.br',
  logo: 'https://www.alfaaloe.com.br/images/logo.png',
  favicon: 'https://www.alfaaloe.com.br/favicon.ico',
  locale: 'pt_BR',
  language: 'pt-BR',
  author: 'Especialista Forever Living',
  twitterHandle: '@alfaaloe',
} as const;

export const BUSINESS = {
  name: 'Especialista Forever Living - Aloe Vera Gel',
  description:
    'Distribuidor Independente (FBO) oficial da Forever Living Products. Compre Aloe Vera Gel original, suplementos naturais e produtos de beleza com consultoria especializada.',
  email: 'alfaaloe.flp@gmail.com',
  telephone: '+55-13-99643-2357',
  whatsapp: '5513996432357',
  address: {
    street: '',
    city: 'Santos',
    state: 'SP',
    country: 'BR',
    postalCode: '',
  },
  geo: {
    latitude: '-23.9608',
    longitude: '-46.3331',
  },
  openingHours: 'Mo-Sa 08:00-20:00',
  priceRange: '$$',
  foundedDate: '2020-01-01',
} as const;

export const DEFAULT_SEO = {
  titleTemplate: '%s | Especialista Forever Living',
  defaultTitle: 'Especialista Forever Living | Aloe Vera Gel e Produtos Naturais',
  defaultDescription:
    'Compre produtos Forever Living Originais. Fale com um Especialista e receba atendimento consultivo. Aloe Vera Gel, Nutrição e oportunidade FBO via WhatsApp.',
  defaultImage: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop',
  keywords: [
    'aloe vera gel',
    'forever living products',
    'produtos naturais',
    'suco de babosa',
    'forever aloe vera gel',
    'distribuidor forever living',
    'fbo forever living',
    'aloe vera',
    'suplementos naturais',
    'bem estar',
    'saúde natural',
    'cosméticos naturais',
    'negócio próprio',
    'renda extra',
    'marketing multinível',
    'aloe vera puro',
    'gel de babosa',
    'forever living brasil',
    'comprar aloe vera',
    'aloe vera gel forever preço',
  ],
} as const;

// Schema.org types para cada página
export const SCHEMA_TYPES = {
  home: 'WebSite',
  product: 'Product',
  article: 'Article',
  faq: 'FAQPage',
  organization: 'Organization',
  localBusiness: 'LocalBusiness',
  breadcrumb: 'BreadcrumbList',
} as const;
