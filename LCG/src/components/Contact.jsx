import React from "react";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#001A33] py-24 overflow-hidden">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Topographic Lines Effect (Subtle) */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 50 50, 150 50, 200 100' stroke='%23F1C40F' fill='none' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '400px 400px' }} />
        
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#BF9024]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#002855] blur-[130px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-1">
          
          {/* LEFT: THE CONTACT VAULT (Info) */}
          <div className="lg:w-1/3 bg-[#002855]/60 backdrop-blur-xl border border-[#F1C40F]/20 p-10 md:p-16 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#F1C40F]/30 mb-8">
                <div className="w-2 h-2 bg-[#F1C40F] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD966]">Inquiry Terminal</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-8">
                Secure Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD966] to-[#BF9024]">Position.</span>
              </h2>
              
              <p className="text-[#F2F2F2]/50 text-sm leading-relaxed mb-12 uppercase tracking-widest">
                Our advisors are ready to simplify your path and protect your equity.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Phone size={18} />, label: "Direct", val: "(888) 934-5426" },
                { icon: <Mail size={18} />, label: "Email", val: "admin@senatusgroup.com" },
                { icon: <Globe size={18} />, label: "HQ", val: "600 1st Ave., Ste 102 - 2363 Seattle, WA, 98104" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-5 cursor-pointer">
                  <div className="text-[#F1C40F] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#F1C40F]/50 font-bold">{item.label}</p>
                    <p className="text-sm text-[#F2F2F2] font-semibold group-hover:text-[#F1C40F] transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE FORM INTERFACE */}
          <div className="lg:w-2/3 bg-[#001A33] border border-[#F2F2F2]/5 p-10 md:p-16 relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <MessageSquare size={120} className="text-[#F1C40F]" />
            </div>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              
              {/* Floating Label Style Inputs */}
              <div className="group relative border-b border-[#F2F2F2]/10 focus-within:border-[#F1C40F] transition-all pb-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#F1C40F]/60 mb-2 font-bold">Full Identity</label>
                <input 
                  type="text" 
                  placeholder="e.g. Alexander Hamilton"
                  className="w-full bg-transparent text-white placeholder:text-[#F2F2F2]/20 outline-none py-2 text-lg"
                />
              </div>

              <div className="group relative border-b border-[#F2F2F2]/10 focus-within:border-[#F1C40F] transition-all pb-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#F1C40F]/60 mb-2 font-bold">Digital Address</label>
                <input 
                  type="email" 
                  placeholder="email@company.com"
                  className="w-full bg-transparent text-white placeholder:text-[#F2F2F2]/20 outline-none py-2 text-lg"
                />
              </div>

              <div className="md:col-span-2 group relative border-b border-[#F2F2F2]/10 focus-within:border-[#F1C40F] transition-all pb-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#F1C40F]/60 mb-2 font-bold">Subject of Discussion</label>
                <textarea 
                  rows="3" 
                  placeholder="Briefly describe your current financial status or objectives..."
                  className="w-full bg-transparent text-white placeholder:text-[#F2F2F2]/20 outline-none py-2 text-lg resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                <p className="text-[11px] text-[#F2F2F2]/30 max-w-xs leading-relaxed italic">
                  * By submitting, you agree to a confidential consultation focused on clarity and respect.
                </p>
                
                <button className="group relative w-full md:w-auto px-12 py-5 bg-[#F1C40F] text-[#001A33] font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:pr-16 active:scale-95">
                  <span className="relative z-10 flex items-center gap-3">
                    Transmit Inquiry <Send size={14} />
                  </span>
                  <div className="absolute right-0 top-0 bottom-0 w-0 bg-[#BF9024] group-hover:w-12 transition-all flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>

            </form>
          </div>

        </div>

        

      </div>
    </section>
  );
};

export default Contact;