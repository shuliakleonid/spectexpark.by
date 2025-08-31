'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Star, Award } from 'lucide-react'

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  color: string
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: '500+',
    label: 'Довольных клиентов',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Работаем круглосуточно',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Средний рейтинг',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Лет опыта',
    color: 'from-success-500 to-success-600'
  }
]

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Мы гордимся своими достижениями и стремимся к постоянному совершенствованию
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-medium transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-glow`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 