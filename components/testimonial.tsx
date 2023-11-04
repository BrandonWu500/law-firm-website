import { Container } from '@/components/layout/container';
import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  client: { logo: ImageProps['src']; name: string };
  className?: string;
};
const Testimonial = ({ children, client, className }: Props) => {
  return (
    <div
      className={twMerge(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className
      )}
    >
      <Container>
        <div>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="font-display relative text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image src={client.logo} alt={client.name} unoptimized />
            </figcaption>
          </figure>
        </div>
      </Container>
    </div>
  );
};
export default Testimonial;
