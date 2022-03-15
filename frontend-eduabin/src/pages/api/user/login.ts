import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthLogin, IUser } from '../../../interfaces/auth.interface'
import { backendApi } from 'lib'
import Cookie from 'js-cookie'

type Data =
| { msg: string }
| {
    token: string;
    user: IUser;
  }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return loginUser(req, res)

    default:
      res.status(400).json({
        msg: 'Bad Request'
      })
  }
}
const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { email, password } = req.body as AuthLogin

    const { data } = await backendApi.post<{ refresh:string, access: string }>('/auth/jwt/create/', { email: email.toLocaleLowerCase(), password })
    const { access } = data
    const user = await userData(access)

    return res.status(200).json({
      token: access,
      user: user
    })
  } catch (error) {
    console.log('error.response')
    return res.status(500).json({
      msg: 'Server error'
    })
  }
}

export const userData = async (access: string): Promise<IUser> => {
  const { data } = await backendApi.get<IUser>('/auth/users/me/', {
    headers: {
      'Authorization': `Token ${access}`
    }
  })
  return { ...data, user_type: userType(data.user_type as number) }
}

export const userType = (type: number):string => {
  return type === 1 ? 'student' : type === 2 ? 'teacher' : 'admin'
}
