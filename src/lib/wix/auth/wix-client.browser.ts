import { getWixClient } from '@/lib/wix/auth/wix-client.base';
import Cookies from 'js-cookie';

export const getBrowserWixClient = () => getWixClient({ cookieStore: Cookies });
