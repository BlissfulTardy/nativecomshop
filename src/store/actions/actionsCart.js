
/**
 * @module actionsCart
 * describing user cart related operations
 */
const actionsCart = {
  
  clearCart: () => ({
    type: 'CLEAR_CART',
  }),
  
  checkoutCart: () => ({
    type: 'CHECKOUT_CART',
  }),
  
  addToCart: (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  }),
  
  removeFromCart: (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  }),
  
  incrementQuantity: (productId) => ({
    type: 'INCREMENT_QUANTITY',
    payload: productId,
  }),
  
  decrementQuantity: (productId) => ({
    type: 'DECREMENT_QUANTITY',
    payload: productId,
  }),

}

export default actionsCart;