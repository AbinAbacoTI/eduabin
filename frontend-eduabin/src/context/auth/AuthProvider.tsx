import { IUser } from 'interfaces'
import { FC, useEffect, useReducer } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { frontendApi } from '../../lib/fetchApi'
import Cookie from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
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
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      console.log({ user: data?.user })
      dispatch({ type: '[auth]-login', payload: data?.user as IUser })
    }
  }, [status, data])
  /*
  useEffect(() => {
    checkToken()
  }, []) */

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

  const logOutUser = () => {
    signOut()
    /* Cookie.remove('token')
    router.reload() */
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      loginUser,
      signInUser,
      logOutUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}
