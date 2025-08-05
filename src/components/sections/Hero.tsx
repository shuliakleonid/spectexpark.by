'use client'

import { motion } from 'framer-motion'
import { Phone, Sparkles, Zap } from 'lucide-react'
import machineBackground from '@/assets/machine-background.webp'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Background with Machine Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${machineBackground.src})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>


      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-medium text-white/90">Профессиональная аренда автовышек</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-1 mb-6 leading-tight"
          >
            <span className="text-white">АРЕНДА </span>
            <span className="text-gradient bg-gradient-to-r from-accent-300 via-yellow-300 to-accent-400 bg-clip-text text-transparent">
              АВТОВЫШЕК
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Поднимаем на высоту ваших возможностей с современной техникой и профессиональным подходом
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-4 flex items-center gap-3 bg-gradient-primary hover:shadow-glow-lg shadow-glow rounded-2xl"
            >
              <Zap className="w-5 h-5" />
              <span>СВЯЗАТЬСЯ</span>
            </motion.button>

            <motion.a
              href="tel:+375447648181"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-10 py-4 flex items-center gap-3 border-2 border-white/30 text-white hover:bg-gradient-primary hover:text-white hover:border-primary-400/60 shadow-soft hover:shadow-glow-lg transition-all duration-300 rounded-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>+375(44)7648181</span>
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: '🚀', title: 'Быстро', desc: 'Доставка в течение 2 часов' },
              { icon: '🛡️', title: 'Надежно', desc: 'Сертифицированная техника' },
              { icon: '💰', title: 'Доступно', desc: 'Конкурентные цены' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3 text-white/80 cursor-pointer hover:text-white transition-colors"
          onClick={() => {
            const element = document.querySelector('#about')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <span className="text-sm font-medium">Узнать больше</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 