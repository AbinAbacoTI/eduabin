import Card from 'components/Card'
import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'
import Carousel from '../components/common/Carousel'
import { faPhotoVideo, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home () {
  return (
    <Layout>
      <section>
        <Carousel />
      </section>
      <div className='container mx-auto px-20'>
        <section className='my-10'>
          <div>
            <h2 className='text-3xl text-center text-orange-eduabin font-semibold'>Bienvenido a EduAbin</h2>
          </div>
          <div className='px-40 py-10'>
            <p className='text-center text-lg text-gray-eduabin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur repellendus, tenetur nostrum enim, cum consectetur quaerat voluptate eum quod corrupti voluptatem, architecto eos? Perferendis fugiat repellat dolorem atque, at id.</p>
          </div>
        </section>
        <section className='my-10'>
          <div className='flex justify-around my-5'>
            <div className='w-48 h-48 rounded-lg border-2 bg-white-ext shadow-lg flex flex-col justify-center items-center text-center hover:bg-white cursor-pointer'>
              <div className='w-full'>
                <FontAwesomeIcon icon={faPhotoVideo} className='text-orange-eduabin text-6xl' />
              </div>
              <div className='w-full mt-5'>
                <h3 className='text-base font-semibold text-gray-900'>Nombre de categoria</h3>
              </div>
            </div>
            <div className='w-48 h-48 rounded-lg border-2 bg-white-ext shadow-lg flex flex-col justify-center items-center text-center hover:bg-white cursor-pointer'>
              <div className='w-full'>
                <FontAwesomeIcon icon={faPhotoVideo} className='text-orange-eduabin text-6xl' />
              </div>
              <div className='w-full mt-5'>
                <h3 className='text-base font-semibold'>Nombre de categoria</h3>
              </div>
            </div>
            <div className='w-48 h-48 rounded-lg border-2 bg-white-ext shadow-lg flex flex-col justify-center items-center text-center hover:bg-white cursor-pointer'>
              <div className='w-full'>
                <FontAwesomeIcon icon={faPhotoVideo} className='text-orange-eduabin text-6xl' />
              </div>
              <div className='w-full mt-5'>
                <h3 className='text-base font-semibold'>Nombre de categoria</h3>
              </div>
            </div>
            <div className='w-48 h-48 rounded-lg border-2 bg-white-ext shadow-lg flex flex-col justify-center items-center text-center hover:bg-white cursor-pointer'>
              <div className='w-full'>
                <FontAwesomeIcon icon={faPhotoVideo} className='text-orange-eduabin text-6xl' />
              </div>
              <div className='w-full mt-5'>
                <h3 className='text-base font-semibold'>Nombre de categoria</h3>
              </div>
            </div>
            <div className='w-48 h-48 rounded-lg border-2 bg-white-ext shadow-lg flex flex-col justify-center items-center text-center hover:bg-white cursor-pointer'>
              <div className='w-full'>
                <FontAwesomeIcon icon={faPhotoVideo} className='text-orange-eduabin text-6xl' />
              </div>
              <div className='w-full mt-5'>
                <h3 className='text-base font-semibold'>Nombre de categoria</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='px-10 my-16'>
            <h2 className='text-orange-eduabin text-4xl font-bold text-center'>Nuestros cursos</h2>
          </div>
          <div className='flex flex-wrap'>
            <Card name='Curso sin nombre' publicCard={true} published={true} />
            <Card name='Curso sin nombre' />
            <Card name='Curso sin nombre' />
            <Card name='Curso sin nombre' />
            <Card name='Curso sin nombre' />
            <Card name='Curso sin nombre' />
            <Card name='Curso sin nombre' />
            <Card name='Curso sin nombre' />
          </div>
        </section>
        <section className='my-20'>
          <div className='flex justify-center'>
            <div className='w-5/6 h-96 rounded-xl flex overflow-hidden'>
              <div className='w-2/4 h-full relative'>
                <Image src={'/images/student-hello.jpg'}
                  layout='fill'
                  className='object-cover object-center'
                  objectFit='cover'
                />
              </div>
              <div className='w-2/4 h-full border-2 bg-orange-eduabin flex justify-center items-center'>
                <div className='text-white w-3/4 h-2/3'>
                  <div className='mb-2'>
                    <h2 className='text-3xl font-bold'>Promotion title for section</h2>
                  </div>
                  <div className='mb-4'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus saepe iusto culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro dolor dignissimos voluptatem itaque architecto facilis cupiditate, tempora harum aliquid ducimus culpa eos delectus, ipsum optio ipsa aut dolore placeat.</p>
                  </div>
                  <div>
                    <button className=' border-gray-900 bg-gray-900 py-2 px-8 rounded-md uppercase hover:bg-gray-700 transition-all duration-300 shadow-md'>
                      <span className='font-bold'>Saber mas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
        <section className='my-24'>
          <div className='flex justify-center'>
            <div className='w-3/4 flex'>
              <div className='w-3/6'>
                <div className='w-full px-2'>
                  <div className='w-full h-80 relative rounded-lg overflow-hidden'>
                    <Image src={'/images/student-hello.jpg'}
                      layout='fill'
                      objectFit='cover' />
                  </div>
                  <div className='p-5'>
                    <div>
                      <h1 className='text-2xl font-semibold text-orange-eduabin'>Title of Section</h1>
                    </div>
                    <div>
                      <p className='text-lg text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa quaerat odio aut at doloremque sint, rerum dolore iure minus nisi maiores enim nam non facere eos in libero veritatis!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-3/6'>
                <div className='w-full px-2 flex items-center'>
                  <div className='w-2/5 h-32 relative rounded-lg overflow-hidden'>
                    <Image src={'/images/student-hello.jpg'}
                      layout='fill'
                      objectFit='cover' />
                  </div>
                  <div className='p-5'>
                    <div>
                      <h1 className='text-lg font-semibold text-orange-eduabin'>Title of Section</h1>
                    </div>
                    <div className='w-72'>
                      <p className='text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa quaerat odio aut at doloremque sint, rerum dolore iure minus nisi maiores enim nam non facere eos in libero veritatis!</p>
                    </div>
                  </div>
                </div>
                <div className='w-full px-2 flex items-center'>
                  <div className='w-2/5 h-32 relative rounded-lg overflow-hidden'>
                    <Image src={'/images/student-hello.jpg'}
                      layout='fill'
                      objectFit='cover' />
                  </div>
                  <div className='p-5'>
                    <div>
                      <h1 className='text-lg font-semibold text-orange-eduabin'>Title of Section</h1>
                    </div>
                    <div className='w-72'>
                      <p className='text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa quaerat odio aut at doloremque sint, rerum dolore iure minus nisi maiores enim nam non facere eos in libero veritatis!</p>
                    </div>
                  </div>
                </div>
                <div className='w-full px-2 flex items-center'>
                  <div className='w-2/5 h-32 relative rounded-lg overflow-hidden'>
                    <Image src={'/images/student-hello.jpg'}
                      layout='fill'
                      objectFit='cover' />
                  </div>
                  <div className='p-5'>
                    <div>
                      <h1 className='text-lg font-semibold text-orange-eduabin'>Title of Section</h1>
                    </div>
                    <div className='w-72'>
                      <p className='text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa quaerat odio aut at doloremque sint, rerum dolore iure minus nisi maiores enim nam non facere eos in libero veritatis!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
