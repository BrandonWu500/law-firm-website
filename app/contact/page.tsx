import ContactDetails from '@/components/contact/details';
import ContactForm from '@/components/contact/form';
import { Container } from '@/components/layout/container';
import { PageIntro } from '@/components/page-intro';

import imageStateOfLiberty from '/public/statue-of-liberty.jpg';

const ContactPage = () => {
  return (
    <>
      <PageIntro image={imageStateOfLiberty} title="Contact Us" />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
};
export default ContactPage;
