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
          src="https://www.googletagmanager.com/gtag/js?id=AW-17748585644"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N6QFRCPZWM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17748585644');
            gtag('config', 'G-N6QFRCPZWM');
          `}
        </Script>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105521399', 'ym');
            ym(105521399, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105521399" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
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
