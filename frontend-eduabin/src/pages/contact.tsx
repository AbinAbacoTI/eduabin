import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'
import { motion as m } from 'framer-motion'
import Slider from 'components/ui/Slider'
import CardCourse from '../components/Cards/CardCourse/index'

const Contact = () => {
  const images = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
    '/images/image4.jpeg'
  ]

  return (
    <Layout>
      {/* <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Contacto</p>
            <span>Home / Contacto</span>
          </div>
        </div>
      </section> */}
      <div className='py-20'>
        <Slider>
          <div className='p-10'>
          <CardCourse/>
          </div>
          <div className='p-10'>
          <CardCourse/>
          </div>
          <div className='p-10'>
          <CardCourse/>
          </div>
        </Slider>
      </div>
    </Layout>
  )
}

export default Contact
