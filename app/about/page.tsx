import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Container } from '@/components/layout/container';

import CtaSection from '@/components/cta-section';
import { PageIntro } from '@/components/page-intro';

import imageColumbiaUniversity from '/public/columbia-university.jpg';
import imageHarveyRoss from '/public/harvey-ross.jpg';
import imageMikeSpecter from '/public/mike-specter.jpg';
import imageOffice from '/public/office.jpg';

const articles = [
  {
    title: 'Brief History',
    imageUrl: imageColumbiaUniversity,
    body: 'We founded Specter Ross in 1970 after graduating Colombia Law School together. Rather than joining a large law firm, we started our own law practice because we both had an entrepreneurial spirit, and we wanted to work with business owners who shared our ambition and drive for success.',
  },
  {
    title: 'Mike Specter',
    imageUrl: imageMikeSpecter,
    body: 'Lorem ipsum dolor sit amet consectetur. Erat aliquam ut sed cursus amet. Sit cursus vitae diam ac non praesent ullamcorper sollicitudin. Sed amet sed non luctus ipsum placerat purus. Semper arcu tortor nibh eleifend lacus mauris in dolor. Id tellus massa commodo aliquam odio sagittis. Nibh faucibus etiam eros amet id vel metus est id. Accumsan facilisi orci lacus erat et egestas nulla.',
  },
  {
    title: 'Harvey Ross',
    imageUrl: imageHarveyRoss,
    body: 'Lorem ipsum dolor sit amet consectetur. Erat aliquam ut sed cursus amet. Sit cursus vitae diam ac non praesent ullamcorper sollicitudin. Sed amet sed non luctus ipsum placerat purus. Semper arcu tortor nibh eleifend lacus mauris in dolor. Id tellus massa commodo aliquam odio sagittis. Nibh faucibus etiam eros amet id vel metus est id. Accumsan facilisi orci lacus erat et egestas nulla.',
  },
];

const AboutPage = () => {
  return (
    <div className="space-y-24 sm:space-y-32 lg:space-y-40">
      <PageIntro image={imageOffice} title="Who We Are" />

      <ul className="flex flex-col gap-24 sm:gap-32 lg:hidden">
        {articles.map((article) => (
          <li key={article.title}>
            <Container className="flex flex-col items-center justify-center gap-6">
              <h2 className="mr-auto text-2xl font-medium capitalize sm:text-3xl">
                {article.title}
              </h2>
              <div className="relative aspect-video w-full">
                <Image
                  src={article.imageUrl}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <p>{article.body}</p>
            </Container>
          </li>
        ))}
      </ul>

      <ul className="hidden flex-col lg:flex lg:gap-40">
        {articles.map((article, index) => (
          <li key={article.title}>
            <Container
              className={twMerge(
                'flex flex-row items-center justify-center gap-6 gap-x-12',
                index % 2 === 1 && 'flex-row-reverse'
              )}
            >
              <div className="relative row-span-2 aspect-video w-full flex-1">
                <Image
                  src={article.imageUrl}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-1 flex-col gap-6">
                <h2 className="mr-auto text-2xl font-medium capitalize sm:text-3xl xl:text-4xl">
                  {article.title}
                </h2>
                <p>{article.body}</p>
              </div>
            </Container>
          </li>
        ))}
      </ul>

      <div>
        <CtaSection />
      </div>
    </div>
  );
};
export default AboutPage;
