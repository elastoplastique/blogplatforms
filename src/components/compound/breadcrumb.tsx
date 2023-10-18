const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];

export type BreadcrumbLink = {
  name: string;
  href: string;
  current: boolean;
};

export type Props = {
  links: BreadcrumbLink[];
};

export function Breadcrumb(props: Props) {
  return (
    <nav className="flex my-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="https://blogplatforms.app" className="!text-gray-400 hover:text-gray-500 border-b-1">
              Blog Platforms
            </a>
          </div>
        </li>
        {props.links.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a href={page.href} className="ml-4 !text-gray-400 hover:text-gray-500" aria-current={page.current ? 'page' : undefined}>
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
