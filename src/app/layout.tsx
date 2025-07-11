import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Аренда автовышек в Минске | AVTOVYSHKA.BY',
  description: 'Аренда автовышек 18м и 28м в Минске. Работаем 24/7. Опыт более 10 лет. Качественные услуги для строительных компаний и частных лиц.',
  keywords: [
    'аренда автовышек',
    'автовышка минск',
    'аренда строительной техники',
    'подъемник аренда',
    'автовышка 18 метров',
    'автовышка 28 метров'
  ],
  authors: [{ name: 'ИП ШУЛЯК А.В.' }],
  openGraph: {
    title: 'Аренда автовышек в Минске | AVTOVYSHKA.BY',
    description: 'Аренда автовышек 18м и 28м в Минске. Работаем 24/7. Опыт более 10 лет.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://avtovyshka.by',
    siteName: 'AVTOVYSHKA.BY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда автовышек в Минске | AVTOVYSHKA.BY',
    description: 'Аренда автовышек 18м и 28м в Минске. Работаем 24/7. Опыт более 10 лет.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://avtovyshka.by',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
