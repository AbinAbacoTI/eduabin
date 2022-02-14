
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import { BK_URI } from 'services/servers.service'
import refreshToken from './refreshToken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ 'message': 'Not authorized' })
      return
    }

    const { refresh_token } = cookie.parse(req.headers.cookie)
    if (!refresh_token) {
      res.status(403).json({ 'message': 'Not authorized' })
      return
    }

    let { access_token } = cookie.parse(req.headers.cookie)

    if (!access_token) {
      const refreshRes = await refreshToken(req, res)

      if (refreshRes) {
        access_token = refreshRes
      } else {
        res.status(403).json({ 'message': 'Not authorized' })
        return
      }
    }

    try {
      const resp = await fetch(`${BK_URI}/auth/users/me/`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Token ${access_token}`
        }
      })

      if (resp.ok) {
        const user = await resp.json()
        console.log('user:45: ', user)
        res.status(200).json({ user })
        return user
      }
    } catch ({ response: { status } }) {
      res.status(status).json({})
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(403).json({ 'message': `Method  ${req.method} not allowed` })
  }
}
