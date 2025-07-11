'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Sparkles } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

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

  const menuItems = [
    { name: 'О НАС', href: '#about' },
    { name: 'ВЫШКИ В НАЛИЧИИ', href: '#equipment' },
    { name: 'ГАЛЛЕРЕЯ', href: '#gallery' },
    { name: 'СВЯЗАТЬСЯ', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
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
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-primary">
                AVTOVYSHKA.BY
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Профессиональная аренда
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">+375(44)7648181</span>
            </motion.a>
            <ThemeToggle />
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
            <div className="container-custom py-6">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
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