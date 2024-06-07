
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT React
import React, { useState, useEffect } from 'react';
// IMPORT React Native
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';

// IMPORT Styles
import PROJECT_STYLES from '../../../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT API
// TODO! import updated counterparts when ready
/*
import { fakeFetchProducts } from '../../api/fakeFetcher';
*/

// IMPORT COMPONENTS
import CardProduct from '../../../components/CardProduct';
import SectionSerializerLabeled from '../../../components/SectionSerializerLabeled';

const ScreenMainCart = ({ navigation }) => {
  
  // STATES
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // USE EFFECT IMPLEMENTATION FOR DATA FETCH WITH API
  // TODO! consider mitigating data fetch entirely elsewhere appropriate
  // TODO! consider implementing this elsewise however most appropriate
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = []; // TODO! fetch products here when API method ready
      console.log("Fetched products:", fetchedProducts); // Track fetched products
      setCartProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  // TODO! consider implementing a standalone cart management functional component
  /////////////////////////////////////////////////////////////////////////////
  // CALCULATE CURRENT CART ITEM PRICE TOTAL
  // TODO! consider mitigating and/or overhauling this implementation
  useEffect(() => {
    let total = 0;
    cartProducts.forEach((product) => {
      console.log(typeof product.price); // TESTLOG
      console.log(product.quantity); // TESTLOG
      total += product.price * product.quantity;
      console.log(total); // TESTLOG
    });
    console.log("Cart products:", cartProducts); // Track cart products
    setTotalPrice(total);
  }, [cartProducts]);

  // TODO! consider mitigating or changing handling of these actions

  const handleCheckout = () => {
    navigation.navigate('ScreenAppCheckout');
  };

  const handleClearCart = () => {
    setCartProducts([]);
  };

  const handleProductPress = (product) => {
    navigation.navigate('ScreenAppProduct', { product });
  };
  /////////////////////////////////////////////////////////////////////////////

  return (
    <View style={PROJECT_STYLES.containers['containerPageTab']}>
      <View style={PROJECT_STYLES.containers['containerSectionDefault']}>
        <Text style={PROJECT_STYLES.typography['titleSectionDefault']}>Your Cart</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionSerializerLabeled
          data={cartProducts}
          containerStyle={'containerScroller'}
          renderItem={CardProduct}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />
      </ScrollView>
      <View style={handleCart.containerHandleCart}>
        <View>
          <Text style={handleCart.priceHandleCart}>
            Total Price: ${totalPrice.toFixed(2)}
          </Text>
        </View>
        <View style={PROJECT_STYLES.spatial['gapVertical10']} />
        {/* ///TODO! implement this as a standalone visual comp and pair with handler functional component */}
        <View style={handleCart.buttonsHandleCart}>
          <Pressable onPress={handleClearCart} style={panelHandleCart.buttonClearCart}>
            <Text /*style={styles.buttonText}*/>Clear Cart</Text>
          </Pressable>
          <Pressable onPress={handleCheckout} style={panelHandleCart.buttonCheckoutCart}>
            <Text /*style={styles.buttonText}*/>Checkout</Text>
          </Pressable>
        </View>
      </View>
      <View style={PROJECT_STYLES.spatial['gapVertical10']} />
    </View>
  );
};

export default ScreenMainCart;

// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const handleCart = EStyleSheet.create({
  // TODO inspect and reconsider implementations here
  containerHandleCart: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  priceHandleCart: {
    color: '$colorLabel',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsHandleCart: {
    color: '$colorLabel',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

// TODO! mitigate this to own visual component once done implementing
export const panelHandleCart = EStyleSheet.create({
  // TODO inspect and reconsider implementations here
  buttonClearCart: {
    width: '40%',
    backgroundColor: 'red', // red
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCheckoutCart: {
    width: '40%',
    backgroundColor: 'blue', // blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});