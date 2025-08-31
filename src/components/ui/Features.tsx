'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Clock, Users, Award, Truck } from 'lucide-react'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Сертифицированная техника и опытные операторы обеспечивают максимальную безопасность работ',
    color: 'from-success-500 to-success-600'
  },
  {
    icon: Zap,
    title: 'Скорость',
    description: 'Быстрая доставка и мобильность позволяют оперативно решать любые задачи',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: Clock,
    title: '24/7 Доступность',
    description: 'Работаем круглосуточно, готовы выехать в любое время дня и ночи',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Users,
    title: 'Опытная команда',
    description: 'Профессиональные операторы с многолетним опытом работы на высоте',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: Award,
    title: 'Качество',
    description: 'Регулярное обслуживание техники и контроль качества выполняемых работ',
    color: 'from-warning-500 to-warning-600'
  },
  {
    icon: Truck,
    title: 'Мобильность',
    description: 'Автовышки легко перемещаются между объектами и работают в труднодоступных местах',
    color: 'from-info-500 to-info-600'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-6">
            Наши преимущества
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Мы предлагаем комплексные решения для работы на высоте с использованием современной техники и профессионального подхода
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-700 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-neutral-200/50 dark:border-neutral-700/50">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 lg:p-12 shadow-glow">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Готовы к сотрудничеству?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами прямо сейчас и получите профессиональную консультацию по аренде автовышек
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-white"
            >
              Получить консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 