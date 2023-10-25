import Link from 'next/link';
import { WEBSITE_NAME } from '@/constants/content';
import { Flex, Heading } from '../ui';
import { ThemeToggle } from '@/components/theme-toggle';

type NavLink = {
  name: string;
  href: string;
  current: boolean;
  title: string;
};

const navLinks = [
  { name: 'Features', href: '/features', current: false, title: 'Explore Blog Platforms by Features' },
  { name: 'Blog', href: '/blog', current: false, title: 'Blog posts' },
];

export function MainNavigation() {
  return (
    <nav id="main-navigation" className="h-16 sm:px-16 w-full">
      <Link href="/">
        <Flex direction="row" align="end">
          <Heading as="h1" size="5" className="!text-base sm:!text-2xl tracking-tightest !whitespace-nowrap">
            {WEBSITE_NAME}
          </Heading>
        </Flex>
      </Link>

      <Flex direction="row" align="center">
        <ul className="flex flex-row">
          {navLinks.map((nl: NavLink) => (
            <li key={nl.href} className="mx-4">
              <Link href={nl.href} title={nl.title}>
                {nl.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </Flex>
    </nav>
  );
}
