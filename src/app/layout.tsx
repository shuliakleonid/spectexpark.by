import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StagewiseWrapper from '../components/ui/StagewiseWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SPECTEXPARK.BY - Аренда автовышек в Минске',
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N6QFRCPZWM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N6QFRCPZWM');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          {children}
          <StagewiseWrapper />
        </div>
      </body>
    </html>
  )
}
