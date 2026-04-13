'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';
import { FiAlertTriangle, FiArrowRight, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

const defaultProblems = [
  {
    id: 1,
    title: 'Scattered student data across spreadsheets',
    description: 'Critical information is trapped in siloed Excel files, making analysis and reporting a nightmare.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Manual attendance taking errors',
    description: 'Paper-based or basic digital systems lead to mistakes, proxy attendance, and wasted teacher hours.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
  },
  {
    id: 3,
    title: 'Delayed fee collection tracking',
    description: 'Outstanding fees go unnoticed for months, causing cash flow problems and administrative headaches.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2111&q=80',
  },
  {
    id: 4,
    title: 'Poor parent-teacher communication',
    description: 'Lack of real-time updates creates gaps in student progress monitoring and parental involvement.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

const defaultSolutions = [
  {
    id: 1,
    title: 'One dashboard for all school data',
    description: 'Unified, real-time view of academics, attendance, fees, and communication in one beautiful interface.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Automated digital attendance system',
    description: 'Biometric and QR-code based attendance with instant alerts and auto-generated reports.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
  },
  {
    id: 3,
    title: 'Real-time fee tracking and reminders',
    description: 'Automated payment tracking, receipts, and gentle reminders to parents via SMS and email.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    title: 'Instant notifications and messaging',
    description: 'Two-way communication portal with instant updates, announcements, and parent-teacher chats.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

export function ProblemSolutionSection({
  problems = defaultProblems,
  solutions = defaultSolutions,
  title = 'From Chaos to Clarity',
  subtitle = 'See how ConnectSkool transforms everyday school management headaches into streamlined, automated workflows.',
}) {
  const [activeTab, setActiveTab] = useState('problems');
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const currentItems = activeTab === 'problems' ? problems : solutions;
  const currentItem = currentItems[activeIndex];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + 2;
        });
      }, 40);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % currentItems.length);
        setProgress(0);
      }, 300);
    }
  }, [progress, currentItems.length]);

  useEffect(() => {
    setProgress(0);
  }, [activeIndex, activeTab]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  const handleManualSelect = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
    if (!isAutoPlaying) setProgress(0);
  };

  return (
    <section className="w-full py-16 md:py-4 px-4" style={{ backgroundColor: '#F8F9FC' }}>
      {/* Full width container with white background */}
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Outer Header Section - Text in #1D3146 color */}
        <div className="text-center  md:mb-10">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4" style={{ color: '#1D3146' }}>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-[#F0970A] to-[#F0B80A] bg-clip-text text-transparent">
              {title.split(' ').slice(-1)}
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto px-4" style={{ color: '#1D3146' }}>
            {subtitle}
          </p>
        </div>

        {/* Main Card with #1E4E6D background */}
        <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#1E4E6D' }}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 p-6 md:p-8 lg:p-10 xl:p-12">
            {/* Tab Selector - Compact */}
            <div className="flex justify-center mb-8 md:mb-10">
              <div className="inline-flex p-1 bg-white/10 rounded-full backdrop-blur-sm">
                <button
                  onClick={() => handleTabChange('problems')}
                  className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                    activeTab === 'problems'
                      ? 'bg-white text-[#1E4E6D] shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <FiAlertTriangle size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>The Problem</span>
                </button>
                <button
                  onClick={() => handleTabChange('solutions')}
                  className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                    activeTab === 'solutions'
                      ? 'bg-white text-[#1E4E6D] shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <HiCheckCircle size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>ConnectSkool Solution</span>
                </button>
              </div>
            </div>

            {/* Main Content Grid - Optimized for single screen view */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Feature List with scroll control */}
              <div className="space-y-3 max-h-[420px] lg:max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
                {currentItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    onClick={() => handleManualSelect(idx)}
                    className={`group relative cursor-pointer rounded-xl md:rounded-2xl transition-all duration-500 ${
                      activeIndex === idx
                        ? 'bg-white shadow-xl'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="p-4 md:p-5">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div
                          className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeIndex === idx
                              ? activeTab === 'problems'
                                ? 'bg-red-100 text-red-600'
                                : 'bg-emerald-100 text-emerald-600'
                              : 'bg-white/10 text-white/50 group-hover:bg-white/20 group-hover:text-white/80'
                          }`}
                        >
                          {activeTab === 'problems' ? (
                            <span className="font-bold text-base md:text-lg">{idx + 1}</span>
                          ) : (
                            <FiCheck size={18} className="md:w-5 md:h-5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-base md:text-lg font-semibold mb-1 transition-colors line-clamp-2 ${
                              activeIndex === idx
                                ? 'text-[#1E4E6D]'
                                : 'text-white/80 group-hover:text-white'
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`text-xs md:text-sm transition-colors line-clamp-2 ${
                              activeIndex === idx
                                ? 'text-gray-600'
                                : 'text-white/50 group-hover:text-white/70'
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: progress / 100 }}
                          transition={{ duration: 0.1, ease: 'linear' }}
                          style={{ originX: 0 }}
                          className={`h-0.5 md:h-1 rounded-full mt-3 md:mt-4 ${
                            activeTab === 'problems'
                              ? 'bg-gradient-to-r from-red-500 to-[#F0970A]'
                              : 'bg-gradient-to-r from-emerald-500 to-[#F0970A]'
                          }`}
                        />
                      )}
                    </div>

                    {/* Active indicator border */}
                    {activeIndex === idx && (
                      <motion.div
                        layoutId="activeBorder"
                        className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-[#F0970A] pointer-events-none"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover effect border */}
                    {activeIndex !== idx && (
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-[#F0970A]/30 transition-all duration-300 pointer-events-none" />
                    )}
                  </motion.div>
                ))}

                {/* Auto-play Toggle */}
                <div className="flex justify-end mt-4 md:mt-6">
                  <button
                    onClick={toggleAutoPlay}
                    className="flex items-center gap-2 text-xs md:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <div className={`w-7 h-3.5 md:w-8 md:h-4 rounded-full transition-colors ${isAutoPlaying ? 'bg-[#F0970A]' : 'bg-white/30'} relative`}>
                      <div className={`absolute top-0.5 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white transition-transform ${isAutoPlaying ? 'translate-x-4 md:translate-x-4' : 'translate-x-0.5'}`} />
                    </div>
                    <span>{isAutoPlaying ? 'Auto-rotating' : 'Paused'}</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Fixed height image */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={activeIndex === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E4E6D]/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-lg"
                      style={{
                        background: activeTab === 'problems' 
                          ? 'linear-gradient(135deg, #ef4444, #F0970A)' 
                          : 'linear-gradient(135deg, #10b981, #F0970A)'
                      }}
                    >
                      <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-semibold text-white">
                        {activeTab === 'problems' ? (
                          <>
                            <FiAlertTriangle size={14} className="md:w-4 md:h-4" />
                            <span>Critical Issue</span>
                          </>
                        ) : (
                          <>
                            <HiCheckCircle size={14} className="md:w-4 md:h-4" />
                            <span>Smart Solution</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation dots */}
                <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
                  {currentItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleManualSelect(idx)}
                      className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx
                          ? 'w-6 md:w-8 bg-[#F0970A]'
                          : 'w-1.5 md:w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8 md:mt-10 lg:mt-12"
            >
              <button className="group relative inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#F0970A] hover:bg-[#F0A80A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base">
                <span>See How It Works</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(240, 151, 10, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(240, 151, 10, 0.8);
        }
      `}</style>
    </section>
  );
}

export default ProblemSolutionSection;