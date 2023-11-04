import { Container } from '@/components/layout/container';
import logoBrightPath from '@/images/clients/bright-path/logomark-dark.svg';
import logoFamilyFund from '@/images/clients/family-fund/logomark-dark.svg';
import logoGreenLife from '@/images/clients/green-life/logomark-dark.svg';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    href: '#',
    logo: logoBrightPath,
    client: 'Client',
    date: new Date().toISOString(),
    title: 'Heading',
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam nisl orci cras egestas eleifend tristique faucibus est blandit. Non magna leo ipsum tempus quam volutpat pretium.',
  },
  {
    href: '#',
    logo: logoFamilyFund,
    client: 'Client',
    date: new Date().toISOString(),
    title: 'Heading',
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam nisl orci cras egestas eleifend tristique faucibus est blandit. Non magna leo ipsum tempus quam volutpat pretium.',
  },
  {
    href: '#',
    logo: logoGreenLife,
    client: 'Client',
    date: new Date().toISOString(),
    title: 'Heading',
    description:
      'Lorem ipsum dolor sit amet consectetur. Diam nisl orci cras egestas eleifend tristique faucibus est blandit. Non magna leo ipsum tempus quam volutpat pretium.',
  },
];

const CaseStudies = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <h2 className="flex flex-col text-2xl font-medium sm:text-4xl xl:text-5xl">
          <span>Over 60 Years of</span> <span>Combined Experience</span>
        </h2>
        <p className="mt-6 max-w-2xl text-xl">
          We have handled legal matters for all types and sizes of businesses,
          ranging from small businesses to large corporations, so we know what
          it takes to ensure your business succeeds.
        </p>
      </Container>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="flex">
              <article className="relative flex w-full flex-col p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default CaseStudies;
