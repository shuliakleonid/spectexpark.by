'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = [
    { name: 'О НАС', href: '#about' },
    { name: 'ВЫШКИ В НАЛИЧИИ', href: '#equipment' },
    { name: 'ГАЛЛЕРЕЯ 1232', href: '#gallery' },
    { name: 'СВЯЗАТЬСЯ', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    console.log('Attempting to scroll to:', href)
    const element = document.querySelector(href)
    console.log('Found element:', element)
    
    if (element) {
      // Добавляем небольшую задержку для корректной работы анимации
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
      setIsMenuOpen(false)
    } else {
      console.warn(`Element with selector ${href} not found`)
      // Попробуем найти элемент без #
      const elementWithoutHash = document.querySelector(href.substring(1))
      if (elementWithoutHash) {
        console.log('Found element without hash:', elementWithoutHash)
        setTimeout(() => {
          elementWithoutHash.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }, 100)
        setIsMenuOpen(false)
      }
    }
  }



  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-soft border-b border-neutral-200/50 dark:border-neutral-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/spectexpark-logo.svg" 
                  alt="SPECTEXPARK Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gradient-primary">
                SPECTEXPARK.BY
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Ваши задачи - наша высота
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="relative text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Phone Number & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.a
              href="tel:+375447648181"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-xl shadow-glow transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-bold text-sm tracking-wide">+375(44)7648181</span>
            </motion.a>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200/50 dark:border-neutral-700/50"
          >
            <div className="container-custom py-6" onClick={(e) => e.stopPropagation()}>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      scrollToSection(item.href)
                    }}
                    className="text-left text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4 border-t border-neutral-200 dark:border-neutral-700"
                >
                  <motion.a
                    href="tel:+375447648181"
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 px-4 py-3 bg-gradient-primary text-white rounded-xl shadow-glow"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+375(44)7648181</span>
                  </motion.a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 
