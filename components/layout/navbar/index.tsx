import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

import fullLogo from '/public/full-logo.svg';
import responsiveLogo from '/public/responsive-logo.svg';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Who We Are', href: '/who-we-are' },
  { name: 'Blog', href: '/blog' },
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
      <div className="hidden lg:flex lg:flex-1" aria-hidden="true">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image src={fullLogo} alt="" className="h-14 w-auto" />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-x-12">
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="rounded-md bg-neutral-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
