import React from "react";

const STATS = [
  {
    value: 30,
    suffix: "+",
    description: "Tópicos de Estudo: Filosofia, História, arte...",
  },
  {
    value: 98,
    suffix: "%",
    description: "Membros Ativos na Comunidade",
  },
  {
    value: 200,
    suffix: "+",
    description: "Horas de Conteúdo Gravado.",
  },
];

export default function CaseSection() {
  return (
    <section className="case-section w-screen min-h-[400px] md:h-[400px] bg-[#F7F4EB] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 py-12 md:py-16 px-4 md:px-6 lg:px-8 text-[#31110f] font-['Geist']">
      {STATS.map(({ value, suffix, description }) => (
        <div
          key={`${value}${suffix}`}
          className="flex flex-col gap-3 md:gap-4 items-center md:items-start text-center md:text-left"
        >
          <h1 className="flex items-baseline gap-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium">
            <span className="case-number" data-target={value}>
              0
            </span>
            {suffix && (
              <span className="case-suffix text-3xl sm:text-4xl md:text-5xl font-medium">
                {suffix}
              </span>
            )}
          </h1>
          <p className="case-description text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs md:max-w-none">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
}
