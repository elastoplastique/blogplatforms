import React, { useState, useEffect } from 'react';
import { Avatar } from '@/components/ui';
import { LoginButton } from '@/components/auth0/login-button';
import { LogoutButton } from '@/components/auth0/logout-button';
import { useUser } from '@auth0/nextjs-auth0/client';

export const AuthButton = () => {
  const { user, error, isLoading } = useUser();
  const [userMetadata, setUserMetadata] = useState(null);
  console.log('user', user, isLoading);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return user ? <div>{user?.name && <Avatar fallback={user.name[0]} />}</div> : <LoginButton />;
};

export default AuthButton;
