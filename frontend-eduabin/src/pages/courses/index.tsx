import Layout from 'components/common/Layouts/Layout'
import Link from 'components/ui/Link'
import { getCourses, getCoursesSector } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from '../../rdx/store/index'
import { Tab } from '@headlessui/react'
import { ICourses } from '../../interfaces/course.interface'
import Card from 'components/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

const Courses = () => {
  return (
    <Layout>
      <div className='container mx-auto px-10'>
        <section className='pt-10 flex justify-center'>
          <div className='w-3/4 h-64 border-2 border-gray-700 rounded-lg flex items-center'>
            <div className='p-8'>
              <div>
                <h2 className='text-2xl font-semibold'>Nombre de la promocion del curso que se esta mostrando</h2>
              </div>
              <div className='w-2/3 mt-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit in harum vero rerum impedit nisi ipsam, autem, sint magni corrupti dolore. Rerum corrupti laboriosam dolorem officiis totam ut in.</p>
              </div>
              <div className='mt-3'>
                <button className='py-2 px-10 border-2 border-gray-700'>Ver curso</button>
              </div>
            </div>
          </div>
        </section>
        <section className='mx-10 my-10'>
          <div>
            <div className='px-20'>
              <h1 className='text-3xl'>Cursos</h1>
            </div>
            <div>
              <div className='flex flex-wrap'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </section>
        <section className='my-10'>
          <div className='px-56'>
            <Tab.Group>
              <Tab.List className='border-b-2'>
                <Tab className={({ selected }) => `border-orange-eduabin text-orange-eduabin py-2 px-5 ${selected ? 'border-b-4' : 'border-b-2'}`}>Marketing</Tab>
                <Tab className={({ selected }) => `border-orange-eduabin text-orange-eduabin py-2 px-5 ${selected ? 'border-b-4' : 'border-b-2'}`}>Emprendimiento</Tab>
              </Tab.List>
              <Tab.Panels className='p-4'>
                <Tab.Panel>
                  <div className='flex justify-between'>
                    <Card name='marketing 1' />
                    <Card name='marketing 2' />
                    <Card name='marketing 3' />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className='flex justify-between'>
                    <Card name='emprendimiento 1' />
                    <Card name='emprendimiento 2' />
                    <Card name='emprendimiento 3' />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </div>
      <section className='my-10 py-10 bg-orange-eduabin'>
        <div className='px-32'>
          <p className='text-white text-base text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis pariatur voluptates illo optio corrupti voluptatum dignissimos minima, delectus in nam laudantium tempore facilis ea quo fugiat. Rerum eveniet reprehenderit assumenda!</p>
        </div>
      </section>
      <div className='container mx-auto px-20'>
        <section className='my-10'>
          <div className='px-20'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className='mySwiper'
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </Layout>
  )
}

/* export const getServerSideProps = eduAbinWrapper.getServerSideProps(({ dispatch, getState }) => async () => {
  await dispatch(getCourses())
  const { courses } = getState().courseRdc
  return {
    props: {
      courses
    }
  }
}) */
export default Courses
