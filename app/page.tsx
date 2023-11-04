import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import Team from '@/components/team';

const HomePage = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-24">
      <Hero />
      <Team />
      <LogoCloud />
    </div>
  );
};
export default HomePage;
