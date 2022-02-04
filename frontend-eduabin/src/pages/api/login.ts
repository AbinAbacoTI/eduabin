import { NextApiRequest, NextApiResponse } from 'next'
import { BK_URI } from 'services/servers.service'
import cookie from 'cookie'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const resp = await fetch(`${BK_URI}/auth/jwt/create`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(req.body)
      }
      )
      const data = await resp.json()
      console.log(data)
      if (resp.ok) {
        res.setHeader('Set-Cookie', [cookie.serialize('refresh_token', data.refresh, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24,
          sameSite: 'strict',
          path: '/'
        }),
        cookie.serialize('access_token', data.access, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24,
          sameSite: 'strict',
          path: '/'
        })])
        res.status(200).json({})
      }
    } catch ({ response: { status, data } }) {
      res.status(status).json(data)
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(403).json({ msg: `Method ${req.method} not allowed` })
  }
}
