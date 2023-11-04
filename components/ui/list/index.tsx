import { twMerge } from 'tailwind-merge';

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <ul
        role="list"
        className={twMerge('text-base text-neutral-600', className)}
      >
        {children}
      </ul>
    </div>
  );
}
