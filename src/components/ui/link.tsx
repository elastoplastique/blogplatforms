import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }; // Remove readonly and ?
// type SizeType = [P in keyof linkPropDefs["weight"]["values"]]: linkPropDefs["weight"]["values"][P];
type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  [keyof: string]: any;
  // size?: Responsive<Mutable<typeof linkPropDefs["size"]["values"]>>;
  // weight?: Responsive<Mutable<typeof linkPropDefs["weight"]["values"]>>;
  // underline?: Responsive<Mutable<typeof linkPropDefs["underline"]["values"]>>;
  // trim?: Responsive<Mutable<typeof linkPropDefs["trim"]["values"]>>;
  // color?: Responsive<Mutable<typeof linkPropDefs["color"]["values"]>>;
  // highContrast?: boolean
};

export const Link = (props: Props) => {
  const { children, href, className, ...rest } = props;
  return (
    <RadixLink asChild {...rest}>
      <NextLink href={href} className={className}>
        {children}
      </NextLink>
    </RadixLink>
  );
};
