import { frontendApi } from '../lib/fetchApi'
import { IUser } from '../interfaces/auth.interface'
import Cookie from 'js-cookie'

export const checkUser = async (email: string, password: string) => {
  try {
    const { data } = await frontendApi.post<{ token: string, user:IUser }>('/user/login', { email, password })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const checkOrCreateUserToOauth = async (oAuthEmail: string, oAuthName: string) => { }
