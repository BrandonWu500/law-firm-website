export function TextareaInput({
  label,
  placeholder,
  optional = false,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & {
  label: string;
  placeholder?: string;
  optional?: boolean;
}) {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor="message"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="message"
          id="message"
          className="block w-full border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:leading-6"
          defaultValue={''}
          placeholder={placeholder}
          required={!optional}
          {...props}
        />
      </div>
    </div>
  );
}
