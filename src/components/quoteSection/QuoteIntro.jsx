import React from "react";

export default function QuoteIntro() {
  return (
    <section className="relative py-12 md:py-16 bg-[#F7F4EB] text-[#0C0C0C] font-['Geist'] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        }}
      ></div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 md:w-12 bg-[#970000]"></span>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-[#970000]">
              Transição de Era
            </p>
            <span className="h-[1px] w-8 md:w-12 bg-[#970000] block md:hidden"></span>{" "}
            <span className="h-[1px] w-8 md:w-12 bg-[#970000] hidden md:block"></span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 text-[#0C0C0C]">
            Dos pilares às vozes que <br className="hidden md:block" />
            <span className="font-serif italic font-normal text-zinc-800">
              ecoam na eternidade.
            </span>
          </h2>

          <div className="w-full md:w-[1px] h-[1px] md:h-12 bg-[#0C0C0C]/20 my-2 md:my-4"></div>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-700 leading-relaxed font-medium">
            A estrutura sustenta, mas é o diálogo que constrói a alma. Depois de
            firmar os pés nos pilares, mergulhe na mente dos pensadores que
            moldaram nossa percepção sobre{" "}
            <span className="text-[#0C0C0C] font-bold underline decoration-[#970000]/30 underline-offset-4 decoration-2">
              verdade
            </span>
            ,{" "}
            <span className="text-[#0C0C0C] font-bold underline decoration-[#970000]/30 underline-offset-4 decoration-2">
              ética
            </span>{" "}
            e{" "}
            <span className="text-[#0C0C0C] font-bold underline decoration-[#970000]/30 underline-offset-4 decoration-2">
              interioridade
            </span>
            .
          </p>

          <div className="mt-6 opacity-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V21M3 12H21"
                stroke="#0C0C0C"
                strokeWidth="1"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
