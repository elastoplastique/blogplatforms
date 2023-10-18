import type { ComponentPropsWithoutRef, Mixin, ReactPropTypes, ComponentProps } from 'react';
// Typography
import { GetPropDefTypes, PropDef } from '@radix-ui/themes';
import { Text as TextPrimitive, textPropDefs } from '@radix-ui/themes';
import { Heading as HeadingPrimitive, headingPropDefs } from '@radix-ui/themes';

export { Code, codePropDefs } from '@radix-ui/themes';
export { Em } from '@radix-ui/themes';
export { Kbd, kbdPropDefs } from '@radix-ui/themes';
export { Quote } from '@radix-ui/themes';
export { Strong } from '@radix-ui/themes';
export { Blockquote, blockquotePropDefs } from '@radix-ui/themes';

interface ExtendedTextProps extends GetPropDefTypes<typeof textPropDefs> {
  children?: React.ReactNode;
  className?: string;
  as?: 'p' | 'div' | 'span';
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  [key: string]: any;
}
interface ExtendedHeadingProps extends GetPropDefTypes<typeof headingPropDefs> {
  children?: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  [key: string]: any;
}

export const Text = ({ className = '', ...props }: ExtendedTextProps) => (
  <TextPrimitive className={`color-text-low-contrast ${className}`} {...props} />
);
export const Heading = ({ className = '', ...props }: ExtendedHeadingProps) => (
  <HeadingPrimitive className={`text-text-high-contrast ${className}`} {...props} />
);
