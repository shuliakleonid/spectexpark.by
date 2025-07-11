import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Equipment from '@/components/sections/Equipment'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Equipment />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
