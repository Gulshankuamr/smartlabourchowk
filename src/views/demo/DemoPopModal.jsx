'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoPopModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleClose = () => {
    // Reset form states when closing
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '' });
      setError('');
    }, 300); // Wait for exit animation to finish
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError('Please fill in Name, Email, and Phone.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://fcadmin.fctesting.shop/admin/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
        }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl text-left overflow-hidden sm:my-8 sm:max-w-4xl w-full z-10 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-full transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {submitted ? (
              // Success State
              <div className="w-full p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#F49C0A]/10 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#F49C0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#1E4E6D] mb-3">Demo Request Received!</h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                  Our ConnectSkool team will reach out to you within <strong>24 hours</strong> to schedule your personalized walkthrough.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-8 py-3 bg-[#1E4E6D] text-white text-sm font-semibold rounded-lg hover:bg-[#15374d] transition-colors shadow-lg shadow-[#1E4E6D]/20"
                >
                  Done
                </button>
              </div>
            ) : (
              // Form State
              <>
                {/* Left Side - Dark Section */}
                <div className="bg-[#1E4E6D] text-white p-8 md:p-10 md:w-2/5 flex flex-col justify-center relative overflow-hidden hidden md:flex">
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 font-bold text-lg mb-8">
                      <div className="w-8 h-8 bg-[#F49C0A] rounded-lg flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8h12M8 2v12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      Connect<span className="text-[#F49C0A]">Skool</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 leading-tight">Book your<br/>Free Demo</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-8">
                      See how India's Smartest School ERP can automate your daily operations.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white/90 text-sm">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[#F49C0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90 text-sm">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[#F49C0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <span>support@connectskool.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="p-8 md:p-10 md:w-3/5 bg-white">
                  <h2 className="text-xl font-bold text-[#1E4E6D] mb-1 md:hidden">Book a Demo</h2>
                  <p className="text-gray-500 text-sm mb-6 md:hidden">Our team will contact you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center">
                    <div className="space-y-6 mb-8">
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                          Full Name
                        </label>
                        <input 
                          name="name" 
                          type="text" 
                          required 
                          value={form.name} 
                          onChange={handleChange}
                          placeholder="Rahul Sharma"
                          className="w-full border-b-2 border-gray-200 py-2 text-sm text-gray-800 bg-transparent outline-none focus:border-[#F49C0A] transition-colors placeholder-gray-300"
                        />
                      </div>

                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                          Email Address
                        </label>
                        <input 
                          name="email" 
                          type="email" 
                          required 
                          value={form.email} 
                          onChange={handleChange}
                          placeholder="avi@gmail.com"
                          className="w-full border-b-2 border-gray-200 py-2 text-sm text-gray-800 bg-transparent outline-none focus:border-[#F49C0A] transition-colors placeholder-gray-300"
                        />
                      </div>

                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                          Phone Number
                        </label>
                        <input 
                          name="phone" 
                          type="tel" 
                          required 
                          value={form.phone} 
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full border-b-2 border-gray-200 py-2 text-sm text-gray-800 bg-transparent outline-none focus:border-[#F49C0A] transition-colors placeholder-gray-300"
                        />
                      </div>
                    </div>

                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div className="mt-auto flex justify-end">
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full md:w-auto px-8 py-3 bg-[#F49C0A] hover:bg-[#d98a09] disabled:bg-[#fbd28e] text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-[#F49C0A]/30 flex items-center justify-center gap-2 group"
                      >
                        {loading ? (
                          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                        ) : (
                          <>
                            Send Request
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}