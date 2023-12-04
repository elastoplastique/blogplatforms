import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@/components/ui';
import { LoginButton } from '@/components/auth0/login-button';
import { LogoutButton } from '@/components/auth0/logout-button';

export const ProfileAvatar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && user ? <div>{user?.name && <Avatar fallback={user.name[0]} />}</div> : <LoginButton />;
};

export default ProfileAvatar;
