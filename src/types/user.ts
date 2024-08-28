import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
})

export type UserFormData = z.infer<typeof userSchema>

export interface User {
  id: string
  email: string
  name: string
  password: string
}