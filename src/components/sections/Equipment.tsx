'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface EquipmentItem {
  id: number
  height: string
  title: string
  description: string
  features: string[]
  images: string[]
  price: string
}

const Equipment = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null)

  const equipment: EquipmentItem[] = [
    {
      id: 1,
      height: '18м',
      title: 'Автовышка 18 метров',
      description: 'Идеально подходит для работ на средней высоте',
      features: [
        'Максимальная высота: 18 метров',
        'Грузоподъемность: 250 кг',
        'Вылет стрелы: до 12 метров',
        'Угол поворота: 360°'
      ],
      images: [
        '/images/equipment/auto_18-1.jpeg',
        '/images/equipment/auto_18-2.jpg',
        '/images/equipment/auto_18-3.jpeg'
      ],
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
        'Вылет стрелы: до 18 метров',
        'Угол поворота: 360°'
      ],
      images: [
        '/images/equipment/auto_28-1.jpeg',
        '/images/equipment/auto_28-2.jpeg',
        '/images/equipment/auto_28-3.jpeg'
      ],
      price: 'от 100 BYN/час'
    }
  ]

  const openGallery = (equipment: EquipmentItem) => {
    setSelectedEquipment(equipment)
    setSelectedImage(equipment.images[0])
  }

  const closeGallery = () => {
    setSelectedImage(null)
    setSelectedEquipment(null)
  }

  const nextImage = () => {
    if (selectedEquipment && selectedImage) {
      const currentIndex = selectedEquipment.images.indexOf(selectedImage)
      const nextIndex = (currentIndex + 1) % selectedEquipment.images.length
      setSelectedImage(selectedEquipment.images[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedEquipment && selectedImage) {
      const currentIndex = selectedEquipment.images.indexOf(selectedImage)
      const prevIndex = currentIndex === 0 ? selectedEquipment.images.length - 1 : currentIndex - 1
      setSelectedImage(selectedEquipment.images[prevIndex])
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
              {/* Main Image */}
              <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl mb-6 overflow-hidden cursor-pointer group"
                   onClick={() => openGallery(item)}>
                <Image 
                  src={item.images[0]} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: 'center bottom' }}
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
                    Нажмите для просмотра
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                {item.images.slice(1).map((image, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className="relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openGallery(item)}
                  >
                    <Image 
                      src={image} 
                      alt={`${item.title} - фото ${imgIndex + 2}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
                <div className="text-xs text-text-secondary flex items-center px-2">
                  +{item.images.length - 1} фото
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

      {/* Gallery Modal */}
      {selectedImage && selectedEquipment && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative">
              <Image 
                src={selectedImage} 
                alt={selectedEquipment.title}
                width={800}
                height={600}
                className="rounded-lg max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedEquipment.images.indexOf(selectedImage) + 1} / {selectedEquipment.images.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex justify-center space-x-2 mt-4">
              {selectedEquipment.images.map((image, index) => (
                <div 
                  key={index}
                  className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    image === selectedImage ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image 
                    src={image} 
                    alt={`${selectedEquipment.title} - фото ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Equipment 
