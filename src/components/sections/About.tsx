'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award, Shield } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Обслуживание',
      description: 'Работаем круглосуточно для вашего удобства'
    },
    {
      icon: Award,
      title: '10+ Лет Опыта',
      description: 'Более десяти лет успешной работы на рынке'
    },
    {
      icon: Users,
      title: 'Для Всех Клиентов',
      description: 'Строительные компании, малый бизнес, частные лица'
    },
    {
      icon: Shield,
      title: 'Высокое Качество',
      description: 'Конкурентные цены при отличном качестве услуг'
    }
  ]

  return (
    <section id="about" className="section-padding bg-neutral-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-6">
            О <span className="text-primary">НАС</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Мы специализируемся на аренде автовышек для выполнения высотных работ. 
            Наша компания предоставляет качественные услуги для строительных компаний, 
            малого бизнеса и частных лиц.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-h3 font-bold text-text-primary">
              Ваш надежный партнер в высотных работах
            </h3>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                Компания <strong className="text-secondary">AVTOVYSHKA.BY</strong> предлагает 
                профессиональные услуги по аренде автовышек различной высоты. Мы работаем 
                с 2014 года и за это время заслужили доверие сотен клиентов.
              </p>
              
              <p>
                Наши автовышки идеально подходят для:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Монтажных и строительных работ</li>
                <li>Обслуживания фасадов зданий</li>
                <li>Мойки окон и очистки крыш</li>
                <li>Монтажа рекламных конструкций</li>
                <li>Проведения электромонтажных работ</li>
              </ul>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                Получить консультацию
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-card border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-card p-8 border border-gray-100"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-bold text-secondary text-lg mb-2">Компания</h4>
              <p className="text-text-secondary">ИП ШУЛЯК А.В.</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary text-lg mb-2">Адрес</h4>
              <p className="text-text-secondary">д. Боровляны пер Школьный д 5</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary text-lg mb-2">Email</h4>
              <a 
                href="mailto:avtovishki.arenda@gmail.com"
                className="text-primary hover:text-accent transition-colors"
              >
                avtovishki.arenda@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 