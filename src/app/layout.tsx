import { Inter } from 'next/font/google'
import './globals.css'
import StagewiseWrapper from '../components/ui/StagewiseWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AVTOVYSHKA.BY - Аренда автовышек в Минске',
  description: 'Профессиональная аренда автовышек в Минске и Минской области. Быстро, надежно, доступно.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          {children}
          <StagewiseWrapper />
        </div>
      </body>
    </html>
  )
}
