import { Separator as SeparatorComponent } from '@radix-ui/themes';
import type { ComponentProps } from 'react';

interface SeparatorProps extends ComponentProps<typeof SeparatorComponent> {
  className?: string;
}

export const Separator = ({ className = '', ...rest }: SeparatorProps) => <SeparatorComponent className={`my-4 ${className}`} size="4" />;
