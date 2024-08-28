import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '../types/user'

interface AuthState {
  user: User | null
  setUser: (user: User | null) => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore
