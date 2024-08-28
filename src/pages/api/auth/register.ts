import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const { name, email, password } = req.body

  if (db.users.some((u) => u.email === email)) {
    return res.status(400).json({ message: 'Usuário já existe' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    id: String(db.users.length + 1),
    name,
    email,
    password: hashedPassword,
  }

  db.users.push(newUser)

  res.status(201).json({ message: 'Usuário criado com sucesso!' })
}
