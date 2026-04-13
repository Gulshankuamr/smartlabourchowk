"use client";

import Image from "next/image";

export default function ModulesHero() {
  return (
    <section className="relative w-full bg-[#295168] overflow-hidden pt-20 pb-0">

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/20">
          200+ Features • All-in-One ERP
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Smart ERP for{" "}
          <span className="text-[#F0A80A]">Modern Schools</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          Manage admissions, fees, academics, transport & more —
          all in one powerful and easy-to-use platform.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="px-6 py-3 rounded-full bg-[#F0A80A] text-white font-semibold shadow-md hover:scale-105 transition">
            Request Demo
          </button>
        </div>
      </div>

      {/* Image Section (IMPORTANT 🔥) */}
      <div className="relative mt-16 flex justify-center">

        {/* Glow */}
        <div className="absolute bottom-0 w-[500px] h-[200px] bg-[#F0A80A]/20 blur-3xl rounded-full" />

        {/* Image */}
        <div className="relative w-[90%] md:w-[75%] lg:w-[65%] -mb-20">
          <Image
            src="/assets/moduleheroo.webp" 
            alt="Dashboard Preview"
            width={1200}
            height={700}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </div>

    </section>
  );
}