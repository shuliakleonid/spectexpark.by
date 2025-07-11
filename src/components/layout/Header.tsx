'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-secondary">
              AVTOVYSHKA.BY
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-text-primary hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+375447648181"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+375(44)7648181</span>
            </motion.a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
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
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-text-primary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  href="tel:+375447648181"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors duration-200 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+375(44)7648181</span>
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 