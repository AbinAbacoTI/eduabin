import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import "swiper/css";
import "swiper/css/navigation"

SwiperCore.use([ Navigation ])

export default function Carousel () {
  return (
    <>
      <Swiper navigation={ true }
              className="w-11/12 h-600 rounded-lg">
        <SwiperSlide>
          <Image src="https://edu.abin.world/wp-content/uploads/2022/01/001-edu-abin.jpg"
            alt="Slider image 1"
            layout="fill"
            className="object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://edu.abin.world/wp-content/uploads/2022/01/001-edu-abin.jpg"
              alt="Slider image 2"
              layout="fill"
              className="object-cover"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}