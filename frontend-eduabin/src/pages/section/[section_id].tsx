import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'

const Section = () => {
  return (
    <Layout>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Nombre de seccion</p>
            <span>Home / nombre de seccion</span>
          </div>
        </div>
      </section>
      {/* List todas las categorias de la seccion
        las categorias tienen que tener sus sectores
      */}
    </Layout>
  )
}

export default Section
