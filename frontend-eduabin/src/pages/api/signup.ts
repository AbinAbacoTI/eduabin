import { NextApiRequest, NextApiResponse } from 'next'
import { BK_URI } from 'services/servers.service'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const resAPI = await fetch(`${BK_URI}/auth/users/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(req.body)
      })

      const data = await resAPI.json()
      console.log('sigup:server', data)

      if (resAPI.ok) {
        res.status(200).json(data)
      }
    } catch ({ response: { status, data } }) {
      res.status(status).json(data)
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(403).json({ message: `Method  ${req.method} not allowed` })
  }
}
