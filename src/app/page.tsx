import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/ui/Stats'
import Features from '@/components/ui/Features'
import Equipment from '@/components/sections/Equipment'
import Pricing from '@/components/ui/Pricing'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/ui/Testimonials'
import FAQ from '@/components/ui/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <Header />
      <div className="pt-20">
          <Equipment />
        <div className="relative">
        {/* <Hero /> */}
          <About />
          <Stats />
          <Features />
          <Pricing />
          {/*<Gallery />*/}
          <Testimonials />
          <FAQ />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  )
}
