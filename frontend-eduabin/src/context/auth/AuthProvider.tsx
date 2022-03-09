import { IUser } from 'interfaces'
import { FC, useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { frontendApi } from '../../lib/fetchApi'
import Cookie from 'js-cookie'
import axios from 'axios'

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined
}

export const AuthProvider:FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    if (!Cookie.get('token')) return
    try {
      const { data } = await frontendApi.get<{ token: string, user:IUser }>('/user/verify')
      const { token, user } = data
      Cookie.set('token', token)
      dispatch({ type: '[auth]-login', payload: user })
    } catch (error) {
      Cookie.remove('token')
    }
  }

  const loginUser = async (email: string, password: string):Promise<boolean> => {
    try {
      const { data } = await frontendApi.post('/user/login', { email, password })
      const { token, user } = data
      Cookie.set('token', token)
      dispatch({ type: '[auth]-login', payload: user })
      return true
    } catch (error) {
      console.log('login user ', error)
      return false
    }
  }

  const signInUser = async (credentials : {email: string, name:string, password:string}):Promise<{hasError: boolean, message?: string}> => {
    try {
      const { data } = await frontendApi.post('/user/register', { credentials })
      const { token, user } = data
      Cookie.set('token', token)
      dispatch({ type: '[auth]-login', payload: user })
      return {
        hasError: false
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message
        }
      }
      return {
        hasError: true,
        message: 'No se pudo crear el usuario'
      }
    }
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      loginUser,
      signInUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}
