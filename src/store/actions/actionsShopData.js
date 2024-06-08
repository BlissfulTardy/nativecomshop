
/**
 * @module actionsShopData
 * to handle product operations
 */
const actionsShopData = {

  setProducts: (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  }),

  setCategories: (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
  }),

  getProducts: () => ({
    type: 'GET_PRODUCTS'
  }),

  getCategories: () => ({
    type: 'GET_CATEGORIES',
  })

}

export default actionsShopData;