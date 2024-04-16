'use client';
import { useCallback } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme]);

  return (
    <div className="relative h-[1.6rem] w-[1.6rem] cursor-pointer" onClick={toggleTheme}>
      <svg
        width="24"
        height="24"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  m-1 text-xl flex items-center justify-center"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.75V4.25"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L16.0659 7.93416"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.25 12.0001L19.75 12.0001"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 17.2501L16.0659 16.066"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19.75V21.25"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.9341 16.0659L6.74996 17.25"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.25 12.0001L2.75 12.0001"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.93405 7.93423L6.74991 6.75003"
        ></path>
      </svg>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 m-1"
      >
        <path
          d="M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.41 8.41 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79Z"
          fill="#292D32"
        />
      </svg>

      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
