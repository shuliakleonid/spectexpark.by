'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Phone, Calendar, MapPin } from 'lucide-react'

const Equipment = () => {
  const equipment = [
    {
      id: 1,
      height: '18м',
      title: 'Автовышка 18 метров',
      description: 'Идеально подходит для работ на средней высоте',
      features: [
        'Максимальная высота: 18 метров',
        'Грузоподъемность: 200 кг',
        'Вылет стрелы: 12 метров',
        'Время развертывания: 5-7 минут',
        'Подходит для: мойки окон, монтажа, обслуживания'
      ],
      image: '/api/placeholder/400/300',
      price: 'от 50 BYN/час'
    },
    {
      id: 2,
      height: '28м',
      title: 'Автовышка 28 метров',
      description: 'Мощная машина для работ на большой высоте',
      features: [
        'Максимальная высота: 28 метров',
        'Грузоподъемность: 300 кг',
        'Вылет стрелы: 18 метров',
        'Время развертывания: 7-10 минут',
        'Подходит для: высотных работ, строительства, монтажа'
      ],
      image: '/api/placeholder/400/300',
      price: 'от 80 BYN/час'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="equipment" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-6">
            ВЫШКИ В <span className="text-primary">НАЛИЧИИ</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Предлагаем аренду автовышек различной высоты для выполнения любых высотных работ. 
            Наша техника в отличном состоянии и готова к работе 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {equipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-equipment"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowUp className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-secondary">{item.height}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-h3 font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {item.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="btn-primary flex-1 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>СВЯЗАТЬСЯ</span>
                  </motion.button>
                  
                  <motion.a
                    href="tel:+375447648181"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex-1 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Позвонить</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Гибкий график</h4>
                <p className="text-sm opacity-90">Работаем 24/7 по вашему расписанию</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">По всей Беларуси</h4>
                <p className="text-sm opacity-90">Доставляем технику в любую точку страны</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Быстрый ответ</h4>
                <p className="text-sm opacity-90">Отвечаем на звонки в течение 5 минут</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Equipment 