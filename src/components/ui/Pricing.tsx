'use client'

import { motion } from 'framer-motion'
import { Check, Star, Clock, Truck } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Автовышка 18м',
    price: '50',
    period: 'руб/час',
    description: 'Идеально подходит для работ на средней высоте',
    features: [
      'Высота работы до 18 метров',
      'Грузоподъемность до 200 кг',
      'Опытный оператор',
      'Страховка включена',
      'Минимальный заказ 4 часа',
      'Быстрая доставка'
    ],
    icon: Truck,
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: 'Автовышка 28м',
    price: '70',
    period: 'руб/час',
    description: 'Мощная техника для сложных высотных работ',
    features: [
      'Высота работы до 28 метров',
      'Грузоподъемность до 300 кг',
      'Профессиональный оператор',
      'Полная страховка',
      'Минимальный заказ 4 часа',
      'Приоритетная доставка',
      'Дополнительное оборудование'
    ],
    popular: true,
    icon: Star,
    color: 'from-accent-500 to-accent-600'
  },
  {
    name: 'Срочный выезд',
    price: '100',
    period: 'руб/час',
    description: 'Экстренная помощь в любое время суток',
    features: [
      'Выезд в течение 1 часа',
      'Любая высота автовышки',
      'Круглосуточная работа',
      'Максимальный приоритет',
      'Доплата за срочность',
      'Гарантированное время'
    ],
    icon: Clock,
    color: 'from-secondary-500 to-secondary-600'
  }
]

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-6">
            Тарифы и цены
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых доплат. Выбирайте подходящий тариф для ваших задач
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-accent-500 to-warning-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-glow">
                    Популярный выбор
                  </span>
                </div>
              )}
              
              <div className={`bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-2 ${
                plan.popular 
                  ? 'border-accent-500 shadow-glow' 
                  : 'border-neutral-200/50 dark:border-neutral-700/50'
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-neutral-900 dark:text-white">
                      {plan.price}
                      <span className="text-lg font-normal text-neutral-600 dark:text-neutral-400">
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-500 to-warning-500 text-white shadow-glow hover:shadow-glow-lg'
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-soft hover:shadow-medium'
                  }`}
                >
                  Заказать {plan.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-success-500 to-info-500 rounded-3xl p-8 lg:p-12 shadow-glow">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Нужна консультация по ценам?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для получения индивидуального расчета стоимости аренды автовышки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary bg-white text-success-600 hover:bg-neutral-100 shadow-glow hover:shadow-glow-lg"
              >
                Получить расчет
              </motion.button>
              <motion.a
                href="tel:+375447648181"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border-white text-white hover:bg-white hover:text-success-600 shadow-glow hover:shadow-glow-lg"
              >
                Позвонить для уточнения
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 