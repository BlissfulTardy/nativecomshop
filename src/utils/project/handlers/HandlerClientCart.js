
// TODO! reconsider this implementation

// IMPORT ...
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// IMPORT actions
import actionsClientCart from "../../../store/actions/actionsClientCart";

class HandlerClientCart {
  constructor(reducer, navigation = null) {
    this.reducer = reducer;
    this.navigation = navigation;
    this.dispatch = useDispatch();
    this.cart = useSelector((state) => state.cart);

    useEffect(() => {
      console.log(`user cart:`, this.cart);
    }, [this.cart]);
  }

  add(product) {
    this.dispatch(actionsClientCart.addToCart(product));
  }

  remove(productId) {
    this.dispatch(actionsClientCart.removeFromCart(productId));
  }

  increment(productId) {
    this.dispatch(actionsClientCart.incrementQuantity(productId));
    console.log(`increment item id:{${productId}}`); //TODO:TESTLOG
  }

  decrement(productId) {
    this.dispatch(actionsClientCart.decrementQuantity(productId));
    console.log(`decrement item id:{${productId}}`); //TODO:TESTLOG
  }

  checkout() {
    this.navigation.navigate('ScreenAppCheckout');
  }

  clear() {
    this.dispatch(actionsClientCart.clearCart());
  }

  total() {
    const response = this.reducer(this.cart, actionsClientCart.getPriceTotal);
    console.log(`response:`, response); //TODO:TESTLOG
    console.log(`total price:`, response.totalPrice); //TODO:TESTLOG
    return response.totalPrice;
  }

  itemAmount(itemId) {
    const response = this.reducer(this.cart, actionsClientCart.getProductQuantity(itemId));
    console.log(`response:`, response); //TODO:TESTLOG
    console.log(`item quantity:`, response.productQuantity); //TODO:TESTLOG
    return response.productQuantity;
  }
}

export default HandlerClientCart;
