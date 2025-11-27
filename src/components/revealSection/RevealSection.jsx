import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function RevealSection() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const orbitRef = useRef(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsap.set(circleRef.current, {
          scale: 80,
          opacity: 1,
        });
        gsap.set(textRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        gsap.set(orbitRef.current, {
          opacity: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(
        orbitRef.current,
        {
          opacity: 0,
          scale: 2,
          duration: 0.5,
        },
        0
      );

      tl.to(
        circleRef.current,
        {
          scale: 150,
          duration: 2,
          ease: "power2.inOut",
        },
        0
      )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] font-['Geist']"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      ></div>

      <div
        ref={orbitRef}
        className="w-16 h-16 md:w-24 md:h-24 border border-[#F7F4EB]/20 rounded-full absolute z-0 pointer-events-none"
      ></div>

      <div
        ref={circleRef}
        className="w-4 h-4 md:w-8 md:h-8 rounded-full absolute z-10 pointer-events-none bg-[#F7F4EB] shadow-[0_0_40px_rgba(247,244,235,0.3)] scale-[80] md:scale-100"
      ></div>

      <div
        ref={textRef}
        className="relative z-20 text-center px-4 sm:px-6 md:px-8 flex flex-col items-center gap-3 md:gap-4"
      >
        <span className="h-px w-6 md:w-8 bg-black/20 mb-1 md:mb-2 block"></span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold text-[#0C0C0C] tracking-tighter leading-[0.9] px-2">
          Menos Informação.
          <br />
          <span className="font-serif italic font-light opacity-80 block mt-1 md:mt-2">
            Mais Sabedoria.
          </span>
        </h2>

        <p className="text-[10px] sm:text-xs md:text-sm text-zinc-500 uppercase tracking-[0.15em] md:tracking-[0.2em] mt-4 md:mt-6 max-w-xs mx-auto px-2">
          A clareza emerge do ruído
        </p>
      </div>
    </section>
  );
}
