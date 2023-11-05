import Image from 'next/image';
import Link from 'next/link';

import CtaSection from '@/components/cta-section';
import { Border } from '@/components/layout/border';
import { Container } from '@/components/layout/container';
import { PageIntro } from '@/components/page-intro';
import Time from '@/components/time';
import { Button } from '@/components/ui/button';

import imageHarveyRoss from '/public/harvey-ross.jpg';
import imageMikeSpecter from '/public/mike-specter.jpg';
import imagePenAndNotebook from '/public/pen-and-notebook.jpg';

const articles = [
  {
    href: '/blog/title-1',
    title: 'Title 1',
    date: new Date().toISOString(),
    author: {
      name: 'Harvey Ross',
      image: imageHarveyRoss,
      role: 'Founding Partner',
    },
    description:
      'Let’s explore the latest trends in web development, and regurgitate some predictions we read on Twitter for how they will shape the industry in the coming year.',
  },
  {
    href: '/blog/title-1',
    title: 'Title 2',
    date: new Date().toISOString(),
    author: {
      name: 'Mike Specter',
      image: imageMikeSpecter,
      role: 'Founding Partner',
    },
    description:
      'Let’s explore the latest trends in web development, and regurgitate some predictions we read on Twitter for how they will shape the industry in the coming year.',
  },
];

const BlogPage = () => {
  return (
    <>
      <PageIntro image={imagePenAndNotebook} title="Blog" />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <div key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <Time datetime={article.date} />
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden bg-neutral-100">
                            <Image
                              alt=""
                              {...article.author.image}
                              className="h-12 w-12 object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between text-sm text-neutral-950">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </div>
          ))}
        </div>
      </Container>

      <CtaSection />
    </>
  );
};
export default BlogPage;
