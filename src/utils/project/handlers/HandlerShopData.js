
// TODO! reconsider this implementation

/*
// IMPORT ...
import { useDispatch } from "react-redux";
import actionsShopData from "../../../store/actions/actionsShopData";
import { useSelector } from "react-redux";

// IMPORT Reducers
import reducerShopData from "../../../store/reducers/reducerShopData";
import reducerClientCart from "../../../store/reducers/reducerClientCart";

class HandlerShopData {
  constructor(reducer, navigation = null) {
    this.reducer = reducer;
    this.navigation = navigation;
  }

  static setProducts(dispatch, products) {
    console.log('Dispatching products:', products);
    dispatch(actionsShopData.setProducts(products));
  }

  static setCategories(dispatch, categories) {
    console.log('Dispatching categories:', categories);
    dispatch(actionsShopData.setCategories(categories));
  }

  static getProducts(reducer) {
    const products = useSelector((state) => state.reducerShopData)
    console.log(`current products: `, products) //TODO:TESTLOG
    return products;
  }

  static getCategories(reducer) {
    const categories = useSelector((state) => state.reducerShopData)
    console.log(`current categories: `, categories) //TODO:TESTLOG
    return categories;
  }
}

export default HandlerShopData;
*/