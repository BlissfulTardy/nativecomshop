
const initialState = {
  products: [],
  categories: [],
};

/**
 * @method reducerShopData for product data state handling
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const reducerShopData = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };

    case 'GET_PRODUCTS':
      return state.products ?? null

    case 'GET_CATEGORIES':
      return state.categories ?? null
      
    default:
      return state;
  }

};

export default reducerShopData;