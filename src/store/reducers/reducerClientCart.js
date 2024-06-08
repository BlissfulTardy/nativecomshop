
const initialState = {
  items: [], // Array to hold cart items
  totalPrice: 0, // Initial total price
};

/**
 * @method reducerCart for cart data state handling
 * @param {*} state 
 * @param {*} action 
 * @returns
 */
const reducerClientCart = (state = initialState, action) => {

  console.log(`action:`, action) //TODO:TESTLOG

  switch (action.type) {

    case 'ADD_TO_CART':
      return [...state, { ...action.payload, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.items.filter((item) => item.id !== action.payload);

    case 'INCREMENT_QUANTITY':
      return state.items.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT_QUANTITY':
      return state.items
        .map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

    case 'CLEAR_CART':
      return {
        items: [], // Array to hold cart items
        totalPrice: 0, // Initial total price
      };

    case 'CHECKOUT_CART':
      // TODO! handle or introduce checkout logic when ready
      return [];

    case 'GET_PRICE_TOTAL':
      const totalPrice = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      return {
        ...state,
        totalPrice,
      };

    case 'GET_PRODUCT_QUANTITY':
      const item = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        productQuantity: item ? item.quantity : 0,
      };

    default:
      return state;
  }
};

export default reducerClientCart;