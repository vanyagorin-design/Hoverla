interface Props {
  url: string;
  minHeight?: number;
}
export default function LeagueWidget({ url, minHeight = 2200 }: Props) {
  return (
    <section className="container mx-auto px-4 md:px-8 pb-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Rozpis a tabulka — P-M-1</h2>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-black/10">
        <iframe
          src={url}
          title="CVF — Rozpis a tabulka"
          style={{ width: '100%', minHeight, border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-sm opacity-70 mt-2">Zdroj dat: cvf.cz</p>
    </section>
  );
}
