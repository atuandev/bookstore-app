import { create } from 'zustand/react'
import { Cart } from '@/mockData/cart'

type CartType = {
  carts: Cart[]
  addCart: (cart: Cart) => void
  removeCart: (bookId: string) => void
  increaseQuantity: (bookId: string, quantity?: number) => void
  decreaseQuantity: (bookId: string) => void
}

const useCartStore = create<CartType>((set, get) => ({
  carts: [],

  addCart: (cart: Cart) => set(state => ({ carts: [...state.carts, cart] })),
  removeCart: (bookId: string) => set(state => ({
    carts: state.carts.filter(cart => cart.book.id !== bookId),
  })),
  increaseQuantity: (bookId: string, quantity: number = 1) => set(state => ({
    carts: state.carts.map(cart => cart.book.id === bookId ? {
      ...cart,
      quantity: cart.quantity + quantity,
    } : cart),
  })),
  decreaseQuantity: (bookId: string) => set(state => ({
    carts: state.carts.map(cart => cart.book.id === bookId ? {
      ...cart,
      quantity: Math.max(cart.quantity - 1, 1),
    } : cart),
  })),
}))

export { useCartStore }