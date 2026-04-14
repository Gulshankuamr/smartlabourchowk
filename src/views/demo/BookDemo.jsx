'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookDemo() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC] px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-12 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-[#F49C0A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#F49C0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1E4E6D] mb-3">Demo Request Received!</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our ConnectSkool team will reach out to you within <strong>24 hours</strong> to schedule your personalized walkthrough.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '' }); }}
            className="mt-8 px-8 py-3 bg-[#1E4E6D] text-white text-sm font-semibold rounded-lg hover:bg-[#15374d] transition-colors shadow-lg shadow-[#1E4E6D]/20"
          >
            Submit another request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col items-center justify-center px-4 py-12">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mb-12"
      >
        <h1 className="text-4xl font-bold text-[#1E4E6D] mb-4">Book a Free Demo</h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Experience India's Smartest School ERP Platform. We'll show you how to automate admissions, fees, attendance, and parent communication all in one place.
        </p>
      </motion.div>

      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 w-full max-w-5xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side - Dark Section */}
        <div className="bg-[#1E4E6D] text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle Background */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 font-bold text-xl mb-10">
              <div className="w-10 h-10 bg-[#F49C0A] rounded-xl flex items-center justify-center shadow-lg shadow-[#F49C0A]/30">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 2v12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
             <span>
              Connect<span className="text-[#F49C0A]">Skool</span>
            </span>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-10">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#F49C0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+91-9236788668</span>
              </div>
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#F49C0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>sales@foundercodes.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <svg className="w-5 h-5 text-[#F49C0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Noida, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="p-10 md:p-14 md:w-3/5 bg-white">
          <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Name Field */}
              <div className="relative group">
                <label className="text-xs font-bold text-black uppercase tracking-wider mb-2 block">
                  Your Name
                </label>
                <input 
                  name="name" 
                  type="text" 
                  required 
                  value={form.name} 
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-b-2 border-gray-200 py-2 text-sm text-gray-800 bg-transparent outline-none focus:border-[#F49C0A] transition-colors placeholder-gray-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className="text-xs font-bold text-black uppercase tracking-wider mb-2 block">
                  Your Email
                </label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  value={form.email} 
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="w-full border-b-2 border-gray-200 py-2 text-sm text-gray-800 bg-transparent outline-none focus:border-[#F49C0A] transition-colors placeholder-gray-300"
                />
              </div>
            </div>

            {/* Phone Field (Full Width) */}
            <div className="relative group mb-10">
              <label className="text-xs font-bold text-black uppercase tracking-wider mb-2 block">
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

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="mt-auto pt-4 flex justify-end">
              <button 
                type="submit" 
                disabled={loading}
                className="px-8 py-3.5 bg-[#F49C0A] hover:bg-[#d98a09] disabled:bg-[#fbd28e] text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-[#F49C0A]/30 flex items-center gap-2 group"
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
      </motion.div>
    </div>
  );
}