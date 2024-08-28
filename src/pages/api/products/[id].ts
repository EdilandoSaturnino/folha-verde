import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const product = db.products.find((p) => p.id === Number(id))

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' })
  }

  if (req.method === 'GET') {
    res.status(200).json(product)
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
