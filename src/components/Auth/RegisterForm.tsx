import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const registerSchema = z
  .object({
    name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type RegisterFormData = z.infer<typeof registerSchema>

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void
}

function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label htmlFor='name' className='block mb-2'>
          Nome
        </label>
        <input {...register('name')} type='text' id='name' className='w-full px-3 py-2 border rounded' />
        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block mb-2'>
          Email
        </label>
        <input {...register('email')} type='email' id='email' className='w-full px-3 py-2 border rounded' />
        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block mb-2'>
          Senha
        </label>
        <input {...register('password')} type='password' id='password' className='w-full px-3 py-2 border rounded' />
        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='confirmPassword' className='block mb-2'>
          Confirmar Senha
        </label>
        <input {...register('confirmPassword')} type='password' id='confirmPassword' className='w-full px-3 py-2 border rounded' />
        {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword.message}</p>}
      </div>
      <button type='submit' className='w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors'>
        Registrar
      </button>
    </form>
  )
}

export default RegisterForm
