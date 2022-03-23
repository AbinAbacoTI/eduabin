import { Layout } from 'components/common/Layouts'
import { NextPage } from 'next'
import Image from 'next/image'
import { CartList, OrdenSummary } from '../../components/common/Cart'

const CartPage: NextPage = () => {
  return (
    <Layout title='Cart' description='Cart Page'>
      <div>
        <section className='w-full h-400 relative'>
          <Image src={'/images/bg202203.jpg'}
            layout='fill'
            className='object-bottom object-cover pointer-events-none brightness-50'
          />
          <div className='h-full py-16 relative z-1 flex items-center justify-center'>
            <div className='px-20 text-white text-center'>
              <h1 className='text-4xl uppercase'>Tu carrito</h1>
              <span>Home / Carrito</span>
            </div>
          </div>
        </section>

        <div className='container mx-auto px-10 py-10'>
          <section className='h-auto'>
            <div className='flex justify-around py-10'>
              <div className='w-3/5'>
                <CartList />
              </div>
              <div className='w-2/5 p-5'>
                <div className='border-2 shadow-lg rounded-md p-5'>
                  <div className=''>
                    <h2 className='text-xl font-semibold'>Resumen</h2>
                  </div>
                  <hr className='my-2 border-gray-500' />
                  <div>
                    <OrdenSummary/>
                  </div>
                  <div>
                    <button
                      className='w-full h-10 border-2 border-orange-eduabin bg-orange-eduabin text-white font-semibold rounded-lg hover:bg-transparent hover:text-orange-eduabin transition-all duration-100'
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
