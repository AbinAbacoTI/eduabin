import { createContext } from 'react'
import { ICartCourse } from 'interfaces'

interface ContextProps {
  cart: ICartCourse[],
  NumberOfCourses: number,
  subTotal: number,
  discount: number,
  total: number,
  addCourseToCart: (course: ICartCourse) => void
  removeCartCourse: (course: ICartCourse) => void
}

export const CartContext = createContext({} as ContextProps)
