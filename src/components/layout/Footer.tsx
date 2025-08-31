'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp, Sparkles, Clock, Shield, Zap } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gradient-primary">
                    SPECTEXPARK.BY
                  </span>
                  <span className="text-sm text-neutral-400">
                    Профессиональная аренда автовышек
                  </span>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-neutral-300 mb-8 max-w-lg leading-relaxed"
              >
                Профессиональные услуги по аренде автовышек в Беларуси. 
                10+ лет опыта, 24/7 обслуживание, качество и надежность.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <a 
                    href="tel:+375447648181"
                    className="hover:text-primary transition-colors font-medium"
                  >
                    +375(44)7648181
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <a
                    href="mailto:spectexpark.arenda@gmail.com"
                    className="hover:text-primary transition-colors font-medium"
                  >
                    spectexpark.arenda@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">д. Боровляны пер Школьный д 5</span>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Услуги</h4>
              <ul className="space-y-3">
                {[
                  'Автовышка 18м',
                  'Автовышка 28м',
                  'Монтажные работы',
                  'Мойка фасадов',
                  'Обслуживание зданий'
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="#equipment"
                      className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Навигация</h4>
              <ul className="space-y-3">
                {[
                  { name: 'О нас', href: '#about' },
                  { name: 'Техника', href: '#equipment' },
                  { name: 'Галерея', href: '#gallery' },
                  { name: 'Контакты', href: '#contact' },
                  { name: 'Заказать', href: '#contact' }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-neutral-700/50"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: 'Работаем 24/7', desc: 'Круглосуточная поддержка' },
                { icon: Shield, title: 'Гарантия качества', desc: 'Сертифицированная техника' },
                { icon: Zap, title: 'Быстрая доставка', desc: 'В течение 2 часов' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-white">{feature.title}</h5>
                  <p className="text-neutral-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm"
            >
              © {currentYear} ИП ШУЛЯК А.В. Все права защищены.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-accent-400 text-sm font-medium">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Работаем 24/7
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <ArrowUp className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 