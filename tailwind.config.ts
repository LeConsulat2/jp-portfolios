import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx}',
    './routes/**/*.{ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#8b5cf6', // violet-500
        secondary: '#ec4899', // pink-500
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-in-out forwards',
        fadeInUp: 'fadeInUp 1.2s ease-in-out forwards',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      dropShadow: {
        glow: '0 0 10px rgba(139, 92, 246, 0.6)',
      },
      backgroundImage: {
        hero: 'linear-gradient(to right, #8b5cf6, #ec4899)',
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
