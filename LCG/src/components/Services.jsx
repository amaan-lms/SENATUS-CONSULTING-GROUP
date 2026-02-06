import React from "react";
import { ShieldCheck, Compass, Landmark, ArrowRight, UserCheck, Plus } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Building Trust",
      description: "We simplify the complex details to rebuild confidence in your financial journey through radical transparency.",
      icon: <UserCheck size={24} />,
      tag: "PHASE 01"
    },
    {
      title: "Protecting Equity",
      description: "Focused strategies designed to safeguard your core assets and ensure long-term stability.",
      icon: <ShieldCheck size={24} />,
      tag: "PHASE 02"
    },
    {
      title: "Clear Direction",
      description: "We guide you through your options to find the correct financial status for your specific goals.",
      icon: <Compass size={24} />,
      tag: "PHASE 03"
    }
  ];

  return (
    <section id="services" className="relative bg-[#052849] py-24 md:py-24 overflow-hidden">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F1C40F_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#BF9024]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER: INTEGRATED WHY/WHAT */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-[#FFD966] mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#F1C40F]" /> Strategic Solutions
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-[#FFFFFF] leading-[0.9] tracking-tighter">
              What We <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD966] via-[#F1C40F] to-[#BF9024]">
                Offer.
              </span>
            </h3>
          </div>
          <div className="lg:max-w-sm bg-[#001A33]/40 p-8 border-l border-[#F1C40F]/30 backdrop-blur-md">
            <p className="text-[#F2F2F2]/60 text-sm leading-relaxed uppercase tracking-wider font-medium">
              "Understanding your options is the first step toward independence and protection."
            </p>
          </div>
        </div>

        {/* INTERACTIVE SERVICE BLADES */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch h-full min-h-[450px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative flex-1 bg-[#001A33]/50 border-2 border-[#F1C40F]/15 p-10 overflow-hidden transition-all duration-700 ease-in-out hover:flex-[1.5] hover:bg-[#001A33]/80 hover:border-[#F1C40F]/60"
            >
              {/* Inner Glow Depth */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_40px_rgba(241,196,15,0.1)] pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-[#001A33] border border-[#BF9024]/30 text-[#F1C40F] group-hover:bg-[#F1C40F] group-hover:text-[#001A33] transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black text-[#F1C40F]/40 tracking-widest mt-2">{service.tag}</span>
                </div>

                <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-[#FFD966] transition-colors tracking-tight">
                  {service.title}
                </h4>

                <p className="text-[#F2F2F2]/40 text-lg leading-relaxed group-hover:text-[#F2F2F2]/80 transition-colors max-w-xs">
                  {service.description}
                </p>

                <div className="mt-auto pt-8 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-[#FFD966] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                      Learn More <ArrowRight size={14} />
                   </div>
                   <Plus size={20} className="text-[#F1C40F]/20 group-hover:rotate-90 group-hover:text-[#F1C40F] transition-all duration-500" />
                </div>
              </div>

              {/* Ghost Landmark Accent */}
              <Landmark size={150} className="absolute -bottom-10 -right-10 text-white opacity-[0.01] group-hover:opacity-[0.03] transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* BOTTOM METHODOLOGY SUMMARY */}
        <div className="mt-18 text-center">
            <p className="text-[#F2F2F2]/40 text-xs uppercase tracking-[0.6em] mb-8 font-bold">Our Methodology</p>
            <div className="relative inline-block px-12 py-8 bg-[#001A33] border border-[#BF9024]/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#F1C40F]" />
                <p className="relative z-10 text-xl md:text-3xl text-[#F2F2F2] font-light max-w-4xl mx-auto leading-tight">
                    We <span className="text-[#F1C40F] font-semibold italic">simplify the details</span> and provide clear direction to guide you through your options.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;