/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useCallback } from 'react';
import { redirects } from '@wix/redirects';
import { files } from '@wix/media';
import { items } from '@wix/data';
import { authentication, members } from '@wix/members'
import { useWixClient } from '@/lib/wix/hooks/use-wix-client';
import { useWixAuth } from '@wix/sdk-react';
import { useWixModules } from '@wix/sdk-react';



export const WixModuleContext = React.createContext(null!);



const WixModuleContextProvider = (props: any) => {
  const memberClient = useWixModules(members);
  const itemClient = useWixModules(items);

  const value = useMemo(
    () => ({
      memberClient,
      itemClient,
    }),
    []
  );

  return <WixModuleContext.Provider value={value} {...props} />;
};


export const WixModuleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <WixModuleContextProvider>{children}</WixModuleContextProvider>;



export const useWixModule = () => {
  const context = React.useContext(WixModuleContext);
  if (context === undefined) {
    throw new Error(`useModule must be used within a ModuleContext`);
  }
  return context;
};
