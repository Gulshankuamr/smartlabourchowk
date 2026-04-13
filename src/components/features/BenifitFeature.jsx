'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const benefits = [
  {
    id: 1,
    title: 'Smart E-Learning Ecosystem',
    description: 'ConnectSkool delivers a complete digital learning environment where classes, assignments, and study resources come together in one seamless platform. Students can attend live sessions, access recorded lectures, and download materials anytime. This ensures uninterrupted learning beyond classrooms, making education more flexible, accessible, and future-ready.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80'
  },
  {
    id: 2,
    title: 'Intelligent Assessment System',
    description: 'Simplify examinations with automated test creation, instant result generation, and performance analytics. Teachers can evaluate faster while reducing errors, and students receive timely feedback. ConnectSkool transforms traditional assessments into a smart, data-driven evaluation system.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
  },
  {
    id: 3,
    title: 'Real-Time Student Safety Tracking',
    description: 'Ensure complete student safety with live GPS tracking and instant alerts for school transport. Parents can monitor their child’s journey in real time, while schools maintain full visibility over routes and vehicles. Safety becomes proactive, transparent, and reliable.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80'
  },
  {
    id: 4,
    title: 'Effortless Attendance Management',
    description: 'Mark attendance digitally within seconds using mobile, web, or biometric systems. Automated reports, instant notifications, and real-time tracking eliminate manual work completely. Save time while maintaining accurate and transparent attendance records.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
  },
  {
    id: 5,
    title: 'One-Click Report Card Generation',
    description: 'Generate professional report cards instantly with automated grading and performance insights. Customize formats, include teacher remarks, and publish results with a single click. Reduce manual effort and deliver accurate academic reports effortlessly.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
  },
  {
    id: 6,
    title: 'Automated Payroll & Finance',
    description: 'Manage salaries, deductions, and financial operations with complete automation and accuracy. Generate payslips, track expenses, and handle compliance without manual errors. ConnectSkool ensures smooth financial management for institutions.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
  },
  {
    id: 7,
    title: 'Enhanced Parent Engagement',
    description: 'Keep parents actively involved with real-time updates, notifications, and direct communication channels. From attendance alerts to academic progress, everything is instantly accessible. Build stronger trust and transparency between schools and parents.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80'
  },
  {
    id: 8,
    title: 'Simplified Administrative Workflow',
    description: 'Streamline admissions, records, and daily operations through a centralized dashboard. Automate repetitive tasks, reduce paperwork, and improve efficiency across departments. ConnectSkool helps institutions operate smarter and faster.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 9,
    title: 'Fast & Seamless Communication',
    description: 'Enable instant communication between teachers, parents, and management through notifications, SMS, and in-app messaging. Ensure every update reaches the right audience at the right time. Communication becomes faster, clearer, and more effective.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
  },
  {
    id: 10,
    title: 'Smart Library Management',
    description: 'Digitally manage books, track inventory, and handle issue-return processes with ease. Students can browse catalogs and get notifications, while staff can maintain records efficiently. A modern library system for a smarter institution.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80'
  },
  {
    id: 11,
    title: 'Reduced Workload & Time Saving',
    description: 'Automate routine tasks and eliminate manual processes across departments. Save valuable time, reduce workload, and improve overall productivity. Focus more on growth and quality education instead of administrative burden.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c2231a9b?w=800&q=80'
  },
  {
    id: 12,
    title: 'Role-Based Personalized Access',
    description: 'Provide secure, role-specific dashboards tailored for students, teachers, parents, and administrators. Each user gets access to exactly what they need, ensuring better usability and data security across the platform.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  {
    id: 13,
    title: 'Complete E-Learning Management',
    description: 'Manage the entire digital learning lifecycle from classes to assignments and results in one platform. Deliver structured learning experiences with full control and flexibility for both teachers and students.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
  },
  {
    id: 14,
    title: 'Cloud-Based & Always Accessible',
    description: 'Access your school system anytime, anywhere with secure cloud infrastructure. No installations, no maintenance — just seamless performance across devices with real-time data synchronization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: 15,
    title: 'Dedicated Support & Helpdesk',
    description: 'Get continuous support from a dedicated team ensuring smooth operations at all times. From onboarding to troubleshooting, ConnectSkool provides reliable assistance so your system runs without interruptions.',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80'
  }
];

export default function BenefitsSection() {
  const [activeId, setActiveId] = useState(1);
  const [showMore, setShowMore] = useState(false);

  // Initial 6 dikhayega, showMore true hone par sabhi 15
  const visibleBenefits = showMore ? benefits : benefits.slice(0, 6);
  const activeBenefit = benefits.find((b) => b.id === activeId);

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 border-b pb-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#1E4E6D] mb-2">
            Powerful Benefits of <span className="text-[#F0A80A]">ConnectSkool </span>
          </h2>
          <p className="text-[#F0A80A] font-bold tracking-wide uppercase text-sm mb-4">
            Transforming School Operations with Smart Digital Solutions
          </p>
          <p className="text-gray-500 max-w-3xl leading-relaxed">
            ConnectSkool ERP is designed to simplify, automate, and enhance every aspect of school management. 
            From academics to administration, our platform ensures efficiency, transparency, and seamless communication.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT: Accordion List */}
          <div className="w-full lg:w-3/5 space-y-2">
            {visibleBenefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  activeId === benefit.id ? 'shadow-md border-l-4 border-[#F0A80A]' : 'border-b border-gray-100'
                }`}
              >
                <button
                  onClick={() => setActiveId(benefit.id)}
                  className={`w-full flex items-center justify-between py-4 px-4 transition-colors ${
                    activeId === benefit.id ? 'bg-white' : 'hover:bg-gray-50 bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                      activeId === benefit.id ? 'bg-[#F0A80A] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {benefit.id}
                    </span>
                    <span className={`text-left font-bold text-sm md:text-base ${
                      activeId === benefit.id ? 'text-[#F0A80A]' : 'text-gray-600'
                    }`}>
                      {benefit.title}
                    </span>
                  </div>
                  <div className={activeId === benefit.id ? 'text-[#F0A80A]' : 'text-gray-400'}>
                    {activeId === benefit.id ? <HiMinus size={20} /> : <HiPlus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === benefit.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                      style={{ backgroundColor: '#1F4E6D' }} // Description BG fix
                    >
                      <div className="p-5 text-sm leading-relaxed text-white">
                        {benefit.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Show More / Show Less Button */}
            <div className="pt-6">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="group flex items-center gap-2 bg-[#F0A80A] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg active:scale-95"
              >
                {showMore ? 'Show Less' : 'Show More Benefits'}
                <motion.span animate={{ rotate: showMore ? 180 : 0 }}>
                  <HiPlus />
                </motion.span>
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Preview */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white bg-white"
              >
                <img
                  src={activeBenefit?.image}
                  alt={activeBenefit?.title}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-white font-black text-xl leading-tight">
                     {activeBenefit?.title}
                   </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-6 flex justify-between items-center px-4">
              <div className="h-1 flex-1 bg-gray-200 rounded-full mr-4 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#F0A80A]"
                  animate={{ width: `${(activeId / 15) * 100}%` }}
                />
              </div>
              <span className="text-xs font-black text-[#1E4E6D]">
                {activeId.toString().padStart(2, '0')} / 15
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}