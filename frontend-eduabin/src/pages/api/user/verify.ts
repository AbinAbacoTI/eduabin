import { backendApi } from 'lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IUser } from '../../../interfaces/auth.interface'
import { userData } from './login'

type Data =
| { msg: string }
| {
    token: string;
    user: IUser;
  }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return verifyJWT(req, res)

    default:
      res.status(400).json({
        msg: 'Bad Request'
      })
  }
}
const verifyJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { token = '' } = req.cookies
    await backendApi.post('/auth/jwt/verify/', { token })

    const user = await userData(token)
    res.status(200).json({
      token,
      user
    })
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' })
  }
}
