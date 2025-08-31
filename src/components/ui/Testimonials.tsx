'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  company: string
  text: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Александр Петров',
    company: 'ООО "СтройМонтаж"',
    text: 'Отличная компания! Автовышка приехала вовремя, оператор профессиональный. Работы выполнены качественно и в срок. Рекомендую!',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Мария Сидорова',
    company: 'ИП "ФасадСервис"',
    text: 'Работаем с SPECTEXPARK.BY уже 3 года. Всегда довольны качеством услуг и оперативностью. Цены адекватные, техника в отличном состоянии.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Дмитрий Козлов',
    company: 'ООО "Высотные работы"',
    text: 'Профессиональный подход к делу. Автовышка 28м справилась с задачей на отлично. Оператор опытный, безопасность на высшем уровне.',
    rating: 5,
    avatar: '👨‍🔧'
  },
  {
    name: 'Елена Волкова',
    company: 'ИП "КлинингПро"',
    text: 'Заказывали автовышку для мойки фасадов. Работа выполнена качественно, без задержек. Сотрудники вежливые и профессиональные.',
    rating: 5,
    avatar: '👩‍🔬'
  },
  {
    name: 'Сергей Морозов',
    company: 'ООО "ЭлектроМонтаж"',
    text: 'Отличная техника и квалифицированные специалисты. Работаем регулярно, всегда довольны результатом. Спасибо за качество!',
    rating: 5,
    avatar: '👨‍⚡'
  },
  {
    name: 'Анна Соколова',
    company: 'ИП "РекламаВысота"',
    text: 'Заказывали автовышку для установки рекламных конструкций. Все работы выполнены в срок, качественно и безопасно.',
    rating: 5,
    avatar: '👩‍🎨'
  }
]

const Testimonials = () => {
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
            <span className="text-primary">ОТЗЫВЫ</span> НАШИХ КЛИЕНТОВ
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Мы гордимся доверием наших клиентов и стремимся поддерживать высокий уровень качества услуг
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-neutral-200/50 dark:border-neutral-700/50 relative h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/30 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-2xl shadow-glow">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-accent-500 to-warning-500 rounded-3xl p-8 lg:p-12 shadow-glow">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Станьте нашим клиентом
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сотням довольных клиентов, которые уже оценили качество наших услуг
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
              className="px-8 py-4 bg-white text-accent-600 font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg hover:bg-neutral-50 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
            >
              Оставить заявку
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 