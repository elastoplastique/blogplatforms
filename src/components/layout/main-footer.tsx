import { FOOTER_LINKS, FOOTER_CONTENT, FOOTER_FEATURE_LINKS, FOOTER_BLOG_LINKS } from '@/constants/navigation';
import {SOCIAL_MEDIA } from '@/constants/social-media';
import { LOGO } from '@/constants/image';
import { keyifier } from '@/lib/utils/keyifier';
import Link from 'next/link';
import { Convertkit } from '@/components/compound/convertkit';
import Image from 'next/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';

// export const MainFooter = () => (
//   <>
//     <footer className="py-12 sm:py-16 lg:py-20 relative z-[1] border-t-1 border-ui-border shadow-4">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-2">
//         <div className="md:flex md:items-start md:justify-between">
//           <div className="flex flex-col justify-start pt-16 sm:mr-16 items-center">
//             <h5 className="max-w-xl text-3xl font-bold  sm:text-4xl xl:text-5xl font-pj tracking-tightest">{FOOTER_CONTENT.TITLE.text}</h5>
//             <h6 className="max-w-xl text-lg  mt-4">{FOOTER_CONTENT.SUBTITLE.text}</h6>
//             <hr className="mt-12 border-subtle-border md:mt-20 mr-4" />
//             <div className="mt-10 lg:flex lg:items-center lg:justify-between md:mt-16">
//               <ul className="flex items-center space-x-6 sm:space-x-12">
//                 {FOOTER_LINKS.map((nl: NavLinkType, i: number) => (
//                   <li key={keyifier(nl.text, i)}>
//                     <Link
//                       href={nl.path}
//                       title={nl.text}
//                       className="text-lg font-medium transition-all duration-200 font-pj hover:text-gray-300"
//                     >
//                       {nl.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <p className="mt-8 text-lg font-normal text-white lg:mt-0 font-pj">{FOOTER_CONTENT.MESSAGE.text}</p>
//             </div>
//           </div>
//           <Convertkit />
//           <div className="max-w-sm mt-8 md:mt-0"></div>
//         </div>
//       </div>
//     </footer>
//   </>
// );

export const MainFooter = () => {
  return (
    <footer className="py-10 bg-gray-900 sm:pt-16 lg:pt-24 relative z-[1]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          <div>
            <p className="text-base  text-white font-bold">{FOOTER_CONTENT.TITLE.text}</p>

            <ul className="mt-8 space-y-4">
              {FOOTER_LINKS.map((nl: NavLinkType, i: number) => (
                <li key={keyifier(nl.text, i)}>
                  <Link
                    href={nl.path}
                    title={nl.text}
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {nl.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-base text-white font-bold">Features</p>

            <ul className="mt-8 space-y-4">
              {FOOTER_FEATURE_LINKS.map((nl: NavLinkType, i: number) => (
                <li key={`footer-feature-link-${nl.path}`}>
                  <Link
                    href={nl.path}
                    title={nl.description}
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {nl.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-base  text-white font-bold">Blog</p>

            <ul className="mt-8 space-y-4">
              {FOOTER_BLOG_LINKS.map((nl: NavLinkType, i: number) => (
                <li key={`footer-blog-link-${nl.path}`}>
                <Link
                    href={nl.path}
                    title={nl.description}
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {' '}
                    {nl.text}{' '}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <p className="text-base text-gray-500">Extra Links</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {' '}
                  Customer Support{' '}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {' '}
                  Delivery Details{' '}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {' '}
                  Terms & Conditions{' '}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {' '}
                  Privacy Policy{' '}
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">

          <Image
            className="h-8 auto md:order-1 !rounded-full"
            src={LOGO}
            alt="Blogging Platforms logo"
            fill
            />
            </div>

          <ul className="flex items-center space-x-3 md:order-3">
            <li>
              <a
                href={SOCIAL_MEDIA.TWITTER}
                title=""
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </li>


            <li>
              <a
                href={SOCIAL_MEDIA.GITHUB}
                title=""
                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © Copyright 2024, All Rights Reserved by Blogging Platforms
          </p>
        </div>
      </div>
    </footer>
  );
};
