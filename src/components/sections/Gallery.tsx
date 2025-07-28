'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import Image from 'next/image'

const images = [
  {
    id: 1,
    src: '/images/gallery/auto_18-1.jpg',
    alt: 'Автовышка 18м в работе',
    title: 'Автовышка 18м',
    description: 'Работы по мойке фасада здания'
  },
  {
    id: 2,
    src: '/images/gallery/auto_18-2.jpg',
    alt: 'Автовышка 18м на строительной площадке',
    title: 'Автовышка 18м',
    description: 'Монтажные работы на высоте'
  },
  {
    id: 3,
    src: '/images/gallery/auto_28-1.jpg',
    alt: 'Автовышка 28м в работе',
    title: 'Автовышка 28м',
    description: 'Профессиональные операторы за работой'
  },
  {
    id: 4,
    src: '/images/gallery/auto_28-2.jpg',
    alt: 'Автовышка 28м в городской среде',
    title: 'Автовышка 28м',
    description: 'Работы в центре города'
  }
]

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setCurrentImage(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="gallery" className="section-padding bg-neutral-light pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-6">
            <span className="text-primary">ГАЛЛЕРЕЯ</span> РАБОТ
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Посмотрите на наши автовышки в действии и примеры выполненных работ. 
            Качество и профессионализм в каждой детали.
          </p>
        </motion.div>

        {/* Desktop Gallery */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {images.map((image, imageIndex) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openModal(imageIndex)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Maximize2 className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Нажмите для просмотра</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Gallery */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {images.map((image) => (
                                  <div key={image.id} className="w-full flex-shrink-0 relative h-64">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    className="object-cover"
                  />
                </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </button>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-96">
                  <Image 
                    src={images[currentImage].src} 
                    alt={images[currentImage].alt} 
                    fill
                    className="object-cover"
                  />

                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <X className="w-6 h-6 text-secondary" />
                  </button>

                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-secondary" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-secondary" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-center space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImage ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery 