import { frontendApi } from '../lib/fetchApi'
import { IUser } from '../interfaces/auth.interface'

export const checkUser = async (email: string, password: string) => {
  try {
    const { data } = await frontendApi.post<{ token: string, user:IUser }>('/user/login', { email, password })
    const {
      remuneration,
      paid_courses,
      name,
      user_type,
      id
    } = data.user
    return {
      email: data.user.email,
      name,
      user_type,
      id,
      remuneration,
      paid_courses
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const checkOrCreateUserToOauth = async (oAuthEmail: string, oAuthName: string) => {

}
