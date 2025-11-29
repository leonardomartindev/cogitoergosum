import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(".title-split", { type: "words, chars" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-video",
        { scale: 1.2, filter: "brightness(0)" },
        {
          scale: 1,
          filter: "brightness(1)",
          duration: 2.5,
          ease: "power2.inOut",
        }
      )
        .fromTo(
          ".corner-frame",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.5, stagger: 0.1 },
          0.5
        )
        .from(
          split.chars,
          {
            y: 100,
            opacity: 0,
            filter: "blur(20px)",
            stagger: { amount: 0.8, from: "center" },
            duration: 1.5,
          },
          "-=1.8"
        )
        .from(
          ".hero-line",
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=1"
        )
        .to(
          ".quill",
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1,
            startAt: { rotate: 15, scale: 0.8 },
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .to(
          ".cta-button",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            startAt: { y: 20 },
          },
          "-=0.6"
        );

      gsap.fromTo(
        ".scroll-indicator",
        { y: 0, opacity: 0.4 },
        {
          y: 10,
          opacity: 1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );

      const handleMouseMove = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".parallax-target", { x: xPos, y: yPos, duration: 1 });
        gsap.to(".parallax-target-deep", {
          x: xPos * 1.5,
          y: yPos * 1.5,
          duration: 1,
        });
        gsap.to(".hero-video", {
          x: -xPos * 0.5,
          y: -yPos * 0.5,
          duration: 1.5,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        split.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black font-['Geist']"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/50 to-black/90 z-10" />

      <div className="absolute inset-0 z-20 pointer-events-none p-6 sm:p-10 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="corner-frame w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-white/40" />
          <div className="corner-frame w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-white/40" />
        </div>
        <div className="flex justify-between items-end">
          <div className="corner-frame w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-white/40" />

          <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          </div>

          <div className="corner-frame w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-white/40" />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 md:px-6 perspective-1000">
        <div className="parallax-target flex flex-col items-center">
          <h1 className="title-split font-['Playfair'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center uppercase leading-tight drop-shadow-2xl">
            Cogito, <br className="hidden sm:block" /> ergo sum
          </h1>
        </div>

        <div className="hero-line w-0.5 mt-6 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-white/80 h-[100px] sm:h-[120px] md:h-[220px]" />

        <div className="quill parallax-target-deep opacity-0 origin-center">
          <img
            src="/quill.svg"
            alt="Hero"
            className="w-12 sm:w-16 md:w-20 drop-shadow-lg"
          />
        </div>

        <div className="mt-8 sm:mt-10 overflow-hidden">
          <button className="cta-button opacity-0 group relative border px-6 py-3 rounded-md uppercase text-lg font-['Geist'] text-white cursor-pointer overflow-hidden transition-all duration-300 hover:tracking-widest hover:border-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="pointer-events-none absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-medium">
              iniciar jornada
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
