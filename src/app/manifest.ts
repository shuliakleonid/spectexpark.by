import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SPECTEXPARK.BY - Аренда автовышек в Беларуси',
    short_name: 'SPECTEXPARK.BY',
    description: 'Аренда автовышек 18м и 28м в Беларуси. 10+ лет опыта, 24/7 обслуживание.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 