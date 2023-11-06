import Image from 'next/image';
import Link from 'next/link';

import CtaSection from '@/components/cta-section';
import { Border } from '@/components/layout/border';
import { Container } from '@/components/layout/container';
import { PageIntro } from '@/components/page-intro';
import Prose from '@/components/prose';
import Time from '@/components/time';
import { Button } from '@/components/ui/button';
import { getPosts } from '@/lib/wordpress';
import { Post } from '@/types';

import imageMikeSpecter from '/public/mike-specter.jpg';
import imagePenAndNotebook from '/public/pen-and-notebook.jpg';

export const revalidate = 60;

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <PageIntro image={imagePenAndNotebook} title="Blog" />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {posts.map((post: Post) => (
            <div key={post.uri}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={post.uri}>{post.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <Time datetime={post.date} />
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden bg-neutral-100">
                            <Image
                              alt=""
                              src={imageMikeSpecter}
                              className="h-12 w-12 object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between text-sm text-neutral-950">
                            <div className="font-semibold">
                              {post.author.node.name}
                            </div>
                            <div>{post.author.node.description}</div>
                          </div>
                        </dd>
                      </dl>

                      <Prose
                        html={post.excerpt}
                        className="mt-6 max-w-2xl text-base text-neutral-600"
                      />
                      <Button
                        href={post.uri}
                        aria-label={`Read more: ${post.title}`}
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
