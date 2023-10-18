'use client';
import { createContext, ReactNode } from 'react';
import { ManagedUIContext } from '@/lib/wix/provider/context';
// import { createClient, OAuthStrategy } from '@wix/sdk';

// import { collections, products } from '@wix/stores';
// import { currentCart, backInStockNotifications } from '@wix/ecom';
// import { wixEvents, checkout } from '@wix/events';
// import { redirects } from '@wix/redirects';
import { createClient, ApiKeyStrategy } from '@wix/api-client';
import { files } from '@wix/media';
import { items } from '@wix/data';
import Cookies from 'js-cookie';

const refreshToken = JSON.parse(Cookies.get(process.env.NEXT_PUBLIC_WIX_REFRESH_TOKEN!) || '{}');

export const wixClient = createClient({
  modules: {
    // products,
    // collections,
    // currentCart,
    // backInStockNotifications,
    // wixEvents,
    // checkout,
    // redirects,
    files,
    items,
  },
  // FOR APIKEY STRATEGY
  auth: ApiKeyStrategy({
    apiKey: process.env.WIX_ADMIN_API_KEY!,
    siteId: process.env.WIX_SITE_ID!,
    accountId: process.env.WIX_ACCOUNT_ID!,
  }),
  // FOR OAUTH STRATEGY
  // auth: OAuthStrategy({
  //   clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  //   tokens: { refreshToken, accessToken: { value: '', expiresAt: 0 } },
  // }),
});

export type WixClient = typeof wixClient;

export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientProvider = ({ children }: { children: ReactNode }) => (
  <WixClientContext.Provider value={wixClient}>
    <ManagedUIContext>{children}</ManagedUIContext>
  </WixClientContext.Provider>
);
