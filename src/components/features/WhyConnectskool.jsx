'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'

const WhyConnectSkool = () => {


  return (
    <section className="relative w-full bg-[#F7F8FB] py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Subtle Glow */}
      {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F0A80A]/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#1E4E6D]/10 blur-[100px] rounded-full" /> */}
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: IMAGE & STATS BOX */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Decorative Back Shape */}
          {/* <div className="absolute -inset-4 bg-gradient-to-tr from-[#F0A80A]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" /> */}
          
          <div className="relative rounded-3xl overflow-hidden border border-[#1E4E6D]/10 shadow-2xl">
            <img
              src="/assets/featuresection.webp" // Replace with your actual image path
              alt="ConnectSkool Dashboard"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Stats Card */}
       
        </motion.div>

        {/* RIGHT SIDE: CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-[2px] uppercase text-[#F0A80A] bg-[#F0A80A]/10 rounded-full border border-[#F0A80A]/20">
           <span className='text-[#1e4e6d]'>ConnectSkool ERP</span> · Smart School Management
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
              <span className="text-[#F0A80A]">We are <span className='text-[#1e4e6d]'>ConnectSkool</span></span>
            </h2>
            <p className="text-lg text-gray-600 mt-3">
              Modern. Intelligent. Seamless.
            </p>
          </div>

          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              <strong className="text-[#1E4E6D] font-semibold">ConnectSkool ERP</strong> is a modern, all-in-one school management solution designed to 
              <strong className="text-gray-900 font-semibold"> simplify and digitize</strong> every aspect of educational institutions. Built to bridge the gap between administration, teachers, students, and parents — seamlessly.
            </p>
            
            <p>
              With a focus on efficiency and innovation, ConnectSkool streamlines <strong className="text-[#1E4E6D]">attendance, fee management, examinations, transport, and academic planning</strong> — all from a single unified platform. Reduce manual work, eliminate errors, and enhance productivity across every department.
            </p>

            <p>
              We believe education should be driven by <strong className="text-[#1E4E6D]">clarity, transparency, and accessibility</strong>. Intuitive dashboards, secure data handling, and mobile-friendly access ensure every stakeholder stays connected — anytime, anywhere.
            </p>

            {/* Highlighted Feature Section */}
            <div className="bg-white p-5 rounded-xl border-l-4 border-[#F0A80A] shadow-sm my-4">
              <p className="text-gray-700 italic">
                “ConnectSkool empowers schools with real-time insights, automated workflows, and a collaborative ecosystem — helping educators focus on what truly matters: <strong className="text-[#1E4E6D]">shaping young minds</strong>.”
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-[#F0A80A] text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#d89608] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#F0A80A]/30">
              Explore Features <HiArrowUpRight size={18} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-widest rounded-lg hover:border-[#F0A80A] hover:text-[#F0A80A] transition-all">
              Get Started
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-4 pt-2 text-xs text-gray-400">
            <span className="flex items-center gap-1">✓ No credit card required</span>
            <span className="flex items-center gap-1">✓ Free demo available</span>
            <span className="flex items-center gap-1">✓ 24/7 support</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyConnectSkool