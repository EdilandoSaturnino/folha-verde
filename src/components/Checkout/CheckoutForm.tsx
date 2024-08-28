import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const checkoutSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
  address: z.string().min(5, { message: 'O endereço deve ter pelo menos 5 caracteres' }),
  city: z.string().min(2, { message: 'A cidade deve ter pelo menos 2 caracteres' }),
  state: z.string().length(2, { message: 'O estado deve ter 2 caracteres' }),
  zipCode: z.string().regex(
    /^\d{5}-\d{3}$/,

    { message: 'CEP inválido (formato: 12345-678)' }
  ),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void
}

function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label htmlFor='name' className='block mb-2'>
          Nome Completo
        </label>
        <input {...register('name')} type='text' id='name' className='w-full px-3 py-2 border rounded' />
        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='address' className='block mb-2'>
          Endereço
        </label>
        <input {...register('address')} type='text' id='address' className='w-full px-3 py-2 border rounded' />
        {errors.address && <p className='text-red-500 text-sm mt-1'>{errors.address.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='city' className='block mb-2'>
          Cidade
        </label>
        <input {...register('city')} type='text' id='city' className='w-full px-3 py-2 border rounded' />
        {errors.city && <p className='text-red-500 text-sm mt-1'>{errors.city.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='state' className='block mb-2'>
          Estado
        </label>
        <input {...register('state')} type='text' id='state' className='w-full px-3 py-2 border rounded' />
        {errors.state && <p className='text-red-500 text-sm mt-1'>{errors.state.message}</p>}
      </div>
      <div className='mb-4'>
        <label htmlFor='zipCode' className='block mb-2'>
          CEP
        </label>
        <input {...register('zipCode')} type='text' id='zipCode' className='w-full px-3 py-2 border rounded' />
        {errors.zipCode && <p className='text-red-500 text-sm mt-1'>{errors.zipCode.message}</p>}
      </div>
      <button type='submit' className='w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors'>
        Finalizar Pedido
      </button>
    </form>
  )
}

export default CheckoutForm
