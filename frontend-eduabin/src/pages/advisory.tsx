import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'

const Advisory = () => {
  return (
    <Layout>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Asesorias</p>
            <span>Home / Asesoria</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Advisory
