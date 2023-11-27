// @ts-nocheck
import { WIX_REFRESH_TOKEN } from './../constants';
import { wixClient } from '@/lib/wix/provider/client-provider';

export async function loginMember(credentials: Wix.LoginMemberCredentials, callbacks?: Wix.AuthResponseCallbackType) {
  const response = await wixClient.auth.login({
    email: credentials.email,
    password: credentials.password,
  });
  if (callbacks) {
    if (response?.error) {
      callbacks.onFailure(response.errorCode);
    } else {
      callbacks.onSuccess(response.data);
    }
  }
  console.log('loginMember response: ', response);
  if (response.data && response.data.sessionToken) {
    const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken);
    wixClient.setTokens(tokens);
    Cookies.set(WIX_REFRESH_TOKEN, JSON.stringify(tokens.refreshToken));
  }

  return response;
}
