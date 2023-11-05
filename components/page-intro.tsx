import { Container } from '@/components/layout/container';
import { twMerge } from 'tailwind-merge';

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Container
      className={twMerge('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <div>
        <h1>
          <span className="block text-base font-semibold uppercase text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={twMerge(
              'font-display mt-6 block max-w-5xl text-5xl font-medium capitalize tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto'
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={twMerge(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto'
          )}
        >
          {children}
        </div>
      </div>
    </Container>
  );
}
