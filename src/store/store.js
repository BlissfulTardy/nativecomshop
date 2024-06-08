
// IMPORT Redux
import { createStore, combineReducers } from 'redux';

// IMPORT Reducers
// TODO! import reducers when ready
import reducerClientCart from './reducers/reducerClientCart';
import reducerShopData from './reducers/reducerShopData';

// ROOT REDUCER
const reducerRoot = combineReducers({
  clientCart: reducerClientCart,
  shopData: reducerShopData,
});

// STORE initiation
const store = createStore(reducerRoot);

export default store;