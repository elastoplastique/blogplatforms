import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (let param of params) {
      console.log('param', param);
      Cookies.set(param[0], param[1]);
    }
    router.push('/');
  }, [router]);

  return null;
};

export default AuthRedirect;
