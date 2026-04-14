'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineCalendar } from 'react-icons/hi2'
import DemoPopModal from '../../views/demo/DemoPopModal'

function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const whatsappLink = "https://api.whatsapp.com/send/?phone=91923678866&text=Hi+ConnectSkool%2C+I+want+to+know+more+about+your+School+ERP&type=phone_number&app_absent=0"

  return (
    <>
      {/* Modal Component */}
      <DemoPopModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Page Wrapper: BG #F8F9FC */}
      <section className="w-full py-24 px-4 bg-[#F8F9FC]">
        
        {/* Max Width Container */}
        <div className="max-w-7xl mx-auto">
          
          {/* Main Card - Centered Content & Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[50px] bg-[#1E4E6D] py-16 px-6 md:px-20 shadow-[0_40px_100px_-20px_rgba(30,78,109,0.5)] border border-white/10 text-center"
          >
            
            {/* Background Animated Glows (Image ki jagah premium aesthetic ke liye) */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#F0970A]/20 rounded-full blur-[120px] pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-4xl mx-auto">
              
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#F0970A] font-black tracking-[0.3em] uppercase text-xs mb-6 px-4 py-1.5 bg-[#F0970A]/10 rounded-full border border-[#F0970A]/20"
              >
                Let's Transform Your School
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight"
              >
                Prefer A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0970A] to-[#ffc14d]">Discussion</span> <br className="hidden md:block" /> Before Deciding?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-blue-100/70 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Connect with our experts to see how ConnectSkool's automated ecosystem can save you 10+ hours of manual work every week.
              </motion.p>

              {/* Centered Buttons Group */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                
                {/* Strategy Call Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#F0970A] text-white font-black rounded-2xl transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(240,151,10,0.5)] border-2 border-[#F0970A] hover:bg-white hover:text-[#1E4E6D]"
                >
                  <HiOutlineCalendar size={24} />
                  <span className="tracking-wide">BOOK FREE STRATEGY CALL</span>
                </motion.button>

                {/* WhatsApp Button */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-xl text-white font-black rounded-2xl transition-all duration-300 border-2 border-white/20 hover:bg-white hover:text-[#1E4E6D] hover:border-white shadow-xl"
                >
                  <FaWhatsapp size={24} className="text-[#25D366]" />
                  <span className="tracking-wide">CHAT ON WHATSAPP</span>
                </motion.a>

              </motion.div>

              {/* Trust Badge / Sub-text */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 text-white/40 text-sm font-medium"
              >
                No commitment required • Free technical consultation • 24/7 Support
              </motion.p>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CTASection