import { IUser } from 'interfaces'
import { AuthState } from './AuthProvider'

type AuthActionType =
| { type: '[auth]-login', payload: IUser}
| { type: '[auth]-logout'}

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case '[auth]-login':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    case '[auth]-logout':
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}
