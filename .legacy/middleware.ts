import { NextRequest, NextResponse } from 'next/server';
import { createClient, OAuthStrategy } from '@wix/sdk';

export const WIX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_WIX_ACCESS_TOKEN!;
export const WIX_REFRESH_TOKEN = process.env.NEXT_PUBLIC_WIX_REFRESH_TOKEN!;

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const requestUrl = request.url;
  requestHeaders.set('x-middleware-request-url', requestUrl);
  const cookies = request.cookies;
  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  if (cookies.get(WIX_REFRESH_TOKEN)) {
    return res;
  }
  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  });
  const tokens = await wixClient.auth.generateVisitorTokens();
  res.cookies.set(WIX_REFRESH_TOKEN, JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

export const config = {
  unstable_allowDynamic: ['./node_modules/@wix/**'],
};
