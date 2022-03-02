import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { access_token } = cookie.parse(req.headers.cookie)
    if (!access_token) return res.status(401).json('Token no valido')
    return res.status(200).json({ access: access_token })
  } catch (err) {
    return res.status(500).end()
  }
}
