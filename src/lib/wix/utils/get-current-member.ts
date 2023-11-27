import { wixClient } from '@/lib/wix/provider/client-provider';

export async function getCurrentMember() {
  return wixClient.auth.loggedIn() ? await wixClient.members.getCurrentMember() : null;
}
