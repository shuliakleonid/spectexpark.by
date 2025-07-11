'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Phone } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23f3f4f6"/><circle cx="200" cy="200" r="50" fill="%23e5e7eb"/><circle cx="1000" cy="600" r="80" fill="%23d1d5db"/><rect x="400" y="300" width="200" height="100" fill="%23e5e7eb"/><polygon points="600,400 700,300 800,400" fill="%23d1d5db"/></svg>')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            АРЕНДА{' '}
            <span className="text-accent">АВТОВЫШЕК</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-medium"
          >
            поднимаем на высоту
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>СВЯЗАТЬСЯ</span>
              <Phone className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="tel:+375447648181"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>+375(44)7648181</span>
              <Phone className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white cursor-pointer"
          onClick={() => {
            const element = document.querySelector('#about')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <span className="text-sm font-medium">Узнать больше</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
    </section>
  )
}

export default Hero 