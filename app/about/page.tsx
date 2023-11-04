import Image from 'next/image';

import { Container } from '@/components/layout/container';

import { twMerge } from 'tailwind-merge';
import imageColumbiaUniversity from '/public/columbia-university.jpg';
import imageHarveyRoss from '/public/harvey-ross.jpg';
import imageMikeSpecter from '/public/mike-specter.jpg';
import imageOffice from '/public/office.jpg';

const articles = [
  {
    title: 'Brief History',
    imageUrl: imageColumbiaUniversity,
    body: 'We founded Specter Ross in 1970 after graduating Colombia Law School together. Rather than joining a large law firm, we started our own law practice because we both had an entrepreneurial spirit, and we wanted to work with business owners who shared our ambition and drive for success.',
    person: false,
  },
  {
    title: 'Mike Specter',
    imageUrl: imageMikeSpecter,
    body: 'Lorem ipsum dolor sit amet consectetur. Erat aliquam ut sed cursus amet. Sit cursus vitae diam ac non praesent ullamcorper sollicitudin. Sed amet sed non luctus ipsum placerat purus. Semper arcu tortor nibh eleifend lacus mauris in dolor. Id tellus massa commodo aliquam odio sagittis. Nibh faucibus etiam eros amet id vel metus est id. Accumsan facilisi orci lacus erat et egestas nulla.',
    person: true,
  },
  {
    title: 'Harvey Ross',
    imageUrl: imageHarveyRoss,
    body: 'Lorem ipsum dolor sit amet consectetur. Erat aliquam ut sed cursus amet. Sit cursus vitae diam ac non praesent ullamcorper sollicitudin. Sed amet sed non luctus ipsum placerat purus. Semper arcu tortor nibh eleifend lacus mauris in dolor. Id tellus massa commodo aliquam odio sagittis. Nibh faucibus etiam eros amet id vel metus est id. Accumsan facilisi orci lacus erat et egestas nulla.',
    person: true,
  },
];

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <div className="relative aspect-square w-screen sm:h-[60vh]">
        <Image
          src={imageOffice}
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

      <ul className="flex flex-col lg:hidden">
        {articles.map((article) => (
          <li key={article.title}>
            <Container className="flex flex-col items-center justify-center gap-6 sm:mt-4 ">
              <h2 className="order-1 mr-auto mt-16 text-2xl font-medium capitalize sm:text-3xl">
                {article.title}
              </h2>
              <div
                className={`relative aspect-video w-full
              ${!article.person ? 'order-3' : 'order-2'}
              `}
              >
                <Image
                  src={article.imageUrl}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <p className={!article.person ? 'order-2' : 'order-3'}>
                {article.body}
              </p>
            </Container>
          </li>
        ))}
      </ul>

      <ul className="hidden flex-col lg:flex lg:gap-12">
        {articles.map((article, index) => (
          <li key={article.title}>
            <Container
              className={twMerge(
                'mt-12 flex flex-row items-center justify-center gap-6 gap-x-12 xl:mt-24',
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
                <h2 className="mr-auto mt-0 text-2xl font-medium capitalize sm:text-3xl xl:text-4xl">
                  {article.title}
                </h2>
                <p>{article.body}</p>
              </div>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AboutPage;
