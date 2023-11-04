import { Container } from '@/components/layout/container';

const Hero = () => {
  return (
    <Container className="mt-40 md:mt-64">
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 -z-10 h-[85vh] w-screen object-cover md:h-[90vh]"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div>
        <h1 className="max-w-3xl text-3xl text-white sm:text-5xl xl:text-7xl">
          Helping your business succeed.
        </h1>
      </div>
    </Container>
  );
};
export default Hero;
