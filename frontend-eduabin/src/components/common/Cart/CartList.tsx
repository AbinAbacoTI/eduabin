import { FC, useContext } from 'react'
import Image from 'next/image'
import { DeleteOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Link from 'components/ui/Link'
import { CartContext } from 'context'
import { ICartCourse } from 'interfaces'

export const CartList:FC = () => {
  const { cart, removeCartCourse, numberOfCourses } = useContext(CartContext)

  const onRemoveCourse = (course: ICartCourse) => {
    removeCartCourse(course)
  }

  return (
    <>
    <span>Tienes { numberOfCourses } cursos en tu carrito</span>
    {
      cart.map(course => (
        <div
          key={`courses-cart-${course.course_uuid}`}
          className='flex justify-between mt-2 gap-2'
        >
          <Link
            href={`/course/${course.course_uuid}`}
            className="w-1/4 h-32 border-2 overflow-hidden rounded-md relative">
            <Image
              src={course.image_url}
              layout='fill'
            />
          </Link>
          <div className="w-2/4 p-4">
            <h3 className='text-lg font-semibold'>{course.course_name}</h3>
            <div>
              <span className='text-base font-medium'>S/. {course.price}</span>
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <div>
              <IconButton
                onClick={() => onRemoveCourse(course)}
              >
                <DeleteOutline/>
              </IconButton>
            </div>
          </div>
        </div>
      ))
    }
    </>
  )
}
