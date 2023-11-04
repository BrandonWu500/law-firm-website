import CaseStudies from '@/components/case-studies';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import Team from '@/components/team';
import Testimonial from '@/components/testimonial';
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg';

const HomePage = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-24">
      <Hero />
      <Team />
      <LogoCloud />
      <CaseStudies />
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Mike and Harvey were an absolute pleasure to work with! They took care
        of all the legal stuff surrounding the release of our new product. We
        really appreciated how invested they were in our business. Highly
        recommend them!
      </Testimonial>
    </div>
  );
};
export default HomePage;
