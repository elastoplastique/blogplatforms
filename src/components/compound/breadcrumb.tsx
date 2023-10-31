import Link from 'next/link';

export type Props = {
  links: BreadcrumbLink[];
};

export function Breadcrumb(props: Props) {
  return (
    <nav className="flex my-4" aria-label="Breadcrumb">
      <ol className="flex flex-row  items-center justify-start sm:justify-center">
        <li>
          <div>
            <Link
              href="https://blogplatforms.app"
              className="!text-gray-400 text-sm hover:text-gray-500 border-b-1 whitespace-nowrap"
              title="Best Blog Platforms"
            >
              Blog Platforms
            </Link>
          </div>
        </li>
        {props.links.map((page, i) => (
          <li key={page.name}>
            <div className="flex items-center whitespace-nowrap my-2">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300 mx-2"
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
          </li>
        ))}
      </ol>
    </nav>
  );
}
