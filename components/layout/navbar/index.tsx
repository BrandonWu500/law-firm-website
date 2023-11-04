'use client';

import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from '@/components/layout/navbar/mobile-menu';
import fullLogo from '/public/full-logo.svg';
import responsiveLogo from '/public/responsive-logo.svg';

const navigation = [
  { title: 'Home', path: '/' },
  { title: 'Who We Are', path: '/about' },
  { title: 'Blog', path: '/blog' },
];

const Navbar = () => {
  return (
    <nav
      className="mx-auto flex max-w-screen-xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:hidden">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Specter Ross</span>
          <Image src={responsiveLogo} alt="" className="h-10 w-auto" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image src={fullLogo} alt="" className="h-14 w-auto" />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-x-12">
        <div className="hidden md:flex md:gap-x-12">
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
        <Link
          href="/contact-us"
          className="bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <MobileMenu menu={navigation} />
      </div>
    </nav>
  );
};
export default Navbar;
