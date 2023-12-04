import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@/components/ui';
import { LoginButton } from '@/components/auth0/login-button';
import { LogoutButton } from '@/components/auth0/logout-button';

export const AuthButton = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  //   console.log('user', user, isAuthenticated, isLoading);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? <div>{user?.name && <Avatar fallback={user.name[0]} />}</div> : <LoginButton />;
};

export default AuthButton;
