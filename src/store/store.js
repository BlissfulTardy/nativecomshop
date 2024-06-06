
// IMPORT Redux
import { createStore, combineReducers } from 'redux';

// IMPORT Reducers
// TODO! import reducers when ready
import reducerCart from './reducers/reducerCart';
import reducerProduct from './reducers/reducerProduct';

// ROOT REDUCER
const reducerRoot = combineReducers({
  cart: reducerCart,
  products: reducerProduct,
});

// STORE initiation
const store = createStore(reducerRoot);

export default store;