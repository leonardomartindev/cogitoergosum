import React from "react";

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#0C0C0C] text-[#F7F4EB] font-['Geist'] overflow-hidden px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-0 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#F7F4EB] rounded-full blur-[120px] opacity-[0.03]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#F7F4EB] rounded-full blur-[100px] opacity-[0.02]"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#F7F4EB] rounded-full opacity-20 animate-[float_10s_ease-in-out_infinite] z-0"></div>
      <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-[#F7F4EB] rounded-full opacity-10 animate-[float_14s_ease-in-out_infinite_reverse] z-0"></div>

      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
          <div className="flex items-center gap-3 opacity-60">
            <span className="h-px w-8 sm:w-12 bg-[#F7F4EB]"></span>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em]">
              Sapere Aude
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight relative">
            <span className="absolute -left-6 md:-left-8 top-2 text-xs md:text-sm opacity-20 hidden md:block">
              01
            </span>
            <span className="italic font-serif opacity-70 mr-2">"</span>A
            jornada de mil quilômetros começa com um único passo.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
            Junte-se à ágora digital. Receba ensaios semanais e garanta seu
            lugar na próxima turma.
          </p>

          <form className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-0 w-full max-w-md border-b border-zinc-700 focus-within:border-[#F7F4EB] transition-colors duration-300">
            <input
              type="email"
              placeholder="Seu e-mail acadêmico"
              className="w-full bg-transparent py-3 sm:py-4 text-[#F7F4EB] placeholder-zinc-600 focus:outline-none text-base sm:text-lg"
              required
            />
            <button
              type="submit"
              className="group whitespace-nowrap text-[#F7F4EB] py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center sm:justify-start gap-2 hover:text-white sm:pl-4"
            >
              Inscrever-se
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>

          <p className="text-[10px] sm:text-xs text-zinc-600 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Junte-se a mais de 12.000 pensadores livres.
          </p>
        </div>

        <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2 py-8 sm:py-10 md:py-12 lg:py-12 pr-0 sm:pr-4 md:pr-6 group">
          <div className="absolute top-[-10%] right-[-5%] w-[120%] h-[120%] hidden md:flex items-center justify-center pointer-events-none z-0">
            <svg
              className="w-full h-full opacity-[0.08] animate-[spin_60s_linear_infinite]"
              viewBox="0 0 500 500"
              fill="none"
            >
              <circle
                cx="250"
                cy="250"
                r="248"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="10 10"
              />
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <rect x="249" y="20" width="1" height="50" fill="currentColor" />
              <rect x="249" y="430" width="1" height="50" fill="currentColor" />
              <rect x="20" y="249" width="50" height="1" fill="currentColor" />
              <rect x="430" y="249" width="50" height="1" fill="currentColor" />
            </svg>
          </div>

          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]">
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6 w-full h-full border border-[#F7F4EB]/30 rounded-tl-[100px] sm:rounded-tl-[120px] md:rounded-tl-[150px] rounded-tr-lg rounded-br-lg rounded-bl-lg z-0 transition-transform duration-700 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]"></div>

            <img
              src="/bustos.jpg"
              alt="Bustos de filósofos gregos"
              className="relative z-10 w-full aspect-[3/4] object-cover 
                         rounded-tl-[100px] sm:rounded-tl-[120px] md:rounded-tl-[150px] rounded-tr-sm rounded-br-sm rounded-bl-sm
                         grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
            />

            <div className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 z-20 hidden lg:flex items-center justify-center">
              <svg
                className="w-full h-full animate-[spin_10s_linear_infinite] opacity-80"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text
                  fill="#F7F4EB"
                  fontSize="11"
                  letterSpacing="2px"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath">
                    ESTOICISMO • LOGOS • ETHOS •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg sm:text-xl">🏛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
