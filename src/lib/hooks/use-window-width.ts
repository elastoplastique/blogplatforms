import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [screenSize, setScreenSize] = useState(0); //      S | M | L

  const screenListener = () => {
    const currentSize = window.innerWidth;
    //if size (not width) is changed, then change state
    if (screenSize != currentSize) {
      setScreenSize(currentSize);
    }
  };

  useEffect(() => {
    // Once screenSize changed this will be fired
    window.addEventListener('resize', screenListener);
    // for removing repeatedly rendering
    return () => {
      window.removeEventListener('resize', screenListener);
    };
  });
  return screenSize;
}
