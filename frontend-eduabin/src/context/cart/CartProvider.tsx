import { FC, useEffect, useReducer } from 'react'
import Cookie from 'js-cookie'
import { ICartCourse } from 'interfaces'
import { CartContext } from './CartContext'
import { cartReducer } from './cartReducer'

export interface CartState {
  cart: ICartCourse[],
  NumberOfCourses: number,
  subTotal: number,
  discount: number,
  total: number
}
const CART_INITIAL_STATE: CartState = {
  cart: [],
  NumberOfCourses: 0,
  subTotal: 0,
  discount: 0,
  total: 0
}

export const CartProvider:FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  useEffect(() => {
    const cartCookieCourses = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
    dispatch({ type: '[CART] - Load cookies cart', payload: cartCookieCourses })
  }, [])

  useEffect(() => {
    Cookie.set('cart', JSON.stringify(state.cart))
  }, [state.cart])
  // TODO: Upload data in store
  useEffect(() => {
    // TODO: Check subtotal value - reduce
    const subTotal = state.cart.reduce((prev, current) => parseFloat(current.price) + prev, 0)
    const orderSummary = {
      subTotal,
      discount: 0
    }
    console.log(orderSummary)
  }, [state.cart])

  const addCourseToCart = (course: ICartCourse) => {
    dispatch({ type: '[CART] - Add course', payload: course })
  }

  const removeCartCourse = (course: ICartCourse) => {
    dispatch({ type: '[CART] - Remove course', payload: course })
  }

  return (
    <CartContext.Provider value={{
      ...state,
      addCourseToCart,
      removeCartCourse
    }}>
      { children }
    </CartContext.Provider>
  )
}
