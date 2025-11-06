import React from "react";

type Props = { title: string; date: string; excerpt: string };

export default function NewsCard({ title, date, excerpt }: Props) {
  return (
    <article className="rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/[0.08] transition">
      <div className="text-xs uppercase tracking-widest text-white/60">{date}</div>
      <h3 className="mt-2 font-bold text-lg">{title}</h3>
      <p className="mt-2 text-white/75 text-sm leading-relaxed">{excerpt}</p>
      <a href="#" className="mt-3 inline-block text-sm hover:text-green-400 transition">Читати далі →</a>
    </article>
  );
}
