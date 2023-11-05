import Link from 'next/link';

import { Offices } from '@/components/contact/offices';
import { Border } from '@/components/layout/border';

const ContactDetails = () => {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our Offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? Stop by one of our offices.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email Us
        </h2>
        <Link
          href={`mailto:${'contact@specterross.com'}`}
          className="text-neutral-600 hover:text-neutral-950"
        >
          contact@specterross.com
        </Link>
        <h2 className="font-display mt-8 text-base font-semibold text-neutral-950">
          Call Us
        </h2>
        <p className="text-neutral-600">{`+1 (123) 456-7890`}</p>
      </Border>
    </div>
  );
};
export default ContactDetails;
