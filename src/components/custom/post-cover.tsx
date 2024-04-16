import { AspectRatio } from '@/components/ui';
import Image from 'next/image';
import { externalImageLoader } from '@/lib/utils/external-image-loader';

export const PostCover = ({ title, src }: { title: string; src: string }) => (
  <AspectRatio ratio={16 / 9} style={{ width: '100%', height: '100%', minHeight: 200, position: 'relative' }}>
    <Image
      src={src}
      alt={title}
      className="rounded-lg content-auto"
      loading="lazy"
      width={784}
      height={784 * (9 / 16)}
      loader={externalImageLoader}
    />
  </AspectRatio>
);
