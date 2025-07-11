import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B35',
        'secondary': '#1E40AF',
        'accent': '#F59E0B',
        'neutral-dark': '#1F2937',
        'neutral-medium': '#6B7280',
        'neutral-light': '#F3F4F6',
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
        'text-inverse': '#FFFFFF',
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        secondary: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        'section': '5rem',
        'container': '1200px',
        'grid': '2rem',
      },
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'small': '0.5rem',
        'medium': '1rem',
        'large': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 