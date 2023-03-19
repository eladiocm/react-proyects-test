import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem.jsx'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
