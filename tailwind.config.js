/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-epilogue)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        slc: {
          primary: '#FF6B00',
          dark: '#1A1A1A',
          bg: '#FFF7F2',
          success: '#16A34A',
          danger: '#DC2626',
        },
        shell: '#f8f9fc',
        ink: '#1e293b',
        slateSoft: '#64748b',
        brand: '#2563eb',
        'brand-dark': '#1d4ed8',
        accent: '#f59e0b',
        'accent-warm': '#fbbf24',
        'accent-light': '#fef3c7',
        success: '#22c55e',
        'success-dark': '#16a34a',
        cream: '#fffbeb',
        'cream-deep': '#fef9c3',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(15, 23, 42, 0.06)',
        lift: '0 12px 32px rgba(37, 99, 235, 0.18)',
        'lift-accent': '0 12px 32px rgba(245, 158, 11, 0.22)',
        glow: '0 0 40px rgba(37, 99, 235, 0.12)',
        'card-hover': '0 20px 44px rgba(15, 23, 42, 0.10)',
        slc: '0 16px 48px rgba(255, 107, 0, 0.18)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 78% 30%, rgba(245, 158, 11, 0.12), transparent 40%), radial-gradient(circle at 14% 15%, rgba(37, 99, 235, 0.10), transparent 32%)',
        'gradient-brand': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f8f9fc 0%, #fffbeb 50%, #f8f9fc 100%)',
        'gradient-cta': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'slc-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF9A00 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(8px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 4.8s ease-in-out infinite',
        drift: 'drift 5.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
