import Image from 'next/image';

import { Container } from '@/components/layout/container';
import { List } from '@/components/ui/list';
import { ListItem } from '@/components/ui/list/item';

import gavel from '/public/gavel.jpg';

const PracticeAreas = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="lg:flex lg:items-center lg:justify-end">
        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
          <div className="w-screen flex-none lg:w-[45rem]">
            <Image
              src={gavel}
              alt=""
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </div>
        </div>
        <div className="flex flex-col lg:gap-y-12">
          <h2 className="mt-16 text-3xl font-medium capitalize sm:text-4xl lg:mt-0 xl:text-5xl">
            We can help you with
          </h2>
          <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-2">
            <ListItem title="Business Law">
              Lorem ipsum dolor sit amet consectetur. Diam nisl orci cras
              egestas eleifend tristique faucibus est blandit. Non magna leo
              ipsum tempus quam volutpat pretium.
            </ListItem>
            <ListItem title="Corporate Law">
              Lorem ipsum dolor sit amet consectetur. Diam nisl orci cras
              egestas eleifend tristique faucibus est blandit. Non magna leo
              ipsum tempus quam volutpat pretium.
            </ListItem>
          </List>
        </div>
      </div>
    </Container>
  );
};
export default PracticeAreas;
