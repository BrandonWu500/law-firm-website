import { Container } from '@/components/layout/container';
import Image, { ImageProps } from 'next/image';

export function PageIntro({
  image,
  title,
}: {
  image: ImageProps['src'];
  title: string;
}) {
  return (
    <div className="relative aspect-square w-screen sm:h-[60vh]">
      <Image src={image} alt="" className="-z-10 object-cover" fill priority />
      <Container className="flex h-full items-center">
        <h1 className="max-w-xl text-4xl capitalize text-white sm:text-5xl md:max-w-2xl lg:max-w-3xl xl:text-7xl">
          {title}
        </h1>
      </Container>
    </div>
  );
}
