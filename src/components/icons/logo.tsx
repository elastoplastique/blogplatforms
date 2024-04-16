import { useId, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const blackLogo = require('../../../public/assets/bloggingplatforms-black.png');
const whiteLogo = require('../../../public/assets/bloggingplatforms-white.png');

export const MultiLogo = ({ light, dark, alt, size = 40 }: { light: string; dark: string; alt: string; size: number }) => {
  const { theme, setTheme } = useTheme();
  const [src, setSrc] = useState<string>(light);
  const logoId = useId();

  useEffect(() => {
    const newTheme = theme === 'light' ? dark : light;
    if (newTheme !== src) {
      setSrc(newTheme);
    }
  }, [theme, src, light, dark]);

  return <Image id={logoId} src={src} alt={alt} width={size} height={size} className="inline-block" />;
};

export const Logo = ({ size = 40 }: { size?: number }) => {
  return <MultiLogo dark={blackLogo} light={whiteLogo} alt="BloggingPlatforms.app Logo" size={size} />;
};
export const WhiteLogo = ({ size = 40, color }: { size?: number; color?: 'black' | 'white' }) => {
  const white = whiteLogo;
  return <MultiLogo dark={white} light={white} alt="BloggingPlatforms.app Logo" size={size} />;
};
