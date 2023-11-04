import Image from 'next/image';

import { Container } from '@/components/layout/container';
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg';
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg';
import logoGreenLife from '@/images/clients/green-life/logo-light.svg';
import logoHomeWork from '@/images/clients/home-work/logo-light.svg';
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg';
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg';
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg';
import logoUnseal from '@/images/clients/unseal/logo-light.svg';

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
];

const LogoCloud = () => {
  return (
    <div className="rounded-4xl mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <div className="flex items-center gap-x-8">
          <h2 className="text-center text-lg font-semibold tracking-wider text-white sm:text-left">
            We’ve Worked with Hundreds of Amazing Businesses
          </h2>
          <div className="hidden h-px flex-auto bg-neutral-800 md:block" />
        </div>
        <div>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <div>
                  <Image src={logo} alt={client} unoptimized />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default LogoCloud;
