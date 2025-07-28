'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, User, Phone, Mail, MessageSquare, Truck } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().min(9, 'Введите корректный номер телефона'),
  email: z.string().email('Введите корректный email'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
  equipment: z.string().optional()
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Здесь будет отправка формы на сервер
      console.log('Form data:', data)
      
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      reset()
      
      // Сброс статуса через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-neutral-900 rounded-3xl shadow-glow border border-neutral-200/50 dark:border-neutral-700/50 p-8 lg:p-12"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow"
        >
          <MessageSquare className="w-10 h-10 text-white" />
        </motion.div>
        <h3 className="heading-3 text-neutral-900 dark:text-white mb-2">Отправить заявку</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          Заполните форму и мы свяжемся с вами в течение 30 минут
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Имя *
            </label>
            <div className="relative">
              <input
                {...register('name')}
                type="text"
                id="name"
                className={`input ${errors.name ? 'border-error focus:ring-error' : ''}`}
                placeholder="Ваше имя"
              />
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-error flex items-center gap-2 font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name.message}
              </motion.p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Телефон *
            </label>
            <div className="relative">
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className={`input ${errors.phone ? 'border-error focus:ring-error' : ''}`}
                placeholder="+375 (__) ______"
              />
            </div>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-error flex items-center gap-2 font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.phone.message}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email *
          </label>
          <div className="relative">
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`input ${errors.email ? 'border-error focus:ring-error' : ''}`}
              placeholder="your@email.com"
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-error flex items-center gap-2 font-medium"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        {/* Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="equipment" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
            <Truck className="w-4 h-4 text-primary" />
            Интересующая техника
          </label>
          <div className="relative">
            <select
              {...register('equipment')}
              id="equipment"
              className="input"
            >
              <option value="">Выберите автовышку</option>
              <option value="18m">Автовышка 18м</option>
              <option value="28m">Автовышка 28м</option>
              <option value="both">Обе модели</option>
              <option value="consultation">Нужна консультация</option>
            </select>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Сообщение *
          </label>
          <div className="relative">
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className={`textarea ${errors.message ? 'border-error focus:ring-error' : ''}`}
              placeholder="Опишите ваши потребности, сроки, адрес работ..."
            />
          </div>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-error flex items-center gap-2 font-medium"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.message.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:y-0 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Отправка...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Отправить заявку</span>
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="flex items-center gap-3 p-6 bg-success-50 dark:bg-success-900/20 border-2 border-success-200 dark:border-success-800 rounded-2xl shadow-soft"
            >
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
              <span className="text-success-700 dark:text-success-300">
                Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
              </span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="flex items-center gap-3 p-6 bg-error-50 dark:bg-error-900/20 border-2 border-error-200 dark:border-error-800 rounded-2xl shadow-soft"
            >
              <AlertCircle className="w-5 h-5 text-error-500 flex-shrink-0" />
              <span className="text-error-700 dark:text-error-300">
                Произошла ошибка при отправке. Попробуйте еще раз или позвоните нам.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}

export default ContactForm 