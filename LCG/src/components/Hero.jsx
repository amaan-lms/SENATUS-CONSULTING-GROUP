import React from "react";
import { ArrowRight, ShieldCheck, Landmark, MousePointer2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center bg-[#001A33] overflow-hidden pt-24 lg:pt-15"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F1C40F]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT: Text & Interaction */}
        <div className="space-y-7 animate-fade-in-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-[#BF9024]/40 bg-[#002855]/80 backdrop-blur-sm">
            <ShieldCheck size={14} className="text-[#FFD966]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#F2F2F2]">
              Executive Consulting
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] leading-[1.1] tracking-tighter">
            Honest Guidance. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD966] via-[#F1C40F] to-[#BF9024] filter drop-shadow-sm">
              Real Trust.
            </span>
          </h1>

          <p className="text-lg text-[#F2F2F2]/70 max-w-lg leading-relaxed font-light border-l border-[#BF9024]/30 pl-6">
            Helping you reach a better financial position through <span className="text-[#F1C40F]">Clarity, Respect, and Support</span>. We simplify the details so you can take control.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FFD966] to-[#BF9024] rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-[#0B0B0B] font-black uppercase tracking-widest text-xs flex items-center gap-2">
                Start Now <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="#purpose"
              className="px-8 py-4 border border-[#F2F2F2]/20 hover:border-[#F1C40F] hover:text-[#F1C40F] text-[#F2F2F2] font-bold uppercase tracking-widest text-xs rounded-sm transition-all"
            >
              Our Vision
            </a>

          </div>
        </div>

        {/* RIGHT CONTENT: Interactive Image & Card Overlay */}
        <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-right">
          {/* Main Image Frame */}
          <div className="relative w-full max-w-md h-[500px] rounded-sm overflow-hidden border border-[#BF9024]/20 group">
            <div className="absolute inset-0 bg-[#002855]/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
              alt="Corporate Building"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
            />

            {/* The Floating "Our Foundation" Card */}
            <div className="absolute bottom-8 -left-3 md:-left-3 z-20 max-w-xs p-6 bg-[#002855] border border-[#F1C40F]/30 shadow-[10px_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,217,102,0.1)] transition-transform duration-500 group-hover:-translate-y-4">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#001A33] border border-[#BF9024]/40 flex items-center justify-center">
                  <Landmark size={20} className="text-[#FFD966]" />
                </div>
                <h3 className="text-[#FFD966] font-bold uppercase tracking-widest text-xs">Our Foundation</h3>
                <p className="text-[11px] text-[#F2F2F2]/60 leading-relaxed uppercase tracking-wider">
                  Understanding your options is the first step toward independence. We protect your equity with clear direction.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-[#F1C40F]/50 to-transparent" />
              </div>
            </div>

            {/* Subtle Interactive Hint */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[#FFD966]">
              <span className="text-[10px] font-bold uppercase tracking-tighter">Explore</span>
              <MousePointer2 size={14} className="animate-bounce" />
            </div>
          </div>
        </div>

      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-10 left-6 opacity-5 pointer-events-none select-none">
        <span className="text-8xl font-black text-[#F2F2F2] uppercase tracking-tighter">SENATUS</span>
      </div>
    </section>
  );
};

export default Hero;