import { FOOTER_LINKS, FOOTER_CONTENT, FOOTER_FEATURE_LINKS, FOOTER_BLOG_LINKS } from '@/constants/navigation';
import { SOCIAL_MEDIA } from '@/constants/social-media';
import { keyifier } from '@/lib/utils/keyifier';
import Link from 'next/link';
// import { Convertkit } from '@/components/compound/convertkit';
// import Image from 'next/image';
// import { externalImageLoader } from '@/lib/utils/external-image-loader';
import { ROUTES } from '@/constants/routes';
import { WhiteLogo } from '@/components/icons/logo';

export const MainFooter = () => {
  return (
    <footer className="py-10 bg-gray-900 sm:pt-16 lg:pt-24 relative z-[1]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          <nav>
            <Link href={ROUTES.HOME.path} title={ROUTES.HOME.label} className="text-base font-bold text-white">
              {FOOTER_CONTENT.TITLE.text}
            </Link>

            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((nl: NavLinkType, i: number) => (
                <li key={keyifier(nl.text, i)}>
                  <Link
                    href={nl.path}
                    title={nl.text}
                    className="text-sm text-white transition-all duration-200 hover:opacity-100 opacity-80"
                  >
                    {nl.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <Link href={ROUTES.FEATURES_DIRECTORY.path} title={ROUTES.FEATURES_DIRECTORY.label} className="text-base font-bold text-white">
              {ROUTES.FEATURES_DIRECTORY.label}
            </Link>

            <ul className="mt-4 space-y-2">
              {FOOTER_FEATURE_LINKS.map((nl: NavLinkType, i: number) => (
                <li key={`footer-feature-link-${nl.path}`}>
                  <Link
                    href={nl.path}
                    title={nl.description}
                    className="text-sm text-white transition-all duration-200 hover:opacity-100 opacity-70"
                  >
                    {nl.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <Link
              href={ROUTES.BLOG_POST_DIRECTORY.path}
              title={ROUTES.BLOG_POST_DIRECTORY.label}
              className="text-base font-bold text-white"
            >
              {ROUTES.BLOG_POST_DIRECTORY.label}
            </Link>

            <ul className="mt-4 space-y-2">
              {FOOTER_BLOG_LINKS.map((nl: NavLinkType, i: number) => (
                <li key={`footer-blog-link-${nl.path}`}>
                  <Link
                    href={nl.path}
                    title={nl.description}
                    className="text-sm text-white transition-opacity ease-in-out duration-200 hover:opacity-100 opacity-70"
                  >
                    {' '}
                    {nl.text}{' '}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
          {/* <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image className="h-8 auto md:order-1 !rounded-full" src={LOGO} alt="Blogging Platforms logo" fill />
          </div> */}

          <ul className="flex items-center space-x-3 md:order-3">
            <li>
              <a
                rel="noopener nofollow"
                href={SOCIAL_MEDIA.TWITTER}
                title="Twitter"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent rounded-full w-7 h-7 opacity-70 hover:opacity-100"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                rel="noopener nofollow"
                href={SOCIAL_MEDIA.GITHUB}
                title="GitHub"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent rounded-full w-7 h-7 opacity-70 hover:opacity-100"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>
            <li>
              <a
                rel="noopener nofollow"
                href={SOCIAL_MEDIA.PINTEREST}
                title="Pinterest"
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent rounded-full w-7 h-7 opacity-70 hover:opacity-100"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            <WhiteLogo color="white" size={60} /> © Copyright 2024, All Rights Reserved by{' '}
            <a href="https://bloggingplatforms.app" title="Best Blogging Platforms">
              Best Blogging Platforms
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};
