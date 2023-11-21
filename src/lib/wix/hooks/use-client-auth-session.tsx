import { useContext } from 'react';
import { WixSessionContext } from '@/lib/wix/provider/client-provider';
import { WixClientType } from '@/lib/wix/auth/wix-client.base';

export type WixSession = {
    wixClient: WixClientType;
  };
  

export const useClientAuthSession = (): WixSession => {
  return useContext(WixSessionContext)!;
};
