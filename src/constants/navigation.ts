import { ROUTES } from './routes';

// EXISTS IN BOTH TOP-NAV NAD FOOTER
export const NAVLINKS: NavLinkType[] = [
  {
    path: '/',
    text: 'Home',
  },
];

export const FOOTER_LINKS: NavLinkType[] = [
  {
    path: ROUTES.FEATURES_DIRECTORY.path,
    text: ROUTES.FEATURES_DIRECTORY.label,
  },
  {
    path: ROUTES.BLOG_POST_DIRECTORY.path,
    text: ROUTES.BLOG_POST_DIRECTORY.label,
  },
  {
    path: ROUTES.ABOUT.path,
    text: ROUTES.ABOUT.label,
  },
  {
    path: ROUTES.PRIVACY_POLICY.path,
    text: ROUTES.PRIVACY_POLICY.label,
  },
  {
    path: ROUTES.TOS.path,
    text: ROUTES.TOS.label,
  },
];

export const FOOTER_CONTENT = {
  TITLE: {
    text: 'Blogging Platforms',
  },
  SUBTITLE: {
    text: 'The ultimate guide for choosing the best blogging platforms. Search and compare the best blogging platforms by features you need.',
  },
  MESSAGE: {
    text: '',
  },
};

export const FOOTER_FEATURE_LINKS: NavLinkType[] = [
  {
    path: '/features/ad-monetization',
    text: 'Ad Monetization',
    description: 'Blogging platforms supporting ad monetization',
  },
  {
    path: '/features/category-tag-system',
    text: 'Category & Tag System',
    description: 'Blog platforms supporting category & tag system',
  },
  {
    path: '/features/code-inject',
    text: 'Custom Code Injection',
    description: 'Blog platforms supporting custom code injection',
  },
  {
    path: '/features/comment-system',
    text: 'Comment System',
    description: 'Blog platforms supporting commenting',
  },
  {
    path: '/features/figma',
    text: 'Figma Integration',
    description: 'Blog platforms supporting Figma integration',
  },
  {
    path: '/features/headless',
    text: 'Headless Blogging Platforms',
    description: 'Headless blogging platforms',
  },
  {
    path: '/features/image-optimization',
    text: 'Image Optimization',
    description: 'Blog platforms supporting advanced image optimization',
  },
  {
    path: '/features/integrated-reader-base',
    text: 'Integrated Reader Base',
    description: 'Blog platforms have integrated reader base',
  },
  {
    path: '/features/open-source',
    text: 'Open-source Blogging Platforms',
    description: 'Open-source blogging platforms',
  },
  {
    path: '/features/markdown',
    text: 'Markdown Blogging Platforms',
    description: 'Markdown blogging platforms',
  },
  {
    path: '/features/sell-digital-products',
    text: 'Sell Digital Products',
    description: 'Blog platforms supporting selling digital products',
  },
];

export const FOOTER_BLOG_LINKS: NavLinkType[] = [
  {
    path: '/blog/best-free-platforms-for-blogging',
    text: 'Free Blogging Platforms',
    description: 'A list of the best free platforms for blogging',
  },
  {
    path: '/blog/best-blogging-platforms-for-developers',
    text: 'Blogging Platforms for Developers',
    description: 'A list of the best blogging platforms for developers',
  },
  {
    path: '/blog/best-blog-platforms-for-artists',
    text: 'Blogging Platforms for Artists',
    description: 'A list of the best blogging platforms for artists',
  },
  {
    path: '/blog/best-blog-sites-for-students',
    text: 'Blogging Sites for Students',
    description:
      "We'll discuss the features you should look for when choosing a platform, the benefits of blogging, and the best blog sites for students.",
  },
  {
    path: '/blog/blogging-platforms-for-photographers',
    text: 'Blogging Platforms for Photographers',
    description:
      'Before sharing your first blog post, one of the things you should pay attention to is how your blog posts and their URLs should be organized.',
  },
  {
    path: '/blog/blogging-platforms-for-writers',
    text: 'Blogging Platforms for Writers',
    description:
      'Discover the best blogging platforms for writers.',
  },
  {
    path: '/blog/features-to-look-for-in-a-blogging-platform',
    text: 'Must-Have Features for Blogging Platforms',
    description: 'Must have features to look for in a blogging platforms.',
  },
  {
    path: '/blog/blogging-platform-features',
    text: 'Blogging Platform Features',
    description: 'The list of blogging platform features.',
  },
  {
    path: '/blog/optimize-images-for-web',
    text: 'Optimize Images for the Web',
    description: 'A user guide to optimize images for the web.',
  },
  {
    path: '/blog/free-wordpress-blog',
    text: 'Free WordPress Blog with Custom Domain',
    description: 'A step-by-step guide to get a free WordPress blog with custom domain support.',
  },
];
