import { twMerge } from 'tailwind-merge';

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
};

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={twMerge('mx-auto max-w-screen-xl px-6 lg:px-8', className)}
    >
      {children}
    </Component>
  );
}
