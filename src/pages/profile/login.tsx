import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { Container, Flex, Heading, Text, Separator, Card, AspectRatio } from '@/components/ui';
import { LoginForm } from '@/components/auth/login-form';
import { wixClient } from '@/lib/wix/provider/client-provider';
import { getCurrentMember } from '@/lib/wix/utils/get-current-member';
import { loginMember } from '@/lib/wix/utils/login-member';
import { ROUTES } from '@/constants/routes';
import { AUTH_CALLBACK_PATHNAME } from '@/lib/wix/constants';
import { LOGO } from '@/constants/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { META } from '@/constants/meta';
import Image from 'next/image';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage: React.FC = () => {
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
                Login to your accounts
              </Heading>
              <LoginForm onSubmit={loginMember} />
            </Flex>
          </Card>
        </div>
      </Container>
    </PageLayout>
  );
};

export async function getServerSideProps() {
  const user = await getCurrentMember();
  console.log('profile login page - user:', user);

  if (user) {
    console.log('profile login page - existing user:', user);
    return {
      redirect: {
        destination: ROUTES.HOME.path,
        permanent: false,
      },
    };
  } else {
    console.log('profile login page - not exist user:', user);
    return {
      props: {},
    };
  }
}

export default LoginPage;
