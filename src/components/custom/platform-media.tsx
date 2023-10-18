import { Swiper } from "@/components/compound/swiper";
import type { SwiperMedia } from "@/components/compound/swiper";


type Props = {
  media: SwiperMedia[];
}

export const PlatformMedia = (props: Props) => {
  console.log("props.media", props.media)
  return (
    <div className="relative w-full h-full">
      <Swiper media={props.media} />
    </div>
  )
}