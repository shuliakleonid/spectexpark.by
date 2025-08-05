'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Equipment = () => {
  const equipment = [
    {
      id: 1,
      height: '18м',
      title: 'Автовышка 18 метров',
      description: 'Идеально подходит для работ на средней высоте',
      features: [
        'Максимальная высота: 18 метров',
        'Грузоподъемность: 250 кг',
  
      ],
      image: '/images/equipment/auto_18-1.jpg',
      price: 'от 70 BYN/час'
    },
    {
      id: 2,
      height: '28м',
      title: 'Автовышка 28 метров',
      description: 'Мощная машина для работ на большой высоте',
      features: [
        'Максимальная высота: 28 метров',
        'Грузоподъемность: 300 кг',
       
      ],
      image: '/images/equipment/auto_28-1.jpg',
      price: 'от 100 BYN/час'
    }
  ]



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
              <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl mb-6 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
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

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment 