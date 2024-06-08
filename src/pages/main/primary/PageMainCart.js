
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT React
import React, { useState, useEffect, useDispatch } from 'react';
// IMPORT React Native
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
// IMPORT React Redux
import { useSelector } from 'react-redux';

// IMPORT Styles
import PROJECT_STYLES from '../../../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT COMPONENTS
import CardProduct from '../../../components/CardProduct';
import SectionSerializerLabeled from '../../../components/SectionSerializerLabeled';

// IMPORT HANDLER
import HandlerClientCart from '../../../utils/project/handlers/HandlerClientCart';

// IMPORT CONTEXT
import { useFetchedDataFake } from '../../../contexts/ContextFetchedDataFake';

// IMPORT REDUCER
import reducerClientCart from '../../../store/reducers/reducerClientCart';


import { dataMain, utilsMain } from '../../../nav/applets/AppletMain';

const PageMainCart = ({ navigation }) => {

  // RECEIVE Fetched Data From Above
  const { products, categories } = useFetchedDataFake();

  // TODO! mitigate this to its own component later on
  const handleProductOnPress = (product) => {
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
          data={products} // TODO! replace this dummy implementation
          containerStyle={'containerScroller'}
          renderItem={({ item }) => (
            <CardProduct
              item={item}
              cart={HandlerClientCart}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />
      </ScrollView>
      <View style={handleCart.containerHandleCart}>
        <View>
          <Text style={handleCart.priceHandleCart}>
            Total Price: ${utilsMain?.CLIENT_CART?.total() ?? 0}
          </Text>
        </View>
        <View style={PROJECT_STYLES.spatial['gapVertical10']} />
        {/* ///TODO! implement this as a standalone visual comp and pair with handler functional component */}
        <View style={handleCart.buttonsHandleCart}>
          <Pressable onPress={utilsMain?.CLIENT_CART?.clear()} style={panelHandleCart.buttonClearCart}>
            <Text /*style={styles.buttonText}*/>Clear Cart</Text>
          </Pressable>
          <Pressable onPress={utilsMain?.CLIENT_CART?.checkout()} style={panelHandleCart.buttonCheckoutCart}>
            <Text /*style={styles.buttonText}*/>Checkout</Text>
          </Pressable>
        </View>
      </View>
      <View style={PROJECT_STYLES.spatial['gapVertical10']} />
    </View>
  );
};

export default PageMainCart;

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