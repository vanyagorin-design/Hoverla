import React from "react";
import MatchCard from "./MatchCard";

export default function Schedule() {
  const sample = [
    { date: "10 грудня 2025", time: "18:00", home: "VK Praha", away: "Sir Susa Perugia", venue: "O2 arena / Praha" },
    { date: "1 листопада 2025", time: "09:00", home: "USK Slavia Plzeň B", away: "Hoverla Plzeň", venue: "PedF ZČU, Plzeň" },
    { date: "1 листопада 2025", time: "14:00", home: "USK Slavia Plzeň B", away: "Hoverla Plzeň", venue: "PedF ZČU, Plzeň" },
  ];
  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl sm:text-3xl font-black">Найближчі матчі</h2>
        <a href="#full-schedule" className="text-sm hover:text-green-400 transition">Повний розклад →</a>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sample.map((m, i) => <MatchCard key={i} {...m} />)}
      </div>
    </section>
  );
}
