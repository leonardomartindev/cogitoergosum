import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_ITEMS = [
  { label: "Início", isActive: true },
  { label: "Pilares" },
  { label: "Pensadores" },
  { label: "Contato", icon: "🌐" },
];

export default function Header() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 pb-4"
    >
      <ul className="hidden md:flex items-center gap-6 rounded-full bg-neutral-900/35 px-6 py-2 backdrop-blur-2xl border-y border-white/25 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)] pointer-events-auto">
        {NAV_ITEMS.map(({ label, isActive, icon }) => (
          <li
            key={label}
            className={`font-['Geist'] text-sm tracking-wide uppercase transition-colors duration-200 cursor-pointer ${
              isActive
                ? "bg-white/15 text-white px-4 py-1.5 rounded-full shadow-[0_0px_20px_rgba(255,255,255,0.18)]"
                : "text-white/80 hover:text-white px-4 py-1.5 rounded-full"
            }`}
          >
            <span className="flex items-center gap-2">
              {icon && <span className="text-base leading-none">{icon}</span>}
              {label}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 w-12 h-12 flex flex-col justify-center items-center gap-1.5 rounded-full bg-neutral-900/35 backdrop-blur-2xl border border-white/25 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)] transition-all duration-300 hover:bg-neutral-900/50"
        aria-label="Toggle menu"
      >
        <span
          className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          <div
            ref={menuRef}
            className="md:hidden fixed top-20 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-neutral-900/90 backdrop-blur-2xl border border-white/25 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)] overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {NAV_ITEMS.map(({ label, isActive, icon }, index) => (
                <li key={label}>
                  <button
                    onClick={closeMenu}
                    className={`w-full font-['Geist'] text-sm tracking-wide uppercase transition-all duration-200 cursor-pointer text-left px-4 py-3 rounded-lg ${
                      isActive
                        ? "bg-white/15 text-white shadow-[0_0px_20px_rgba(255,255,255,0.18)]"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {icon && (
                        <span className="text-base leading-none">{icon}</span>
                      )}
                      {label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
