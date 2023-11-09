// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Swiper as SwiperJS, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Pagination, Parallax } from 'swiper/modules';
import { slugify } from '@/lib/utils/slugify';

export type SwiperMedia = {
  type: 'IMAGE' | 'VIDEO';
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
};

export type Props = {
  media: SwiperMedia[];
};

export function Swiper(props: Props): JSX.Element {
  const swiperParameters = {
    modules: [A11y, Autoplay, Keyboard, Pagination, Parallax],
    threshold: 5,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    autoplay: { enabled: false },
    grabCursor: true,
    pagination: true,
    parallax: { enabled: true },
    speed: 600,
    keyboard: { enabled: true },
  };
  return (
    <SwiperJS {...swiperParameters} style={{ maxWidth: '100%', overflow: 'hidden', zIndex: 20, position: 'relative' }}>
      {props.media.map((item: SwiperMedia, index: number) => (
        <SwiperSlide key={`${slugify(item.title)}-${index}`} className="swiper-slide">
          {item.type === 'IMAGE' ? (
            <img
              alt={item.alt || item.title || item.description || 'Slide Image'}
              className="swiper-slide-image"
              data-swiper-parallax="10%"
              src={item.src}
            />
          ) : (
            <video
              id={item.src}
              className="video-js"
              preload={'none'}
              width={'100%'}
              controls={true}
              height={'auto'}
              poster={item.settings.posters.length > 0 ? item.settings.posters[0].url : ''}
              autoPlay={false}
            >
              <source src={item.src} type={`video/m3u8`} />
            </video>
          )}

          <div className="swiper-slide-content">
            <div className="swiper-slide-title" data-swiper-parallax="-100">
              {item.title}
            </div>

            <div className="swiper-slide-text" data-swiper-parallax="-200">
              {item.description}
            </div>
            <div>
              {item.linkText && item.link && (
                <a rel="nofollow noopener" href={item.link}>
                  {item.linkText}
                </a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperJS>
  );
}
