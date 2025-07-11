"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      aria-label="Переключить тему"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="ml-2 p-2 rounded-lg border border-gray-200 bg-white dark:bg-neutral-dark dark:border-neutral-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-medium"
    >
      {theme === 'dark' ? (
        // Солнце
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" /><path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
      ) : (
        // Луна
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      )}
    </button>
  )
} 