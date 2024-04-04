// import { useEffect } from 'react';
import Link from 'next/link';
import { WEBSITE_NAME } from '@/constants/content';
import { Flex, Heading } from '../ui';
import { ThemeToggle } from '@/components/theme-toggle';
import { DropdownMenu, Button, Text } from '@radix-ui/themes';
// import { AuthButton } from '@/components/auth0/auth-button';
import { Logo } from '@/components/icons/logo';

type NavLink = {
  name: string;
  href: string;
  current: boolean;
  title?: string;
  description?: string;
};

const navLinks = [
  { name: 'Features', href: '/features', current: false, title: 'Explore Blog Platforms by Features' },
  { name: 'Blog', href: '/blog', current: false, title: 'Blog posts' },
];

const listicles = [
  {
    name: 'Free Blogging Platforms',
    href: '/blog/best-free-platforms-for-blogging',
    current: false,
    description: 'Best Free Platforms for Blogging',
  },
  {
    name: 'Blogging Platforms for Developers',
    href: '/blog/best-blogging-platforms-for-developers',
    current: false,
    description: 'Best Blogging Platform for Developers',
  },
  {
    name: 'Blogging Platforms for Artists',
    href: '/blog/best-blog-platforms-for-artists',
    current: false,
    description: 'Best Blogging Platform for Artists',
  },

  {
    name: 'Blogging Platforms for Students',
    href: '/blog/best-blog-sites-for-students',
    current: false,
    description: 'Best Blogging Platform for Students',
  }
];

const features = [
  { name: 'Ad-monetization', href: '/features/ad-monetization', current: false, description: 'Ad-monetization Friendly Blog Platforms' },
  {
    name: 'Category & Tag System',
    href: '/features/category-tag-system',
    current: false,
    description: 'Blog platforms that support Category & Tag System',
  },
  { name: 'Comment System', href: '/features/comment-system', current: false, description: 'Blog platforms that support commenting' },
  { name: 'Figma Integration', href: '/features/figma', current: false, description: 'Blog platforms having Figma integration' },
  { name: 'Headless Blogging Platforms', href: '/features/headless', current: false, description: 'Headless blog platforms' },
  {
    name: 'Image Optimization',
    href: '/features/image-optimization',
    current: false,
    description: 'Blog platforms support advanced image optimization',
  },
  {
    name: 'Integrated Reader Base',
    href: '/features/integrated-reader-base',
    current: false,
    description: 'Blog platforms having integrated reader base',
  },
  { name: 'Markdown Blogging Platforms', href: '/features/markdown', current: false, description: 'Markdown blogging platforms' },
  { name: 'Open-source Blogging Platforms', href: '/features/open-source', current: false, description: 'Open-source blogging platforms' },

  {
    name: 'Sell Digital Products',
    href: '/features/sell-digital-products',
    current: false,
    description: 'Blog platforms that support selling digital products',
  },
];

export function MainNavigation() {
  // const { memberClient } = useWixModule();


  // useEffect(() => {
  //  memberClient.getCurrentMember().then((member: any) => {
  //   console.log('member', member);
  //  });
  // },[])
  return (
    <nav id="main-navigation" className="h-16 sm:px-16 w-full">
      <Link href="/" title="Best Blogging Platforms">
        <Flex direction="row" align="center">
          <Logo />
          <Heading as="h1" size="5" className="!text-sm sm:!text-xl tracking-tightest !whitespace-nowrap !mr-4 !mb-0">
            {WEBSITE_NAME}
          </Heading>
        </Flex>
      </Link>

      <Flex direction="row" align="center">
        <ul className="flex flex-row">
          {/* {navLinks.map((nl: NavLink) => (
            <li key={nl.href} className="mx-4">
              <Link href={nl.href} title={nl.title}>
                {nl.name}
              </Link>
            </li>
          ))} */}
          <li key={'blog-platforms-features'} className="hidden xs:block mx-1 md:mx-4">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft">Features</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content variant="soft">
                <DropdownMenu.Item>
                  <Link href="/features">All Features</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />

                {features.map((pf: NavLink) => (
                  <DropdownMenu.Item key={pf.href} className="mt-4 !py-1 !h-12">
                    <Link href={pf.href} prefetch={true} title={pf.description!} className="flex flex-col justify-start">
                      <Text size="3" weight={'regular'} className="py-0 my-0 leading-5">
                        {pf.name}
                      </Text>
                      <Text size="2" weight={'regular'} className="py-0 my-0 leading-5">
                        {pf.description!}
                      </Text>
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </li>
          <li key={'blog-platforms-listicles'} className="mx-1 md:mx-4">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button>Lists</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <Link href="/blog">All Posts</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />

                {listicles.map((platformList: NavLink) => (
                  <DropdownMenu.Item key={platformList.href}>
                    <Link href={platformList.href} title={platformList.description!}>
                      {platformList.name}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </li>
        </ul>

        {/* <Flex direction="row" align="end">
          <AuthButton />
        </Flex> */}
        <ThemeToggle />
      </Flex>
    </nav>
  );
}
