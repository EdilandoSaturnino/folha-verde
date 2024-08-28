import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const { email, password } = req.body

  const user = db.users.find((u) => u.email === email)

  if (!user) {
    return res.status(400).json({ message: 'Credenciais inválidas' })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Credenciais inválidas' })
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' })

  res.status(200).json({ user: { id: user.id, name: user.name, email: user.email }, token })
}
