import React, { useMemo } from 'react';

import { createContext, ReactNode } from 'react';
//import { createClient, media, AuthenticationStrategy, }   from '@wix/sdk';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { WixProvider, useWixModules } from '@wix/sdk-react';
import { redirects } from '@wix/redirects';
import { files } from '@wix/media';
import { items } from '@wix/data';
import { authentication, members } from '@wix/members'
import Cookies from 'js-cookie';
import { WixModuleProvider } from './module-provider';

const refreshToken = JSON.parse(Cookies.get(process.env.NEXT_PUBLIC_WIX_REFRESH_TOKEN!) || '{}');


export const wixClient = createClient({
  modules: {
    redirects,
    authentication,
    files,
    items,
    members
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: { refreshToken, accessToken: { value: '', expiresAt: 0 } },
  }),
});
export type WixClient = typeof wixClient;


export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientProvider = ({ children }: { children: ReactNode }) => (
  <WixProvider
    modules={{
      redirects,
      authentication,
      files,
      items,
      members
    }}
    auth={OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: { refreshToken, accessToken: { value: '', expiresAt: 0 } },
    })}
  >
    <WixModuleProvider>
      {children}
    </WixModuleProvider>
  </WixProvider>
);
