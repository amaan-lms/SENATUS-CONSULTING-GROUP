import React from "react";
import logo from "../assets/logobg.png";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#001A33] text-[#F2F2F2] relative border-t border-[#BF9024]/30">
      {/* Subtle Inner Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,217,102,0.05)]" />

      <div className="max-w-7xl mx-auto px-6 pt-15 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={() => handleScrollTo("#home")}
              className="hover:scale-105 transition-transform duration-300 lg:pl-24 pl-22"
            >
              <img
                src={logo}
                alt="Senatus Consulting Group"
                className="h-30 w-auto"
              />
            </button>

            <p className="text-sm text-[#F2F2F2]/70 leading-relaxed max-w-sm">
           Honest guidance and real trust help our clients achieve a stronger financial position.
Built on clarity, respect, and support to empower confident control over the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD966] border-b border-[#BF9024]/20 pb-2 inline-block">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-4">
              {["home", "about", "purpose", "services", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(`#${item}`)}
                  className="
                    text-sm text-left text-[#F2F2F2]/60
                    hover:text-[#FFD966]
                    hover:translate-x-1
                    transition-all duration-300
                    flex items-center gap-2 group
                  "
                >
                  <span className="h-px w-0 group-hover:w-4 bg-[#F1C40F] transition-all" />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD966] border-b border-[#BF9024]/20 pb-2 inline-block">
              Connect With Us
            </h4>

            <div className="space-y-5">
              <a
                href="mailto:Admin@senatusgroup.com"
                className="group flex items-center gap-4 text-sm text-[#F2F2F2]/80 hover:text-[#FFD966] transition-colors"
              >
                <div className="p-2 bg-[#002855] border border-[#BF9024]/30 rounded-sm group-hover:border-[#FFD966]">
                  <Mail size={16} className="text-[#F1C40F]" />
                </div>
                admin@senatusgroup.com
              </a>

              <a
                href="tel:8889345426"
                className="group flex items-center gap-4 text-sm text-[#F2F2F2]/80 hover:text-[#FFD966] transition-colors"
              >
                <div className="p-2 bg-[#002855] border border-[#BF9024]/30 rounded-sm group-hover:border-[#FFD966]">
                  <Phone size={16} className="text-[#F1C40F]" />
                </div>
                (888) 934-5426
              </a>

              <div className="flex items-start gap-4 text-sm text-[#F2F2F2]/80">
                <div className="p-2 bg-[#002855] border border-[#BF9024]/30 rounded-sm">
                  <MapPin size={16} className="text-[#F1C40F]" />
                </div>

                <div className="flex flex-col gap-3">
                  <span>
                    600 1st Ave., Ste 102 - 2363 <br />
                    Seattle, WA, 98104
                  </span>

                  <a
                    href="https://instagram.com/senatusgroup"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#FFD966] hover:brightness-125 transition-all font-semibold uppercase text-[10px] tracking-widest"
                  >
                    <Instagram size={14} />
                    @senatusgroup
                    <ArrowUpRight size={12} className="opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F2F2F2]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#F2F2F2]/70">
            © {currentYear} Senatus Consulting Group
          </p>

          <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-[#BF9024]/0 via-[#BF9024]/40 to-[#BF9024]/0 hidden md:block" />

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#F1C40F]/70 font-medium">
            Clarity • Respect • Support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
