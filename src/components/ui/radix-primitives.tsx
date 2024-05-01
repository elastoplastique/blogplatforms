// export * from '@radix-ui/themes';
import { Text as TextPrimitive } from '@radix-ui/themes';
import { Heading as HeadingPrimitive } from '@radix-ui/themes';

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

export { Code } from '@radix-ui/themes';
export { Em } from '@radix-ui/themes';
export { Kbd } from '@radix-ui/themes';
export { Quote } from '@radix-ui/themes';
export { Strong } from '@radix-ui/themes';
export { Blockquote } from '@radix-ui/themes';

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

// import {  GetPropDefTypes, PropDef, textPropDefs, headingPropDefs, codePropDefs, kbdPropDefs, blockquotePropDefs,
//   MarginProps,
//   PaddingProps
//   boxPropDefs,
//   sectionPropDefs,
//   flexPropDefs,
//   gridPropDefs,
//   containerPropDefs,
//   sectionPropDefs
// } from '@radix-ui/themes/dist/esm/props/index.d.ts';

// // Layout
// export { Box } from '@radix-ui/themes';
// export { Flex } from '@radix-ui/themes';
// export { Grid } from '@radix-ui/themes';
// export { Container } from '@radix-ui/themes';
// export { Section, sectionPropDefs } from '@radix-ui/themes';
// export { Inset } from '@radix-ui/themes';

// // Components
// export { AspectRatio } from '@radix-ui/themes';
// export { Avatar, avatarPropDefs } from '@radix-ui/themes';
// export { Badge, badgePropDefs } from '@radix-ui/themes';
// export { Button, buttonPropDefs } from '@radix-ui/themes';
// export { IconButton, iconButtonPropDefs } from '@radix-ui/themes';
// export { Callout, CalloutIcon, CalloutRoot, CalloutText, calloutRootPropDefs } from '@radix-ui/themes';
// export { Card, cardPropDefs } from '@radix-ui/themes';
// export { Checkbox, checkboxPropDefs } from '@radix-ui/themes';
// export {
//   DropdownMenu
// } from '@radix-ui/themes';
// export { HoverCard, HoverCardContent, HoverCardRoot, HoverCardTrigger, hoverCardContentPropDefs } from '@radix-ui/themes';
// export { Popover, PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger, popoverContentPropDefs } from '@radix-ui/themes';
// export { RadioGroup, RadioGroupItem, RadioGroupRoot, radioGroupPropDefs } from '@radix-ui/themes';
// export { ScrollArea, scrollAreaPropDefs } from '@radix-ui/themes';
// export {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectRoot,
//   SelectLabel,
//   SelectTrigger,
//   SelectSeparator,
//   selectContentPropDefs,
//   selectRootPropDefs,
//   selectTriggerPropDefs,
// } from '@radix-ui/themes';
// export { Slider } from '@radix-ui/themes';
// export { Switch } from '@radix-ui/themes';
// export {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRoot,
//   TableColumnHeaderCell,
//   TableRow,
//   TableRowHeaderCell,
//   tableCellPropDefs,
//   tableRootPropDefs,
//   tableRowPropDefs,
// } from '@radix-ui/themes/esm/';
// export { Tabs, TabsContent, TabsList, TabsRoot, TabsTrigger } from '@radix-ui/themes';
// export { TextArea, textAreaPropDefs } from '@radix-ui/themes';
// export { TextField, TextFieldInput, TextFieldRoot, TextFieldSlot} from '@radix-ui/themes';
// export { Tooltip, tooltipPropDefs } from '@radix-ui/themes';

// export { Dialog } from '@radix-ui/themes';
