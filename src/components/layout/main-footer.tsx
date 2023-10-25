import { FOOTER_LINKS, FOOTER_CONTENT } from '@/constants/navigation';
import { keyifier } from '@/lib/utils/keyifier';
import Link from 'next/link';
import { Convertkit } from '@/components/compound/convertkit';

export const MainFooter = () => (
  <>
    <footer className="py-12 sm:py-16 lg:py-20 relative z-[1] border-t-1 border-ui-border shadow-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-2">
        <div className="md:flex md:items-start md:justify-between">
          <div className="flex flex-col justify-start pt-16 sm:mr-16 items-center">
            <h5 className="max-w-xl text-3xl font-bold  sm:text-4xl xl:text-5xl font-pj tracking-tightest">{FOOTER_CONTENT.TITLE.text}</h5>
            <h6 className="max-w-xl text-lg  mt-4">{FOOTER_CONTENT.SUBTITLE.text}</h6>
            <hr className="mt-12 border-subtle-border md:mt-20 mr-4" />
            <div className="mt-10 lg:flex lg:items-center lg:justify-between md:mt-16">
              <ul className="flex items-center space-x-6 sm:space-x-12">
                {FOOTER_LINKS.map((nl: NavLinkType, i: number) => (
                  <li key={keyifier(nl.text, i)}>
                    <Link
                      href={nl.path}
                      title={nl.text}
                      className="text-lg font-medium transition-all duration-200 font-pj hover:text-gray-300"
                    >
                      {nl.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-normal text-white lg:mt-0 font-pj">{FOOTER_CONTENT.MESSAGE.text}</p>
            </div>
          </div>
          <Convertkit />
          <div className="max-w-sm mt-8 md:mt-0"></div>
        </div>
      </div>
    </footer>
  </>
);
