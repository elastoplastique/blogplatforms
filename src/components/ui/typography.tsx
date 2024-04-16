import type { ComponentPropsWithoutRef, Mixin, ReactPropTypes, ComponentProps } from 'react';
// Typography
import {
  GetPropDefTypes,
  PropDef,
  textPropDefs,
  headingPropDefs,
  codePropDefs,
  kbdPropDefs,
  blockquotePropDefs,
} from '@radix-ui/themes/dist/esm/props/index.d.ts';

import { Text as TextPrimitive } from './radix-primitives';
import { Heading as HeadingPrimitive } from './radix-primitives';

export { Code } from './radix-primitives';
export { Em } from './radix-primitives';
export { Kbd } from './radix-primitives';
export { Quote } from './radix-primitives';
export { Strong } from './radix-primitives';
export { Blockquote } from './radix-primitives';

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
