import React, { useState, useEffect } from 'react';
import { Avatar } from '@/components/ui';
import { LoginButton } from '@/components/auth0/login-button';
import { LogoutButton } from '@/components/auth0/logout-button';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth } from '@/lib/state/auth';
import { useWixModule } from '@/lib/wix/provider';
import { COLLECTIONS } from '@/lib/wix/cms/cms';

export const AuthButton = () => {
  const { user, error, isLoading } = useUser();
  const [userMetadata, setUserMetadata] = useState(null);
  const setUser = useAuth((state) => state.setUser);

  const { itemClient } = useWixModule();
  console.log('modules itemClient:', itemClient);

  useEffect(() => {
    if (user) {
      //updateWixUserCollection(itemClient, user);
      setUser(user);
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return user ? <div>{user?.name && <Avatar fallback={user.name[0]} />}</div> : <LoginButton />;
};

export default AuthButton;

function updateWixUserCollection(client: any, user: Auth0.Auth0User | any):void {
  const queryResponse = client
    .queryDistinctValues({
      dataCollectionId: COLLECTIONS.USERS,
      fieldName: 'email',
      filter: { email: user.email },
    }).then((res: any) => { 
      console.log('queryResponse then:', res);
      if (res.distinctValues.length === 0) {
        client.insertDataItem({
          dataCollectionId: COLLECTIONS.USERS,
          dataItem: {
            email: user.email,
            name: user.name,
            nickname: user.nickname,
            picture: user.picture,
            sub: user.sub,
            sid: user.sid,
          }
        });
      }
    });
  console.log('queryResponse:', queryResponse);
}
