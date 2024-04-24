import Link from 'next/link';
import { motion } from 'framer-motion';
import { useWindowWidth } from '@/lib/hooks/use-window-width';

export type Props = {
  links: BreadcrumbLink[];
};

export function Breadcrumb(props: Props) {
  const vw = useWindowWidth();

  return (
    <motion.nav className="flex my-4" aria-label="Breadcrumb" id="breadcrumb-id">
      <ol className="flex flex-row sm:flex-row flex-wrap sm:flex-nowrap sm:items-center justify-center sm:justify-start">
        <motion.li layoutId="breadcrumb-link-home  my-2">
          <div className="min-h-[30px]">
            <Link
              href="https://bloggingplatforms.app"
              className="!text-gray-400 text-sm hover:text-gray-500 whitespace-nowrap breadcrumb-link  min-h-[30px]"
              title="Best Blogging Platforms"
            >
              <span title="Best Blogging Platforms">Blogging Platforms</span>
            </Link>
          </div>
        </motion.li>
        {props.links.map((page, i) => (
          <motion.li key={page.name} layoutId={`breadcrumb-link-${i}`} className="breadcrumb-link">
            <div className="flex items-center  justify-center sm:justify-start sm:whitespace-nowrap min-h-[30px]">
              {<svg
                className="flex-shrink-0 h-5 w-4 text-gray-300 mx-[0.2px] breadcrumb-separator"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg> 
              }
              <Link
                href={page.href}
                className={
                  page.current
                    ? 'breadcrumb-link ml-[0.5px] !text-gray-400 hover:text-gray-500 text-sm text-center'
                    : 'breadcrumb-link ml-[0.5px] !text-gray-400 hover:text-gray-500 text-sm  text-center'
                }
                aria-current={page.current ? 'page' : undefined}
                title={page.title || page.name}
              >
                {page.name}
                {/* <span className="">{vw > 640 ? page.name : page.name.length > 60 ? `${page.name.slice(0, 60)}` : page.name}</span> */}
              </Link>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.nav>
  );
}
