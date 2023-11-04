import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout/container';

import fullLogo from '/public/full-logo.svg';

const navigation = [
  { title: 'Home', path: '/' },
  { title: 'Who We Are', path: '/who-we-are' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact Us', path: '/contact-us' },
];

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32">
      <div>
        <div className="flex flex-col justify-between gap-6 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mb-12 mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Image src={fullLogo} alt="" className="h-12 w-auto" />
          </Link>
          <div className="hidden justify-between gap-6 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
