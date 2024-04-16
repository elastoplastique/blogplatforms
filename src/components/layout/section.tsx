import { Section as SectionComponent } from '@radix-ui/themes';
import type { ComponentProps } from 'react';

interface SectionProps extends ComponentProps<typeof SectionComponent> {
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ children, className = '', ...rest }: SectionProps) => (
  <SectionComponent size="1" className={`section mt-2  ${className}`} {...rest}>
    {children}
  </SectionComponent>
);
