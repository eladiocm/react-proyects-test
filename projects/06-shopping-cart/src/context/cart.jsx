import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // una forma sería usando structuredClone
      const neWCart = structuredClone(cart)
      neWCart[productInCartIndex].quantity += 1
      setCart(neWCart)
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
