import { CookieStore, getWixClient } from '@/lib/wix/auth/wix-client.base';
// import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';

export type RequestCookiesGetter = Pick<any, 'get'>;

const getCookieAdapter = (cookieStore: RequestCookiesGetter): CookieStore => {
  return {
    get: (name) => cookieStore.get(name)?.value,
  };
};

export const getServerWixClient = ({ cookieStore }: { cookieStore?: RequestCookiesGetter }) =>
  getWixClient(cookieStore ? { cookieStore: getCookieAdapter(cookieStore) } : {});
