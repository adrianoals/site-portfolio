import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = 'https://adriano.xnap.com.br/' // Substitua pela sua URL real
  
  return {
    name: 'Adriano Lima Santos - Portfólio',
    short_name: 'Portfólio AL',
    description: 'Desenvolvedor Full-Stack especializado em Python, Next.js e Inteligência Artificial',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'pt-BR',
    categories: ['technology', 'business', 'productivity'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Portfólio Adriano Lima Santos - Desktop',
      },
    ],
    shortcuts: [
      {
        name: 'Sobre',
        short_name: 'Sobre',
        description: 'Saiba mais sobre mim',
        url: '/#sobre',
        icons: [{ src: '/icon.svg', sizes: '96x96' }],
      },
      {
        name: 'Projetos',
        short_name: 'Projetos',
        description: 'Veja meus projetos',
        url: '/#projetos',
        icons: [{ src: '/icon.svg', sizes: '96x96' }],
      },
      {
        name: 'Contato',
        short_name: 'Contato',
        description: 'Entre em contato',
        url: '/#contato',
        icons: [{ src: '/icon.svg', sizes: '96x96' }],
      },
    ],
  }
}
