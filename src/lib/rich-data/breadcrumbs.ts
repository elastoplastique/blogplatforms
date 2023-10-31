export function generateBreadcrumbs(data: BreadcrumbLink[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.map((item, index) => {
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.href,
      };
    }),
  };
}
