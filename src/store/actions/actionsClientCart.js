
/**
 * @module actionsClientCart
 * describing user cart related operations
 */
const actionsClientCart = {
  
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

  getPriceTotal: () => ({
    type: 'GET_PRICE_TOTAL',
  }),

  getProductQuantity: (productId) => ({
    type: 'GET_PRODUCT_QUANTITY',
    payload: productId,
  }),

}

export default actionsClientCart;