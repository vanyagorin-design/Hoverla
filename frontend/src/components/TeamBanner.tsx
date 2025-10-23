export default function TeamBanner() {
  return (
    <section className="w-full">
      <div className="w-full">
        <img
          src="/images/team.jpg"
          alt="Tým Hoverla Plzeň"
          className="w-full h-auto block"
          loading="eager"
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 py-4">
        <p className="text-lg md:text-xl font-medium">
          🏐 <strong>Hoverla Plzeň — volejbalový tým města Plzně</strong>
        </p>
      </div>
    </section>
  );
}
