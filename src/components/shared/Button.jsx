'use client'

import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-brand text-white shadow-lift hover:shadow-xl',
  accent: 'bg-gradient-accent text-white shadow-lift-accent hover:shadow-xl',
  outline: 'bg-white text-ink border-2 border-slate-200 hover:border-brand hover:text-brand',
  ghost: 'bg-transparent text-slateSoft hover:bg-white hover:text-ink',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 1, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
