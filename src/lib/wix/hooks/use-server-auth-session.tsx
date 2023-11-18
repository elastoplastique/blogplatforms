import { WixSession } from '@/lib/wix/auth/session';
import { getServerWixClient } from '@/lib/wix/auth/wix-client.server';
import { cookies as nextCookies } from 'next/headers';

export const useServerAuthSession = (): WixSession => {
  return {
    wixClient: getServerWixClient({ cookieStore: nextCookies() }),
  };
};
