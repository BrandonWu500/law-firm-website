export function TextInput({
  label,
  placeholder,
  optional = false,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & {
  label: string;
  placeholder?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={label}
          className="block text-sm font-medium capitalize leading-6 text-gray-900"
        >
          {label}
        </label>
        <span
          className="text-sm leading-6 text-gray-500"
          id={`${label}-description`}
        >
          {optional ? 'Optional' : 'Required'}
        </span>
      </div>
      <div className="mt-2">
        <input
          id={label}
          className="block w-full border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:leading-6"
          placeholder={placeholder}
          aria-describedby={`${label}-description`}
          {...props}
          required={!optional}
        />
      </div>
    </div>
  );
}
