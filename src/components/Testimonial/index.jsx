import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import TestimonialItem from "./testimonialItem";

export default function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-tertiary-300">
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="relative"
          >

            <SwiperSlide>
              <TestimonialItem/>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
