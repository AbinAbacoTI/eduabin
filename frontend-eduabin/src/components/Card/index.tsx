import Rating from 'components/ui/Rating'
import { CardProps } from 'interfaces/components.interface'
import Image from 'next/image'
import { FC } from 'react'

const Card: FC<CardProps> = ({ publicCard = true, published = true }) => {
  return (
        <div className="bg-white w-full max-w-sm mx-auto my-2 rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-96 relative"
                >
                <Image src={'https://edu.abin.world/wp-content/uploads/2022/01/Plan-Publicitario.jpg'}
                    layout='fill'
                    className='object-center object-cover'
                    objectFit='cover'
                />
                {
                   publicCard
                     ? (
                    <button
                    className="p-2 rounded-full bg-orange-600 text-white mx-5 -mb-4 hover:bg-orange-100 hover:text-orange-600  focus:bg-orange-300 relative">
                        <svg className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                       )
                     : null
               }
            </div>
            <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Curso de Cocina</h3>
                <div>
                    <Rating value={3}/>
                </div>
                <span className="text-gray-500 mt-2 text-lg">S/.12</span>
                {
                    !published
                      ? (
                        <div className='text-right'>
                    <span className='border-2 border-orange-300 bg-orange-300 rounded-md px-2'>No publicado</span>
                </div>
                        )
                      : null

                }
            </div>
        </div>
  )
}

export default Card
