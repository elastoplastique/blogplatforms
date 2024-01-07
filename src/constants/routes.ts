export type Route = { path: string, label: string };

export const ROUTES: { [key: string]: Route } = {
  DOMAIN: { path: 'https://bloggingplatforms.app', label: 'Blogging Platforms' },
  HOME: { path: '/', label: 'Home' },
  PLATFORMS_DIRECTORY: { path: '/platforms', label: 'Platforms' },
  FEATURES_DIRECTORY: { path: '/features', label: 'Features' },
  BLOG_POST_DIRECTORY: { path: '/blog', label: 'Blog' },
  US_DIRECTORY: { path: '/us', label: 'US' },
  ABOUT: { path: '/us/about', label: 'About' },
  PRIVACY_POLICY: { path: '/us/privacy-policy', label: 'Privacy Policy' },
  TOS: { path: '/us/terms-of-service', label: 'Terms of Service' },
  LOGIN: { path: '/profile/login', label: 'Login' },
  SIGNUP: { path: '/profile/signup', label: 'Signup' },
  AUTH_LOGIN: { path: '/api/auth/login', label: 'Login' },
};
export const STATIC_ROUTES = [ROUTES.ABOUT, ROUTES.PRIVACY_POLICY, ROUTES.TOS];