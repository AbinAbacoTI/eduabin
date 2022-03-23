import { ICartCourse } from 'interfaces'
import { CartState } from './CartProvider'

type CartActionType =
  | { type: '[CART] - Load cookies cart', payload: ICartCourse[] }
  | { type: '[CART] - Add course', payload: ICartCourse }
  | { type: '[CART] - Remove course', payload: ICartCourse }
  | { type: '[CART] - Update cart summary', payload: {
    numberOfCourses: number,
    subTotal: number,
    discount: number,
    total: number}
  }

export const cartReducer = (state: CartState, action: CartActionType):CartState => {
  const { type, payload } = action
  switch (type) {
    case '[CART] - Load cookies cart':
      return {
        ...state,
        cart: payload
      }
    case '[CART] - Add course':
      return {
        ...state,
        cart: [...state.cart, payload]
      }
    case '[CART] - Remove course':
      return {
        ...state,
        cart: state.cart.filter(c => c.course_uuid !== payload.course_uuid)
      }
    case '[CART] - Update cart summary':
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
