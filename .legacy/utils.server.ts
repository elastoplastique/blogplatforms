import fs from 'fs';
import path from 'path';
import { markdownify } from '../markdownify';
import { BLOG_PLATFORMS_DIR } from '@/constants/content'



// brings a list of filenames from a directory
export const getDirectoryFilenames = (directory: string = BLOG_PLATFORMS_DIR): string[] => {
      const filenames = fs.readdirSync(directory);
      return filenames.map((filename) => path.join(directory, filename));
}



// get static paths composed of slugs from the content directory
export const getPathsOfStaticPaths = (directory: string = BLOG_PLATFORMS_DIR): StaticPaths[] => {
      const filenames = getDirectoryFilenames(directory);
      return filenames.map((filename) => {
            const slug = filename.replace(/\.mdx?$/, '').replace(/^.+\/([^/]+)\/index$/, '$1');
            return ({ params: { slug } });
      });
}


// get content of all posts: frontmatter and slug
export const getAllPostsContent = (directory: string = BLOG_PLATFORMS_DIR): FullContent[] => {
      const filenames = getDirectoryFilenames(directory);

      return filenames.map((filename) => {
            const slug = filename.split("/")[filename.split("/").length - 1].replace(/\.mdx?$/, '').replace(/^.+\/([^/]+)\/index$/, '$1');
            const file = fs.readFileSync(filename, 'utf-8');
            const { frontMatter, content } = markdownify(file);
            return ({
                  frontMatter: {
                        ...JSON.parse(frontMatter),
                        slug
                  },
                  content
            });
      });
}

export const getAllFrontMatters = (directory: string = BLOG_PLATFORMS_DIR): FrontMatter[] => {
      const allContents = getAllPostsContent(directory);
      return allContents.map(({ frontMatter }) => frontMatter);
}

export const getPostContentFromSlug = (slug: string, directory: string = BLOG_PLATFORMS_DIR): FullContent => {
      const filename = path.join(directory, `${slug}.mdx`);
      const file = fs.readFileSync(filename, 'utf-8');
      const { frontMatter, content } = markdownify(file);
      return ({
            frontMatter: {
                  ...JSON.parse(frontMatter),
                  slug
            },
            content
      });
}