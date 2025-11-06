import React from "react";
import NewsCard from "./NewsCard";

export default function News() {
  const items = [
    { date: "30 жовтня 2025", title: "Перемога у Пльзені 3:1", excerpt: "Команда виборола важливі очки вдома у напруженому матчі…" },
    { date: "25 жовтня 2025", title: "Оновили сайт команди", excerpt: "Запустили новий дизайн із темною темою, швидшим завантаженням та розкладом…" },
    { date: "22 жовтня 2025", title: "Академія стартує", excerpt: "Набір у молодіжну секцію триває — запрошуємо на перше тренування…" },
  ];
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-black">Останні новини</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {items.map((n, i) => <NewsCard key={i} {...n} />)}
      </div>
    </section>
  );
}
