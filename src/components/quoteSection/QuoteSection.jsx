import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    imageSrc: "plato.jpeg",
    imageAlt: "Platão em retrato pintado",
    title: "Platão",
    quoteIconSrc: "/quote-icon.svg",
    quoteText: "Onde não há diálogo, não há verdade.",
    highlightText:
      "Mergulhe na Teoria das Formas e explore as fundações do pensamento ocidental. Discutimos 'A República' e 'O Banquete'.",
  },
  {
    imageSrc: "school_Atenas.jpg",
    imageAlt: "A Escola de Atenas de Rafael",
    title: "Aristóteles",
    quoteIconSrc: "/quote-icon.svg",
    quoteText: "A excelência é um hábito, não um ato.",
    highlightText:
      "Da Lógica à Ética a Nicômaco. Entenda a 'justa medida' e como a virtude se constrói na prática diária.",
  },
  {
    imageSrc: "Saint_Augustine.jpg",
    imageAlt: "Santo Agostinho escrevendo",
    title: "Santo Agostinho",
    quoteIconSrc: "/quote-icon.svg",
    quoteText:
      "Fizeste-nos para Ti, e nosso coração está inquieto enquanto não repousar em Ti.",
    highlightText:
      "O autor das Confissões. Agostinho nos convida a uma jornada interior, explorando a natureza do tempo, da memória, do mal e da 'Cidade de Deus' versus a 'Cidade dos Homens'.",
  },
];

export default function QuoteSection() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(
    () => {
      const stage = stageRef.current;
      if (!stage) return;

      const isMobile = window.innerWidth < 768;
      const entries = Array.from(stage.querySelectorAll(".quote-entry"));
      if (!entries.length) return;

      if (isMobile) {
        entries.forEach((entry) => {
          if (!(entry instanceof HTMLElement)) return;

          const image = entry.querySelector(".quote-image");
          const title = entry.querySelector(".quote-title");
          const line = entry.querySelector(".quote-line");
          const text = entry.querySelector(".quote-text");
          const icon = entry.querySelector(".quote-icon");
          const bg = entry.querySelector(".quote-highlight-bg");
          const card = entry.querySelector(".quote-highlight-card");

          if (!image || !title || !line || !text || !icon || !bg || !card)
            return;

          gsap.set(entry, {
            position: "relative",
            opacity: 1,
            y: 0,
          });

          gsap.set(image, { width: "100%" });

          gsap.fromTo(
            entry,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          gsap.fromTo(
            [title, line, text, icon, bg, card],
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
        return;
      }

      entries.forEach((entry, index) => {
        if (!(entry instanceof HTMLElement)) return;

        const isFirst = index === 0;

        const image = entry.querySelector(".quote-image");
        const title = entry.querySelector(".quote-title");
        const line = entry.querySelector(".quote-line");
        const text = entry.querySelector(".quote-text");
        const icon = entry.querySelector(".quote-icon");
        const bg = entry.querySelector(".quote-highlight-bg");
        const card = entry.querySelector(".quote-highlight-card");

        if (!image || !title || !line || !text || !icon || !bg || !card) return;

        gsap.set(entry, {
          autoAlpha: isFirst ? 1 : 0,
          zIndex: entries.length - index,
        });

        const imageWidth = isFirst ? "50vw" : 0;
        gsap.set(image, {
          autoAlpha: isFirst ? 1 : 0,
          width: imageWidth,
        });

        gsap.set(title, {
          autoAlpha: isFirst ? 1 : 0,
          y: isFirst ? 0 : -28,
        });

        gsap.set(line, { width: isFirst ? "65%" : 0 });

        gsap.set(text, {
          autoAlpha: isFirst ? 1 : 0,
          y: isFirst ? 0 : 28,
        });

        gsap.set(icon, {
          autoAlpha: isFirst ? 1 : 0,
          y: isFirst ? 0 : 24,
          rotation: isFirst ? 0 : -6,
        });

        gsap.set(bg, {
          autoAlpha: isFirst ? 1 : 0,
          x: isFirst ? 12 : -28,
          y: isFirst ? 12 : 28,
        });

        gsap.set(card, {
          autoAlpha: isFirst ? 1 : 0,
          y: isFirst ? 0 : 32,
        });
      });

      const master = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${entries.length * 1500}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      entries.forEach((entry, index) => {
        if (!(entry instanceof HTMLElement)) return;

        const image = entry.querySelector(".quote-image");
        const title = entry.querySelector(".quote-title");
        const line = entry.querySelector(".quote-line");
        const text = entry.querySelector(".quote-text");
        const icon = entry.querySelector(".quote-icon");
        const bg = entry.querySelector(".quote-highlight-bg");
        const card = entry.querySelector(".quote-highlight-card");

        if (!image || !title || !line || !text || !icon || !bg || !card) return;

        if (index === 0) {
          master.add(gsap.to({}, { duration: 1 }));
        } else {
          const entryTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          entryTimeline
            .to(entry, { autoAlpha: 1, duration: 0.8 })
            .to(
              image,
              {
                autoAlpha: 1,
                width: "50vw",
                duration: 1.6,
                ease: "power3.out",
              },
              "-=0.4"
            )
            .to(
              title,
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.1,
              },
              "-=0.8"
            )
            .to(
              line,
              {
                width: "65%",
                duration: 1.3,
              },
              "-=0.7"
            )
            .to(
              text,
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.1,
              },
              "-=0.6"
            )
            .to(
              icon,
              {
                autoAlpha: 1,
                y: 0,
                rotation: 0,
                duration: 0.9,
                ease: "power3.out",
              },
              "-=0.7"
            )
            .to(
              bg,
              {
                autoAlpha: 1,
                x: 12,
                y: 12,
                duration: 1.1,
              },
              "-=0.5"
            )
            .to(
              card,
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.8,
              },
              "-=0.6"
            )
            .to({}, { duration: 0.6 });

          master.add(entryTimeline, ">");
        }

        if (index < entries.length - 1) {
          master.to(
            entry,
            {
              autoAlpha: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "+=0.5"
          );

          master.add(() => {});
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black font-['Geist'] text-white"
    >
      <div
        ref={stageRef}
        className="quote-stage relative min-h-screen md:h-screen overflow-hidden border-t border-white/10"
      >
        {quotes.map((quote) => (
          <article
            key={quote.title}
            className="quote-entry relative md:absolute md:inset-0 flex flex-col md:flex-row w-full min-h-screen md:h-full"
          >
            <div className="quote-section w-full md:flex-1 h-[40vh] md:h-full overflow-hidden">
              <img
                src={quote.imageSrc}
                alt={quote.imageAlt}
                className="quote-image w-full md:w-0 h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center w-full md:w-[50vw] h-auto md:h-full px-6 md:px-12 py-8 md:py-0">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex gap-3 md:gap-4 items-center flex-wrap">
                  <h1 className="quote-title text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap">
                    {quote.title}
                  </h1>
                  <div className="quote-line w-0 h-1 md:h-2 bg-white"></div>
                </div>

                <div className="flex gap-3 md:gap-4 items-start">
                  <img
                    src={quote.quoteIconSrc}
                    className="quote-icon w-10 md:w-16 h-auto"
                    alt="ícone de aspas"
                  />
                  <p className="quote-text font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 italic">
                    {quote.quoteText}
                  </p>
                </div>

                <div className="relative w-full md:w-[90%] h-auto md:h-56 min-h-[200px] md:min-h-0">
                  <div className="quote-highlight-bg bg-[#970000] w-full h-full absolute z-10 top-0 left-0"></div>
                  <div className="quote-highlight-card bg-white w-full h-full absolute z-20 top-0 left-0 flex items-center justify-center px-4 md:px-6 py-6 md:py-0">
                    <p className="text-sm sm:text-base md:text-lg font-medium text-black leading-relaxed">
                      {quote.highlightText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
