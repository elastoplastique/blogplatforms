import { ASSETS_DIRECTORY } from '@/constants/assets-directory';
import Image from 'next/image';
import { useTheme } from 'next-themes'


export const MultiLogo = ({ light, dark, alt, size = 40 }: { light: string, dark: string, alt: string, size: number }) => {
   const { theme, setTheme } = useTheme()
   const src = theme === 'dark' ? dark : light
   return (
      <Image
         src={src}
         alt={alt}
         width={size}
         height={size}
         className="inline-block"
      />
   )
}


export const Logo = ({ size = 40 }: { size?: number }) => {
   return (
      <MultiLogo
         dark={ASSETS_DIRECTORY.ASSETS + '/bloggingplatforms-black.png'}
         light={ASSETS_DIRECTORY.ASSETS + '/bloggingplatforms-white.png'}
         alt="BloggingPlatforms.app Logo"
         size={size}
      />
   )
}
export const WhiteLogo = ({ size = 40, color }: { size?: number, color?: "black" | "white" }) => {
   const white = ASSETS_DIRECTORY.ASSETS + '/bloggingplatforms-white.png'

   return (
      <MultiLogo
         dark={white}
         light={white}
         alt="BloggingPlatforms.app Logo"
         size={size}
      />
   )
}