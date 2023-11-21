// @ts-nocheck
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { createClient, OAuthStrategy } from '@wix/sdk';
import { members } from '@wix/members';
import { myWixClient } from '@/lib/wix/client';
import { useClientAuthSession } from '@/lib/wix/hooks/use-client-auth-session';
import { useWixAuth } from '@wix/sdk-react';
import {
  AUTH_LOGIN_CALLBACK_PARAM,
  AUTH_LOGIN_PATHNAME,
  PROMPT_QUERY_PARAM,
  REDIRECT_FROM_WIX_LOGIN_STATUS,
  WIX_REFRESH_TOKEN,
} from '@/lib/wix/constants';
import { MemberAvatar } from '@/components/auth/member-avatar';


export function LoginBar() {
  const { wixClient: myWixClient } = useClientAuthSession();
  const isLoggedIn = myWixClient?.auth.loggedIn();

  // const { generateVisitorTokens } = useWixAuth() as IOAuthStrategy;
  // const { accessToken, refreshToken } = generateVisitorTokens();
  // console.log('access token', accessToken, refreshToken);

  const [member, setMember] = useState(null);

  async function fetchMember() {
    const { member } = myWixClient.auth.loggedIn() ? await myWixClient.members.getMyMember() : {};
    setMember(member || undefined);
  }

  async function login() {
    const data = myWixClient.auth.generateOAuthData(`${window.location.origin}/login-callback`, window.location.href);
    localStorage.setItem('oauthRedirectData', JSON.stringify(data));
    const { authUrl } = await myWixClient.auth.getAuthUrl(data);
    window.location = authUrl; // wix auth will send the user back to the callback page (login-callback.js)
  }

  async function logout() {
    const { logoutUrl } = await myWixClient.auth.logout(window.location.href);
    Cookies.remove('session');
    window.location = logoutUrl;
  }

  const onLoginClick = async () => {
    if (isLoggedIn) {
      // after logout return to home page
      const { logoutUrl } = await wixClient!.auth.logout(window.location.origin);
      Cookies.remove(WIX_REFRESH_TOKEN);
      window.location.href = logoutUrl;
    } else {
      const loginUrl = new URL(AUTH_LOGIN_PATHNAME, window.location.origin);
      loginUrl.searchParams.set(AUTH_LOGIN_CALLBACK_PARAM, window.location.href);
      window.location.href = "/profile/login"
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <div>
      {member !== null && (
        <section onClick={() => (myWixClient.auth.loggedIn() ? logout() : login())}>
          <h3>Hello {myWixClient.auth.loggedIn() ? member.profile?.nickname || member.profile?.slug || '' : 'visitor'},</h3>
          <span>{myWixClient.auth.loggedIn() ? 'Logout' : 'Login'}</span>
          <button
            onClick={onLoginClick}
            className="flex flex-nowrap text-highlight gap-2 justify-center items-center font-open-sans-condensed"
          >
            <div className="w-[22px] h-[22px] fill-highlight">
              <MemberAvatar />
            </div>
            <div className="flex relative whitespace-nowrap">{isLoggedIn ? 'Log Out' : 'Log In'}</div>
          </button>
        </section>
      )}
    </div>
  );
}
