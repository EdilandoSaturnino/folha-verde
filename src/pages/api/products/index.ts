import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(db.products)
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
