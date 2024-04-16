import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    gtag: any;
  }
}

export const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      /* invoke analytics function only for production */
      if (window && window.gtag) {
        window.gtag('event', 'page_view', {
          time: new Date(),
          page_location: window.location.href,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
};
