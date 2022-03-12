import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'

const Events = () => {
  return (
    <Layout>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Eventos - EduAbin</p>
            <span>Home / Eventos</span>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-10 py-10'>
        <div className='flex justify-center'>
          <div className='w-11/12 h-80 flex border-2'>
            <div className='w-2/5 h-full relative'>
              <Image src={'/images/bg202203.jpg'}
                layout='fill'
                className='object-bottom object-cover pointer-events-none brightness-50'
              />
            </div>
            <div className='w-3/5 p-10'>
              <div>
                <h1 className='text-3xl'>Successful Self Taping</h1>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quia dicta fuga repellat, ducimus odit sint reprehenderit deserunt </p>
              </div>
              <div>
                <span>Fecha</span>
              </div>
              <div>
                <span>Hora</span>
              </div>
              <div>
                <span>Ubicacion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Events
