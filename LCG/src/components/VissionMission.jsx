import React from "react";
import { Target, Compass, ArrowUpRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="purpose" className="relative bg-[#001A33] py-18 px-6 overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Glow following the divider */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[600px] h-[300px] bg-[#BF9024]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-[#F1C40F] text-xs font-bold uppercase tracking-[0.5em] mb-4">
            Strategic Intent
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#BF9024] to-transparent mx-auto" />
        </div>

        <div className="relative grid md:grid-cols-2 gap-0 items-center">
          
          {/* VERTICAL DIVIDER (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F1C40F]/30 to-transparent z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#001A33] border border-[#F1C40F]/40 rotate-45 flex items-center justify-center">
               <div className="w-2 h-2 bg-[#F1C40F] animate-pulse" />
            </div>
          </div>

          {/* --- MISSION CARD (LEFT) --- */}
          <div className="group relative p-8 md:p-16 transition-all duration-500 hover:bg-[#002865]/30">
            <div className="relative z-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#002855] border border-[#BF9024]/30 rounded-sm text-[#F1C40F] group-hover:bg-[#F1C40F] group-hover:text-[#001A33] transition-all duration-500">
                  <Target size={24} />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#FFD966] font-bold">
                  Our Mission
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-[#FFFFFF] leading-tight mb-6">
                Honest Guidance. <br />
                <span className="text-[#F2F2F2]/60 group-hover:text-[#F2F2F2] transition-colors">Clear Direction.</span>
              </h3>

              <p className="text-base text-[#F2F2F2]/70 leading-relaxed max-w-md group-hover:text-[#F2F2F2]/90 transition-colors">
                To help people reach a stronger financial position through honest
                guidance, clear communication, and genuine trust — empowering
                confident decisions and long-term stability.
              </p>
            </div>
            
            {/* Background Number Accent */}
            <span className="absolute top-10 right-10 text-9xl font-black text-[#F1C40F]/5 pointer-events-none group-hover:text-[#F1C40F]/10 transition-colors">01</span>
          </div>

          {/* --- VISION CARD (RIGHT) --- */}
          <div className="group relative p-8 md:p-16 transition-all duration-500 hover:bg-[#002885]/30 text-right md:text-left">
            <div className="relative z-20">
              <div className="flex items-center justify-end md:justify-start gap-4 mb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-[#FFD966] font-bold order-2 md:order-1">
                  Our Vision
                </span>
                <div className="p-3 bg-[#002855] border border-[#BF9024]/30 rounded-sm text-[#F1C40F] group-hover:bg-[#F1C40F] group-hover:text-[#001A33] transition-all duration-500 order-1 md:order-2">
                  <Compass size={24} />
                </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-[#FFFFFF] leading-tight mb-6">
                Confidence Built <br />
                <span className="text-[#F2F2F2]/60 group-hover:text-[#F2F2F2] transition-colors">on Trust.</span>
              </h3>

              <p className="text-base text-[#F2F2F2]/70 leading-relaxed max-w-md ml-auto md:ml-0 group-hover:text-[#F2F2F2]/90 transition-colors">
                To create a future where individuals and businesses feel informed,
                respected, and in control of their financial journey — guided by
                clarity, integrity, and lasting relationships.
              </p>
            </div>

            {/* Background Number Accent */}
            <span className="absolute top-10 left-10 text-9xl font-black text-[#F1C40F]/5 pointer-events-none group-hover:text-[#F1C40F]/10 transition-colors">02</span>
          </div>

        </div>

        {/* BOTTOM DECORATIVE BAR */}
        <div className="mt-15 flex justify-center">
            <div className="group flex items-center gap-3 px-6 py-3 border border-[#F1C40F]/20 rounded-full bg-[#002855]/50 backdrop-blur-sm cursor-pointer hover:border-[#F1C40F]/50 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#F1C40F]" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#F2F2F2]/60 group-hover:text-[#F2F2F2]">
                  Excellence in Consulting
                </span>
                {/* <ArrowUpRight size={14} className="text-[#F1C40F]" /> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;