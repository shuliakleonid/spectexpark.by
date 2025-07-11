'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Какие документы нужны для аренды автовышки?',
    answer: 'Для аренды автовышки необходимо предоставить паспорт и документы на объект, где будут проводиться работы. Также может потребоваться разрешение на проведение высотных работ.'
  },
  {
    question: 'Сколько стоит аренда автовышки?',
    answer: 'Стоимость аренды зависит от высоты автовышки, продолжительности работ и удаленности объекта. Автовышка 18м - от 50 руб/час, автовышка 28м - от 70 руб/час. Минимальный заказ - 4 часа.'
  },
  {
    question: 'Как быстро вы можете приехать на объект?',
    answer: 'Время прибытия зависит от загруженности и удаленности объекта. В Минске и ближайших районах - в течение 1-2 часов. В отдаленных районах - до 4 часов.'
  },
  {
    question: 'Работаете ли вы в выходные и праздники?',
    answer: 'Да, мы работаем 24/7, включая выходные и праздничные дни. Круглосуточная работа позволяет решать срочные задачи в любое время.'
  },
  {
    question: 'Какая максимальная высота работы автовышек?',
    answer: 'У нас есть автовышки высотой 18 метров и 28 метров. Максимальная рабочая высота составляет 28 метров, что позволяет выполнять большинство высотных работ.'
  },
  {
    question: 'Предоставляете ли вы оператора автовышки?',
    answer: 'Да, мы предоставляем квалифицированных операторов с опытом работы на высоте. Все операторы имеют необходимые сертификаты и проходят регулярное обучение.'
  },
  {
    question: 'Какие виды работ выполняют ваши автовышки?',
    answer: 'Наши автовышки используются для монтажных работ, мойки фасадов, установки рекламных конструкций, обслуживания зданий, электромонтажных работ и других высотных задач.'
  },
  {
    question: 'Есть ли у вас страховка и гарантии?',
    answer: 'Да, у нас есть полная страховка техники и ответственности. Мы гарантируем качество выполняемых работ и безопасность на объекте.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о наших услугах и условиях аренды автовышек
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-gradient-to-r from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-700 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent mb-6" />
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <div className="bg-gradient-to-r from-info-500 to-primary-500 rounded-3xl p-8 lg:p-12 shadow-glow">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Остались вопросы?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для получения подробной консультации по всем вопросам аренды автовышек
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
                className="btn-primary bg-white text-info-600 hover:bg-neutral-100 shadow-glow hover:shadow-glow-lg"
              >
                Задать вопрос
              </motion.button>
              <motion.a
                href="tel:+375447648181"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border-white text-white hover:bg-white hover:text-info-600 shadow-glow hover:shadow-glow-lg"
              >
                Позвонить сейчас
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 