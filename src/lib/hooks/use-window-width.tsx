import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [screenSize, setScreenSize] = useState<number>(0); //      S | M | L

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
  useEffect(() => {
    // Once screenSize changed this will be fired
    if (window) {
      if (screenSize === 0) {
        setScreenSize(window.innerWidth);
      }
    }
  },[]);
  return screenSize;
}
// const vw = useWindowWidth()
