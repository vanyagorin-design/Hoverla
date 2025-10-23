import TeamBanner from '@/components/TeamBanner';
import LeagueWidget from '@/components/LeagueWidget';

export default function HomePage() {
  return (
    <main>
      <TeamBanner />
      <LeagueWidget url="https://www.cvf.cz/souteze/soutez/?soutez=P-M-1" />
    </main>
  );
}
