import { Tooltip } from '@/components/ui';
import { Info } from 'lucide-react';

export const InfoTooltip = ({ text, size = 16, color = 'var(--hover-solid-bg)' }: { text: string; size?: number; color?: string }) => (
  <Tooltip content={text}>
    <Info size={size} color={color} strokeWidth={2} className="cursor-pointer" />
  </Tooltip>
);
