import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import rehypeStringify from 'rehype-stringify';
// import relativeLinks from "remark-relative-links";
import rehypeSanitize from 'rehype-sanitize';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import type { Plugin } from 'unified';

// Run `npm install --save-dev @types/remark-relative-links` in your terminal to install the missing type declaration

// const plugin: Plugin = relativeLinks as any;

import matter from 'gray-matter';

export function markdownify(content: string) {
  // frontmatter data
  const { data: frontMatter } = matter(content);
  // console.log("frontMatter", frontMatter);
  const file = unified()
    // .use(relativeLinks, {
    //   domainRegex: /http[s]*:\/\/[www.]*theforcemajeure\.com[/]?/,
    // })
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkMdx)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .processSync(content);

  return { frontMatter: JSON.stringify(frontMatter), content: String(file) };
}
