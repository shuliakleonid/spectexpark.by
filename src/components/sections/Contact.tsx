'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import ContactForm from '../ui/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+375(44)7648181',
      href: 'tel:+375447648181',
      description: 'Звоните в любое время'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'avtovishki.arenda@gmail.com',
      href: 'mailto:avtovishki.arenda@gmail.com',
      description: 'Пишите нам'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'д. Боровляны пер Школьный д 5',
      href: '#',
      description: 'Наш офис'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      value: '24/7',
      href: '#',
      description: 'Работаем круглосуточно'
    }
  ]

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:bg-pink-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-6">
            <span className="text-primary">СВЯЗАТЬСЯ</span> С НАМИ
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Готовы помочь с вашими высотными работами. Свяжитесь с нами любым удобным способом 
            или оставьте заявку, и мы перезвоним в течение 5 минут.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-h3 font-bold text-text-primary mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.href}
                        className="text-secondary hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-text-secondary mt-1">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Мы в социальных сетях
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-neutral-light rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-neutral-medium" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-neutral-light rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Наше местоположение</h4>
              <p className="text-text-secondary mb-4">
                д. Боровляны пер Школьный д 5
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Открыть карту
              </motion.button>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-secondary to-primary rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Нужна срочная помощь?</h4>
              <p className="mb-4 opacity-90">
                Звоните прямо сейчас - мы работаем 24/7 и готовы помочь в любое время!
              </p>
              <motion.a
                href="tel:+375447648181"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+375(44)7648181</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Company Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-neutral-light rounded-2xl p-8">
            <h4 className="text-xl font-bold text-text-primary mb-4">
              ИП ШУЛЯК А.В.
            </h4>
            <p className="text-text-secondary">
              Профессиональные услуги по аренде автовышек в Беларуси
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 