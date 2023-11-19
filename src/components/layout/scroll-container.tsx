import { useEffect, useState, useRef } from 'react';
import { useTransform, motion, useScroll, useSpring } from 'framer-motion';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - (window ? window.innerHeight : 0));
  });
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [contentRef]);
  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div className="scrollBody" style={{ y }} ref={contentRef}>
        {children}
      </motion.div>
    </>
  );
}
