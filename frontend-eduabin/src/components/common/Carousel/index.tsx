import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

SwiperCore.use([Navigation])

export default function Carousel () {
  return (
    <>
      <Swiper navigation={ true }
              className="w-full h-700">
        <SwiperSlide>
          <Image src="/images/homeSlider01.jpg"
            alt="Slider image 1"
            layout="fill"
            className="object-cover"/>
            {/* <div className='h-full relative border-2 border-gray-700 py-20 px-10'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa perspiciatis numquam accusantium tempore illum voluptatum ab ess</p>
            </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://edu.abin.world/wp-content/uploads/2022/01/portadas3_Mesa-de-trabajo-1-1024x294.jpg"
              alt="Slider image 2"
              layout="fill"
              className="object-cover"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
