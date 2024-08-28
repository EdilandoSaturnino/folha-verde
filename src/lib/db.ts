import { Product } from '../types/product'
import { User } from '../types/user'
import bcrypt from 'bcryptjs'

const hashedPassword = bcrypt.hashSync('senha123', 10)

let users: User[] = [
  {
    id: '1',
    name: 'Usuário Teste',
    email: 'teste@gmail.com',
    password: hashedPassword,
  },
]

let products: Product[] = [
  {
    id: 1,
    name: 'Kit Horta Vertical',
    description: 'Inclui suporte, vasos e sementes',
    price: 129.9,
    image: '/images/kit-horta-vertical.jfif',
  },
  {
    id: 2,
    name: "Suculenta 'Estrela do Deserto'",
    description: 'Tamanhos: P, M, G',
    price: 24.9,
    image: '/images/kit-horta-vertical.jfif',
  },
]

export const db = {
  users,
  products,
}
