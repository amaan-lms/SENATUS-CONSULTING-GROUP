import React from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#001A33] py-24 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#BF9024]/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F1C40F]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
       
        {/* --- CONTACT GRID --- */}
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-[#F1C40F] text-xs font-bold uppercase tracking-[0.4em] mb-6">Contact Info</h3>
              <p className="text-[#F2F2F2]/80 text-xl font-light leading-relaxed">
                We are here to provide the <span className="text-white font-semibold">clarity and support</span> you need to move forward.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Phone size={20} />, label: "Direct Line", val: "(888) 934-5426" },
                { icon: <Mail size={20} />, label: "Email Inquiry", val: "admin@senatusgroup.com" },
                { icon: <MapPin size={20} />, label: "Headquarters", val: "600 1st Ave., Ste 102 - 2363 Seattle, WA, 98104" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 bg-[#002855] border border-[#BF9024]/20 text-[#F1C40F] group-hover:border-[#F1C40F] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#F2F2F2]/40 font-bold mb-1">{item.label}</p>
                    <p className="text-[#F2F2F2] font-medium group-hover:text-[#FFD966] transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 bg-[#002855]/30 border border-[#F2F2F2]/5 backdrop-blur-sm">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#FFD966] font-bold">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#001A33] border border-[#BF9024]/20 p-4 text-white/20 outline-none focus:border-[#F1C40F] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" 
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#FFD966] font-bold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#001A33] border border-[#BF9024]/20 p-4 text-white/20 outline-none focus:border-[#F1C40F] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" 
                  placeholder="john@company.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#FFD966] font-bold">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-[#001A33] border border-[#BF9024]/20 p-4 text-white/20 outline-none focus:border-[#F1C40F] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" 
                  placeholder="How can we help you protect your equity?"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full group flex items-center justify-center gap-3 p-5 bg-[#F1C40F] text-[#001A33] font-black uppercase tracking-widest text-xs hover:bg-[#FFD966] transition-all">
                  Send Inquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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