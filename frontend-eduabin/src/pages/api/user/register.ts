import { backendApi } from 'lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { validations } from 'utils'
import { IUser, AuthRegister } from '../../../interfaces/auth.interface'
import { frontendApi } from '../../../lib/fetchApi'

type Data =
| { msg: string }
| {
    token: string;
    user: IUser;
  }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return registerUser(req, res)

    default:
      res.status(400).json({
        msg: 'Bad Request'
      })
  }
}
const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { email, name, password } = req.body.credentials as AuthRegister

    if (!validations.isValidEmail(email)) return res.status(400).json({ msg: 'Formato de correo no valido' })

    const { data } = await backendApi.post<{ name:string, email: string }>('/auth/users/', { email: email.toLocaleLowerCase(), name, password })

    const { data: { token, user } } = await frontendApi.post<{ token: string, user:IUser }>('/user/login', { email: data.email, password })

    return res.status(200).json({
      token,
      user
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Server error'
    })
  }
}
