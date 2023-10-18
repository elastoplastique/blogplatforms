'use client';
import { useContext } from 'react';
import { WixClientContext } from '@/lib/wix/provider';

export const useWixClient = () => {
  return useContext(WixClientContext);
};
