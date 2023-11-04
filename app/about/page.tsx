import Image from 'next/image';

import { Container } from '@/components/layout/container';
import Prose from '@/components/prose';

import columbiaUniversity from '/public/columbia-university.jpg';
import office from '/public/office.jpg';

const AboutPage = () => {
  return (
    <div>
      <div className="relative aspect-square w-screen sm:h-[60vh]">
        <Image
          src={office}
          alt=""
          className="-z-10 object-cover"
          fill
          priority
        />
        <Container className="flex h-full items-center">
          <h1 className="max-w-xl text-4xl capitalize text-white sm:text-5xl md:max-w-2xl lg:max-w-3xl xl:text-7xl">
            Who we are
          </h1>
        </Container>
      </div>
      <Container className="flex flex-col items-center gap-8 sm:mt-4 lg:mt-12 xl:mt-24 xl:flex-row xl:gap-12">
        <Prose className="mr-auto">
          <h2 className="mt-16 text-2xl font-medium capitalize sm:text-3xl lg:mt-0 xl:text-4xl">
            Brief History
          </h2>
          <p>
            We founded Specter Ross in 1970 after graduating Colombia Law School
            together. Rather than joining a large law firm, we started our own
            law practice because we both had an entrepreneurial spirit, and we
            wanted to work with business owners who shared our ambition and
            drive for success.
          </p>
        </Prose>
        <div className="relative aspect-video w-full">
          <Image
            src={columbiaUniversity}
            alt=""
            className="object-cover"
            fill
          />
        </div>
      </Container>
    </div>
  );
};
export default AboutPage;
