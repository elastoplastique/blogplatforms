import Link from 'next/link';
import { WEBSITE_NAME } from '@/constants/content';
import { Flex, Heading } from '../ui';
import { ThemeToggle } from '@/components/theme-toggle';

export function MainNavigation() {
  return (
    <nav id="main-navigation" className="h-16  px-4 sm:px-20 w-full">
      <Link href="/">
        <Flex direction="row" align="end">
          <Heading as="h1" className="tracking-tightest">
            {WEBSITE_NAME}
          </Heading>
        </Flex>
      </Link>

      <Flex direction="row" align="center">
        <ThemeToggle />
      </Flex>
    </nav>
  );
}
