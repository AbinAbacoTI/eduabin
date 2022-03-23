import Image from 'next/image'
import { Layout } from 'components/common/Layouts'
import Carousel from '../components/common/Carousel'
import CardCourse from 'components/Cards/CardCourse'
import Link from 'components/ui/Link'
import { useSections } from 'hooks'

export default function Home () {
  const { sections, isLoading, isError } = useSections()
  return (
    <Layout title='Inicio' description='Home Page'>
      <section>
        <Carousel />
      </section>
      <div className='container mx-auto px-20'>
        <section className='my-10 border-2 flex justify-center'>
          <div className='w-4/6 h-60 grid grid-cols-4 gap-2'>
          {
              sections.map(section => (
                <Link href={`section/${section.section_uuid}`}
                  key={`section-key-${section.section_uuid}`}
                  className='border-2 col-span-2 rounded-md relative h-60'
                >
                <Image src={section.section_image}
                  layout='fill'
                  className='object-bottom object-cover pointer-events-none brightness-50'
                />
                <div className='relative h-full flex justify-center items-end hover:bg-blue-transparent transition-all duration-150'>
                  <div className='mb-6'>
                    <h2 className='text-white text-xl'>{ section.name_section }</h2>
                  </div>
                </div>
              </Link>
              ))
            }
          </div>
        </section>
        <section className='border'>
          <div className='flex flex-wrap justify-evenly'>
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </div>
        </section>

      </div>
      <section className='my-10 bg-orange-500 py-20 px-20'>
        <div className='flex justify-around'>
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </div>
      </section>

      <section className='w-full h-52 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='flex h-full py-16 relative z-1'>
          <div className='px-20 text-white w-9/12'>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, provident ipsum ducimus ut aperiam illo hic dicta, fugit et aliquam nulla soluta !</p>
          </div>
          <div className='w-1/4'>
            <button className='border-2 py-3 px-16 text-lg bg-orange-eduabin text-white font-semibold border-orange-eduabin hover:bg-transparent uppercase rounded-lg transition-all duration-200'>Ver mas</button>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-20'>
        <section className='my-10'>
          <div className='grid grid-cols-4 gap-3 px-10'>
            <div className='border-2 col-span-2 w-full h-96 relative'>
              <Image src="/images/homeSlider01.jpg"
                alt="Slider image 1"
                layout="fill"
                className="object-cover" />
              <div className='p-10 relative'>
                <span className='text-white text-2xl'>Nombre del evento</span>
              </div>
            </div>
            <div className='border-2 relative'>
              <Image src="/images/homeSlider01.jpg"
                alt="Slider image 1"
                layout="fill"
                className="object-cover" />
              <div className='p-10 relative'>
                <span className='text-white text-2xl'>Nombre del evento</span>
              </div>
            </div>
            <div className='border-2 relative'>
              <Image src="/images/homeSlider01.jpg"
                alt="Slider image 1"
                layout="fill"
                className="object-cover" />
              <div className='p-10 relative'>
                <span className='text-white text-2xl'>Nombre del evento</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
