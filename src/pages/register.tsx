import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import RegisterForm from '../components/Auth/RegisterForm'
import api from '../lib/api'

function RegisterPage () {
  const router = useRouter()

  const handleRegister = async (data: any) => {
    try {
      await api.post('/auth/register', data)
      router.push('/login')
    } catch (error) {
      console.error('Error registering user:', error)
    }
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Registrar</h1>
      <RegisterForm onSubmit={handleRegister} />
    </Layout>
  )
}

export default RegisterPage