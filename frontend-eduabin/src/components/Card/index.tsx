import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import Rating from 'components/ui/Rating'
import { CardProps } from 'interfaces/components.interface'
import Image from 'next/image'
import { FC } from 'react'

const Card: FC<CardProps> = ({ publicCard = true, published = true, name = 'Curso sin nombre' }) => {
  return (
    <div className="bg-white w-306 h-80 max-w-sm mx-auto my-2 rounded-md shadow-lg overflow-hidden">
      <div className="flex items-end justify-end h-44 w-306 relative"
      >
        <Image src={'/images/marketing-img.jpg'}
          layout='fill'
          className='object-center object-cover'
          objectFit='cover'
        />
        {
          publicCard
            ? (
              <button
                className="p-2 rounded-full bg-orange-eduabin text-white mx-5 -mb-4 hover:bg-orange-100 hover:text-orange-eduabin  focus:bg-orange-300 relative">
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
      <div className="px-5 py-1">
        <div className='my-2'>
          <h3 className="text-gray-700 text-lg font-semibold">{name} dsads ads ads </h3>
        </div>
        <div className='my-2'>
          <Rating value={3} />
        </div>
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
      <div className='p-1 border-t-2 mt-4'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='w-12'>
              <FontAwesomeIcon icon={faUserAlt} className='text-gray-eduabin' /> 0
            </div>
            <div className='w-12'>
              <FontAwesomeIcon icon={faCommentAlt} className='text-gray-eduabin' /> 0
            </div>
          </div>
          <div>
            <span className='font-bold text-orange-eduabin'>S/.23.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
