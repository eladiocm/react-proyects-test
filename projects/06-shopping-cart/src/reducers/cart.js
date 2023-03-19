import { useLocalStorage } from '../hooks/useLocalStorage'

const { getLocalStorage, updateLocalStorage } = useLocalStorage()

export const cartInitialState = getLocalStorage('cart')

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      // check if the product is already in the cart
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        // ! Formas de ADD un producto ya en el carrito
        // * 1 una forma sería usando structuredClone
        /* const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1 */
        // * 2 usando un map
        /* const newState = state.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        }) */
        // * 3 usando slice y spread operator
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]

        updateLocalStorage('cart', newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]

      updateLocalStorage('cart', newState)
      return newState
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage('cart', newState)
      return newState
    }
    case 'CLEAR_CART': {
      updateLocalStorage('cart', [])
      return []
    }
  }
  return state
}
