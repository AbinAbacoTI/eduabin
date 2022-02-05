
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import { BK_URI } from 'services/servers.service'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET' || req.url === '/api/payment' || req.url === '/api/addComment') {
    if (!req.headers.cookie) {
      return
    }

    const { refresh_token } = cookie.parse(req.headers.cookie)

    if (!refresh_token) {
      return
    }

    const resp = await fetch(`${BK_URI}/auth/jwt/refresh/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ refresh: refresh_token })

    })

    if (resp.ok) {
      const data = await resp.json()

      res.setHeader('Set-Cookie', cookie.serialize('access_token', data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60,
        sameSite: 'strict',
        path: '/'
      }))

      return data.access
    } else {
      return res.status(400)
    }
  } else {
    return res.status(500)
  }
}
