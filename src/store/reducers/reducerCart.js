
const initialState = []; // Fallback value for initial state parameter
/**
 * @method reducerCart for cart data state handling
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const reducerCart = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_TO_CART':
      return [...state, { ...action.payload, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT_QUANTITY':
      return state
        .map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

    case 'CLEAR_CART':
      return [];

    case 'CHECKOUT_CART':
      // TODO! handle or introduce checkout logic when ready
      return [];

    default:
      return state;
  }
};

export default reducerCart;