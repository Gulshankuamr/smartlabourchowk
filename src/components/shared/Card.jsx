'use client'

import { motion } from 'framer-motion'

function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-card p-6 ${hover ? 'glass-card-hover cursor-default' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
