import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { Container, Flex, Heading, Text, Separator, Card, AspectRatio } from '@/components/ui';
import { SignupForm } from '@/components/auth/signup-form';
import { wixClient } from '@/lib/wix/provider/client-provider';
import { getCurrentMember } from '@/lib/wix/utils/get-current-member';
import { registerMember } from '@/lib/wix/utils/register-member';

import { AUTH_CALLBACK_PATHNAME } from '@/lib/wix/constants';
import { LOGO } from '@/constants/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { META } from '@/constants/meta';
import Image from 'next/image';

const SignupPage: React.FC = () => {
  return (
    <PageLayout>
      <Container id="login-page">
        <div id="login-form-container" className="w-full flex flex-col justify-center items-center min-h-[500px]">
          <Card variant="surface" className="z-10 items-center !px-4 !py-8">
            <Flex direction={'column'} align="center" width={'100%'} style={{ position: 'relative' }}>
              <Image
                src={LOGO}
                alt={META.TITLE}
                width={60}
                height={60}
                className="rounded-full"
                loader={externalImageLoader}
                style={{ borderRadius: 100, position: 'relative', overflow: 'hidden' }}
              />
              <Heading size="4" className="my-4" my="2">
                Create an account
              </Heading>
              <SignupForm onSubmit={registerMember} />
            </Flex>
          </Card>
        </div>
      </Container>
    </PageLayout>
  );
};

export async function getServerSideProps() {
  const user = await getCurrentMember();
  if (user) {
    console.log('login page: member is already logged in');
    return {
      redirect: {
        destination: AUTH_CALLBACK_PATHNAME,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default SignupPage;
