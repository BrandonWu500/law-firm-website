import { TextInput } from '@/components/ui/input/text';
import { TextareaInput } from '@/components/ui/input/textarea';

const ContactForm = () => {
  return (
    <div className="lg:order-last">
      <form action="#" method="POST">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <TextInput label="name" name="name" autoComplete="name" />
          <TextInput
            label="email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="company"
            name="company"
            autoComplete="organization"
            optional
          />
          <TextInput label="phone" type="tel" name="phone" autoComplete="tel" />
          <TextareaInput label="How can we help you?" />
        </div>
        <div className="mt-10 flex justify-start border-t border-gray-900/10 pt-8">
          <button
            type="submit"
            className="bg-neutral-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
