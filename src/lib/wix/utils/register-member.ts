// @ts-nocheck
import { wixClient } from '@/lib/wix/provider/client-provider';

export async function registerMember(credentials: Wix.RegisterMemberCredentials) {
  const response = await wixClient.auth.register({
    email: credentials.email,
    password: credentials.password,
  });
  console.log('registerMember response: ', response);
  if (response.data && response.data.sessionToken) {
    const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken);
    wixClient.setTokens(tokens);
    Cookies.set(WIX_REFRESH_TOKEN, JSON.stringify(tokens.refreshToken));
  }
}
