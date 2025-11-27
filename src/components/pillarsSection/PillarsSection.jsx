import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PillarsSection() {
  const sectionRef = useRef(null);

  const PILLARS = [
    {
      id: "01",
      title: "A Leitura Clássica",
      description:
        "Vamos direto à fonte: Platão, Sêneca, Nietzsche. Sem intermediários.",
    },
    {
      id: "02",
      title: "O Debate Socrático",
      description:
        "Aprenda a arte de fazer perguntas. Onde a discordância é uma ferramenta, não um conflito.",
    },
    {
      id: "03",
      title: "A Escrita como Ferramenta",
      description:
        "Organize suas ideias e articule seu pensamento com clareza inegociável.",
    },
  ];

  useGSAP(
    () => {
      const checkMobile = () => window.innerWidth < 768;
      const isMobile = checkMobile();

      if (isMobile) {
        gsap.from(".pillar-item", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      } else {
        gsap.set(".pillar-item", { autoAlpha: 0, x: -20 });
        gsap.set(".connector-line", { width: 0 });
        gsap.set(".main-line", { height: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(".main-line", {
          height: "100%",
          duration: 1,
          ease: "none",
        });

        tl.to(
          ".pillar-item",
          {
            autoAlpha: 1,
            x: 0,
            stagger: 0.3,
            duration: 0.5,
          },
          0.2
        );

        tl.to(
          ".connector-line",
          {
            width: "3rem",
            duration: 0.4,
            stagger: 0.3,
          },
          0.2
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen md:h-screen bg-[#0C0C0C] font-['Geist'] text-[#F7F4EB] flex flex-col md:flex-row overflow-hidden"
    >
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0C0C0C_100%)] opacity-40 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#970000]/20 via-black/40 to-[#0C0C0C] z-10 mix-blend-multiply"></div>

        <img
          src="/pillars.png"
          alt="Estátuas clássicas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 min-h-[50vh] md:h-full flex items-center px-6 md:pl-12 md:pr-6 lg:pr-12 py-12 md:py-0 relative">
        <div className="hidden md:block absolute left-12 top-[15%] h-[70%] w-px bg-zinc-900">
          <div className="main-line w-full h-0 bg-[#F7F4EB]"></div>
        </div>

        <div className="flex flex-col justify-center h-full gap-12 md:gap-16 lg:gap-24 w-full max-w-xl">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-item flex items-start gap-4 md:gap-6 relative group"
            >
              <div className="hidden md:flex absolute -left-[3rem] top-5 items-center">
                <div className="w-2 h-2 rounded-full bg-[#0C0C0C] border border-[#F7F4EB] absolute -left-[3.5px] z-20"></div>

                <div className="connector-line h-px w-0 bg-[#F7F4EB]"></div>
              </div>

              <span
                className="text-5xl sm:text-6xl md:text-7xl font-bold select-none leading-[0.8] tracking-tighter"
                style={{
                  WebkitTextStroke: "1px rgba(247, 244, 235, 0.2)",
                  color: "transparent",
                }}
              >
                {pillar.id}
              </span>

              <div className="flex flex-col gap-2 pt-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#F7F4EB]">
                  {pillar.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-500 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
