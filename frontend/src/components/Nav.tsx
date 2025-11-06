import React from "react";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#schedule" className="hover:text-green-400 transition">Розклад</a>
          <a href="#news" className="hover:text-green-400 transition">Новини</a>
          <a href="#team" className="hover:text-green-400 transition">Команда</a>
          <a href="#contacts" className="hover:text-green-400 transition">Контакти</a>
        </div>
        <a href="#tickets" className="inline-flex items-center gap-2 rounded-2xl bg-green-500/90 hover:bg-green-400 text-black font-semibold px-4 py-2 transition">
          <span>Квитки</span>
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true"><path fill="currentColor" d="M5 12h12l-4-4 1.41-1.41L21.83 14l-7.42 7.41L13 20l4-4H5z"/></svg>
        </a>
      </div>
    </nav>
  );
}
