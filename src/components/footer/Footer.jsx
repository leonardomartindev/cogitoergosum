import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs md:text-sm">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-zinc-600">Desenvolvido por</span>
            <span className="text-zinc-400 font-medium">Leonardo Martin</span>
          </div>
          <div className="h-px w-12 md:h-4 md:w-px bg-zinc-800 hidden md:block"></div>
          <p className="text-zinc-600 italic text-center md:text-left">
            Conteúdo meramente ficcional
          </p>
        </div>
      </div>
    </footer>
  );
}

