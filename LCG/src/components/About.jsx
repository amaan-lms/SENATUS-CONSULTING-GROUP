import React from "react";
import { Users, ShieldCheck, Zap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#022342] py-20 md:py-24 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F1C40F_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
        <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-[#002855] blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT — THE IMAGE COMPOSITION */}
        <div className="relative group animate-fade-in">
          {/* Decorative Gold Frame behind the image */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#F1C40F] z-0 opacity-50 group-hover:scale-110 transition-transform duration-500" />
          
          <div className="relative z-10 rounded-sm overflow-hidden border border-[#BF9024]/30 shadow-2xl">
            <div className="absolute inset-0 bg-[#002855]/20 group-hover:bg-transparent transition-colors duration-700" />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
              alt="Professional Consultation"
              className="w-full h-[500px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Floating Metric Card - Interactive */}
          <div className="absolute -bottom-8 -right-8 md:right-4 bg-[#002855] border border-[#F1C40F]/30 p-6 shadow-[inset_0_1px_1px_rgba(255,217,102,0.1),10px_10px_30px_rgba(0,0,0,0.5)] z-20 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#001A33] rounded-sm">
                <ShieldCheck className="text-[#F1C40F]" size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F2F2F2]/50 font-bold">Guaranteed</p>
                <p className="text-lg font-bold text-[#FFD966]">Equity Protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFD966] flex items-center gap-3">
              <div className="h-px w-8 bg-[#F1C40F]" />
              About Senatus
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#FFFFFF] leading-tight tracking-tighter">
              Built on Trust. <br />
              <span className="bg-gradient-to-r from-[#FFD966] via-[#F1C40F] to-[#BF9024] bg-clip-text text-transparent">
                Driven by Clarity.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-[#F2F2F2]/80 leading-relaxed font-light">
            <p>
              Senatus Consulting Group is a premier business consulting firm 
              dedicated to helping individuals and organizations move forward 
              with absolute confidence. We believe trust is earned through 
              <span className="text-[#FFFFFF] font-semibold"> honesty and respect</span> — 
              never through pressure.
            </p>
            
            <p className="text-base text-[#F2F2F2]/60 border-l border-[#BF9024]/30 pl-6 italic">
              Our role is to simplify the details, provide clear direction, and guide people through their options to build trust and protect their equity.
            </p>
          </div>

          {/* Interactive Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {[
              { label: "Clarity", icon: <Zap size={16}/> },
              { label: "Respect", icon: <Users size={16}/> },
              { label: "Support", icon: <ShieldCheck size={16}/> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#002885]/40 border border-[#BF9024]/10 rounded-sm hover:border-[#F1C40F]/50 transition-all group">
                <div className="text-[#F1C40F] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F2F2F2]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;