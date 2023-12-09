import Link from 'next/link';
import { motion } from 'framer-motion';

export type Props = {
  links: BreadcrumbLink[];
};

export function Breadcrumb(props: Props) {
  return (
    <motion.nav className="flex my-4" aria-label="Breadcrumb">
      <ol className="flex flex-row  items-center justify-start sm:justify-center">
        <motion.li layoutId="breadcrumb-link-home">
          <div>
            <Link
              href="https://bloggingplatforms.app"
              className="!text-gray-400 text-sm hover:text-gray-500 border-b-1 whitespace-nowrap"
              title="Best Blogging Platforms"
            >
              <strong title="Best Blogging Platforms">Blogging Platforms</strong>
            </Link>
          </div>
        </motion.li>
        {props.links.map((page, i) => (
          <motion.li key={page.name} layoutId={`breadcrumb-link-${i}`}>
            <div className="flex items-center whitespace-nowrap my-2">
              <svg
                className="flex-shrink-0 h-5 w-4 text-gray-300 mx-1"
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
                    ? 'ml-1 !text-gray-400 hover:text-gray-500 text-sm'
                    : 'ml-1 !text-gray-400 hover:text-gray-500 border-b-1 text-sm'
                }
                aria-current={page.current ? 'page' : undefined}
                title={page.title || page.name}
              >
                {!page.truncate ? page.name : page.name.length > 20 ? `${page.name.slice(0, 20)}...` : page.name}
              </Link>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.nav>
  );
}
