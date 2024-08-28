import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, UserFormData } from '../../types/user'

interface LoginFormProps {
  onSubmit: (data: UserFormData) => void
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto'>
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
      <button type='submit' className='w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors'>
        Entrar
      </button>
    </form>
  )
}

export default LoginForm
