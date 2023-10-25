import Link from 'next/link';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];

export type BreadcrumbLink = {
  name: string;
  href: string;
  current: boolean;
  title?: string;
};

export type Props = {
  links: BreadcrumbLink[];
};

export function Breadcrumb(props: Props) {
  return (
    <nav className="flex my-4" aria-label="Breadcrumb">
      <ol className="flex items-center">
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
        {props.links.map((page) => (
          <li key={page.name}>
            <div className="flex items-center whitespace-nowrap">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
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
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
