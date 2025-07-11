'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
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
      className="bg-white rounded-2xl shadow-card p-6 lg:p-8"
    >
      <h3 className="text-h3 font-bold text-text-primary mb-6">Отправить заявку</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Имя *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ваше имя"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Телефон *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+375 (__) ______"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Equipment */}
        <div>
          <label htmlFor="equipment" className="block text-sm font-medium text-text-primary mb-2">
            Интересующая техника
          </label>
          <select
            {...register('equipment')}
            id="equipment"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="">Выберите автовышку</option>
            <option value="18m">Автовышка 18м</option>
            <option value="28m">Автовышка 28м</option>
            <option value="both">Обе модели</option>
            <option value="consultation">Нужна консультация</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Сообщение *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Опишите ваши потребности, сроки, адрес работ..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-700">Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">Произошла ошибка при отправке. Попробуйте еще раз или позвоните нам.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}

export default ContactForm 