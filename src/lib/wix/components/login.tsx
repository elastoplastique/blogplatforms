import { useWixClient } from '@/lib/wix//hooks/use-wix-client';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { WIX_REFRESH_TOKEN } from '@/lib/wix/constants';

const LoginComponent = () => {
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
  const onLoginClick = async () => {
    if (isLoggedIn) {
      Cookies.remove(WIX_REFRESH_TOKEN);
      const { logoutUrl } = await wixClient.auth.logout(window.location.href);
      window.location.href = logoutUrl;
      return;
    }
  };
  return (
    <button onClick={onLoginClick} className="flex relative">
      {isLoggedIn ? 'Log Out' : 'Log In'}
    </button>
  );
};

export const Login = dynamic(() => Promise.resolve(LoginComponent), {
  ssr: false,
});