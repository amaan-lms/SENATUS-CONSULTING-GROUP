import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoleft from "../assets/logobgleft.png";
import logoright from "../assets/logobgright.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Purpose", href: "#purpose" },
  { name: "Services", href: "#services" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-transform duration-300 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav
        className="
          bg-[#002855]/95 backdrop-blur-md
          border-b border-[#BF9024]/30
          shadow-[inset_0px_1px_1px_rgba(255,217,102,0.1)]
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleScrollTo("#home")}
            className="flex items-center hover:scale-105 transition"
          >
            <img
              src={logoleft}
              alt="Senatus Consulting Group"
              className="h-12 w-auto"
            />
            <img
              src={logoright}
              alt="Senatus Consulting Group"
              className="h-7 w-auto pl-1"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="
                    relative text-[#F2F2F2] text-sm font-bold uppercase tracking-[0.1em]
                    hover:text-[#FFD966] transition
                    after:absolute after:left-0 after:-bottom-2
                    after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-[#FFD966] after:via-[#F1C40F] after:to-[#BF9024]
                    hover:after:w-full after:transition-all
                  "
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("#contact")}
              className="
                ml-4 px-6 py-2
                bg-gradient-to-b from-[#FFD966] via-[#F1C40F] to-[#BF9024]
                text-[#002855] font-bold text-xs uppercase
                rounded-sm shadow-lg
                hover:brightness-110 transition-all
              "
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#FFD966]"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden absolute w-full bg-[#001A33]
            border-b border-[#BF9024]/50
            transition-all duration-300 ease-in-out overflow-hidden
            ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col px-8 py-10 gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className="
                  text-[#F2F2F2] text-lg font-semibold uppercase tracking-widest
                  border-l-4 border-transparent hover:border-[#F1C40F] pl-4 text-left
                "
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleScrollTo("#contact")}
              className="mt-4 text-center py-4 bg-[#F1C40F] text-[#001A33] font-bold uppercase"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
