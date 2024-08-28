import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../types/product'

interface CartState {
  items: Product[]
  addItem: (item: Product) => void
  removeItem: (itemId: number) => void
  clearCart: () => void
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
)

export default useCartStore
