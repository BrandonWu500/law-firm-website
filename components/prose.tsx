import { twMerge } from 'tailwind-merge';

type Props = {
  html: string;
  className?: string;
};
const Prose = ({ html, className }: Props) => {
  return (
    <div
      className={twMerge('prose', className)}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};
export default Prose;
