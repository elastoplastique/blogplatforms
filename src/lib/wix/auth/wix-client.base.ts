import { createClient, OAuthStrategy } from '@wix/sdk';
import { members } from '@wix/members';
import { redirects } from '@wix/redirects';
import { files } from '@wix/media';
import { items } from '@wix/data';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

export type CookieStore = {
  get(name: string): string | undefined;
};
const getRefreshToken = (cookieStore: CookieStore) =>
  process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD ? JSON.parse(cookieStore.get(process.env.NEXT_PUBLIC_WIX_REFRESH_TOKEN!) || '{}') : {};

export const getWixClient = ({ cookieStore }: { cookieStore?: CookieStore }) =>
  process.env.NEXT_PUBLIC_WIX_CLIENT_ID
    ? createClient({
        modules: {
          redirects,
          members,
          files,
          items,
        },
        auth: OAuthStrategy({
          clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
          tokens: {
            refreshToken: cookieStore ? getRefreshToken(cookieStore) : {},
            accessToken: { value: '', expiresAt: 0 },
          },
        }),
      })
    : null;

export type WixClientType = ReturnType<typeof getWixClient>;
