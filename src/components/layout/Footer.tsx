'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">AVTOVYSHKA.BY</span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 max-w-md"
              >
                Профессиональные услуги по аренде автовышек в Беларуси. 
                10+ лет опыта, 24/7 обслуживание, качество и надежность.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href="tel:+375447648181"
                    className="hover:text-primary transition-colors"
                  >
                    +375(44)7648181
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:avtovishki.arenda@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    avtovishki.arenda@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>д. Боровляны пер Школьный д 5</span>
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
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="#equipment"
                    className="hover:text-primary transition-colors"
                  >
                    Автовышка 18м
                  </a>
                </li>
                <li>
                  <a 
                    href="#equipment"
                    className="hover:text-primary transition-colors"
                  >
                    Автовышка 28м
                  </a>
                </li>
                <li>
                  <a 
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    Монтажные работы
                  </a>
                </li>
                <li>
                  <a 
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    Мойка фасадов
                  </a>
                </li>
                <li>
                  <a 
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    Обслуживание зданий
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a 
                    href="#equipment"
                    className="hover:text-primary transition-colors"
                  >
                    Техника
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery"
                    className="hover:text-primary transition-colors"
                  >
                    Галерея
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Заказать
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm"
            >
              © {currentYear} ИП ШУЛЯК А.В. Все права защищены.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-red-300 text-sm">Работаем 24/7 </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 