import React from "react";

type Props = {
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
};

export default function MatchCard({ date, time, home, away, venue }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 sm:p-5 bg-white/5 hover:bg-white/[0.08] transition">
      <div className="text-xs uppercase tracking-widest text-white/60">{date}</div>
      <div className="mt-1 text-sm text-white/80">{time} · {venue}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold text-lg">{home}</div>
        <div className="text-white/60">vs</div>
        <div className="font-bold text-lg">{away}</div>
      </div>
      <div className="mt-4 flex gap-3">
        <a href="#tickets" className="px-3 py-2 rounded-xl bg-green-500/90 hover:bg-green-400 text-black text-sm font-semibold">Квитки</a>
        <a href="#details" className="px-3 py-2 rounded-xl border border-white/15 hover:border-white/30 text-sm font-semibold">Деталі</a>
      </div>
    </div>
  );
}
