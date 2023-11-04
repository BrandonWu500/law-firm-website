import { Offices } from '@/components/contact/offices';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <Container className="mt-24 px-0 sm:mt-32 lg:mt-40">
      <div className="w-full bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium capitalize text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your business
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact-us" invert>
                Let’s Talk
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our Offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CtaSection;
