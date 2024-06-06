
const initialState = [];
/**
 * @method reducerProduct for product data state handling
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const reducerProduct = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_PRODUCTS':
      return action.payload;
      
    default:
      return state;
  }
};

export default reducerProduct;