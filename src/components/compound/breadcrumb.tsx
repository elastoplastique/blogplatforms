import Link from 'next/link';
import { motion } from 'framer-motion';
import {useWindowWidth} from '@/lib/hooks/use-window-width';

export type Props = {
  links: BreadcrumbLink[];
};

export function Breadcrumb(props: Props) {
  const vw = useWindowWidth();

  return (
    <motion.nav className="flex my-4" aria-label="Breadcrumb">
      <ol className="flex flex-row flex-wrap  items-center justify-start sm:justify-center">
        <motion.li layoutId="breadcrumb-link-home">
          <div>
            <Link
              href="https://bloggingplatforms.app"
              className="!text-gray-400 text-sm hover:text-gray-500 border-b-1 whitespace-nowrap breadcrumb-link"
              title="Best Blogging Platforms"
            >
              <span title="Best Blogging Platforms">Blogging Platforms</span>
            </Link>
          </div>
        </motion.li>
        {props.links.map((page, i) => (
          <motion.li key={page.name} layoutId={`breadcrumb-link-${i}`}>
            <div className="flex items-center whitespace-nowrap my-2">
              <svg
                className="flex-shrink-0 h-5 w-4 text-gray-300 mx-[0.2px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={page.href}
                className={
                  page.current
                    ? 'breadcrumb-link ml-[0.5px] !text-gray-400 hover:text-gray-500 text-sm'
                    : 'breadcrumb-link ml-[0.5px] !text-gray-400 hover:text-gray-500 border-b-1 text-sm'
                }
                aria-current={page.current ? 'page' : undefined}
                title={page.title || page.name}
              >
                {vw < 640 ? page.name : page.name.length > 30 ? `${page.name.slice(0, 30)}...` : page.name}
              </Link>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.nav>
  );
}
