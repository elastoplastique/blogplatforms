import { useState, useEffect } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

type Props = {
  value: number;
  max?: number;
  getValueLabel?: (value: number, max: number) => string;
};

export const Progress = ({ value, max = 100, getValueLabel }: Props) => {
  return (
    <ProgressPrimitive.Root
      className="!relative !overflow-hidden !bg-[var(--slate-5)] !rounded-4xl !min-w-full h-[20px]"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      max={max}
      value={value}
      getValueLabel={getValueLabel}
    >
      <ProgressPrimitive.Indicator
        className="w-full !h-full !transition-transform !duration-[660ms] !bg-[var(--violet-9)] !ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${max - value}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};
