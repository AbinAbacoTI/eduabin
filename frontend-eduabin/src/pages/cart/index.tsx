import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Layout } from 'components/common/Layouts'
import Link from 'components/ui/Link'
import { CartContext } from 'context'
import { NextPage } from 'next'
import Image from 'next/image'
import { useContext } from 'react'
import { CartList, CartSummary } from '../../components/common/Cart'

const CartPage: NextPage = () => {
  const { numberOfCourses } = useContext(CartContext)
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
            {
              !!numberOfCourses && (
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
                        <CartSummary />
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
              )
            }
            {
              !numberOfCourses && (
                <div className='flex justify-center items-center border-2 py-20'>
                  <div className='flex flex-col justify-center items-center'>
                    <RemoveShoppingCartOutlined sx={{ fontSize: 100 }}/>
                    <span className='text-xl'>Tu carrito esta vacio</span>
                    <div className='mt-5'>
                      <Link
                        href='/courses'
                        className='py-3 px-11 bg-orange-eduabin text-white font-semibold border-2 border-orange-eduabin hover:bg-transparent hover:text-orange-eduabin transition-all duration-100'
                      >
                        Seguir comprando
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
