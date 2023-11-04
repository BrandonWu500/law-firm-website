import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Prose = ({ children, className }: Props) => {
  return <article className={twMerge('prose', className)}>{children}</article>;
};
export default Prose;
