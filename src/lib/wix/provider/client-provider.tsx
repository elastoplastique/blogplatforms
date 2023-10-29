import React, { useMemo } from 'react';

import { createContext, ReactNode } from 'react';
import { redirects } from '@wix/redirects';
//import { createClient, media, AuthenticationStrategy, }   from '@wix/sdk';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { WixProvider, useWixModules } from '@wix/sdk-react';
import { files } from '@wix/media';
import { items } from '@wix/data';
import Cookies from 'js-cookie';
import { authentication, members } from '@wix/members'

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
  <WixClientContext.Provider value={wixClient}>
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
      {children}
    </WixProvider>
  </WixClientContext.Provider>
);
