import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(34,197,94,.25),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(234,179,8,.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-yellow-400/90 text-xs font-bold">Офіційний сайт клубу</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black leading-tight">
              Волейбол у <span className="text-green-400">Плзні</span>. Сила команди — у єдності.
            </h1>
            <p className="mt-5 text-white/80 max-w-prose">
              Ласкаво просимо на оновлений сайт Hoverla Plzeň. Тут ви знайдете останні новини, розклад матчів, таблиці та фото.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#schedule" className="rounded-2xl bg-green-500/90 hover:bg-green-400 text-black font-semibold px-5 py-3 transition">Найближчі матчі</a>
              <a href="#news" className="rounded-2xl border border-white/15 hover:border-white/30 px-5 py-3 font-semibold transition">Читати новини</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-zinc-900 shadow-2xl overflow-hidden">
              <div className="w-full h-full grid place-items-center">
                <div className="text-center p-10">
                  <p className="text-6xl">🏐</p>
                  <p className="mt-3 text-lg font-semibold">Hoverla Plzeň</p>
                  <p className="text-white/60">Фото команди / відео хайлайтів</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2 font-bold shadow-xl">
              Сезон 2025/26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
