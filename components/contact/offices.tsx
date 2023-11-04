import { Office } from '@/components/contact/office';

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="New York" invert={invert}>
          80 Fremont Ave.
          <br />
          New York, NY 10128
        </Office>
      </li>
      <li>
        <Office name="Brooklyn" invert={invert}>
          19 Aspen Dr.
          <br />
          Brooklyn, NY 11235
        </Office>
      </li>
    </ul>
  );
}
