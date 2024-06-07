
/**
 * ///TODO! have changed implementation philosophy for this component
 * TODO implement a separate cart item quantity handler functional component
 */

// IMPORT React
import React from 'react';
// IMPORT React Native
import { View, Text, Pressable } from 'react-native'; // Import necessary components
// IMPORT Icons
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon component
// IMPORT Styles
import PROJECT_STYLES from '../../styles';

// TODO! revise implementation when done with external handler function component
const PanelQuantityInCart = ({ item, onIncrease, onDecrease }) => {
  const disableDecrement = item.quantity <= 0; // Check if the item quantity is 0 or negative
  const isSingleItem = item.quantity === 1; // Check if the item quantity is exactly 1

  return (
    <View style={panelQuantityInCart.containerPanelQuantityInCart}>
      {/* DECREASE AMOUNT */}
      <Pressable onPress={onDecrease} disabled={disableDecrement} style={[panelQuantityInCart.buttonPanelQuantityInCart, { backgroundColor: isSingleItem ? 'red' : 'blue', opacity: disableDecrement ? 0.5 : 1 }]}>
        <View style={panelQuantityInCart.iconButtonPanelQuantityInCart}>
          {/* Trash icon if quantity is 1, minus icon otherwise */}
          <Icon name={isSingleItem ? 'trash' : 'minus'} size={24} color={'#fff'} />
        </View>
      </Pressable>
      {/* DISPLAY AMOUNT */}
      <View style={panelQuantityInCart.displayPanelQuantityInCart}>
        <Text style={panelQuantityInCart.textDisplayPanelQuantityInCart}>{item.quantity}</Text>
      </View>
      {/* INCREASE AMOUNT */}
      <Pressable onPress={onIncrease} style={[panelQuantityInCart.buttonPanelQuantityInCart, { backgroundColor: 'green' }]}>
        <View style={panelQuantityInCart.iconButtonPanelQuantityInCart}>
          <Icon name={'plus'} size={24} color={'#fff'} />
        </View>
      </Pressable>
    </View>
  );
};

export default PanelQuantityInCart;

// TODO* have mitigated component specific styling to own component here
export const panelQuantityInCart = EStyleSheet.create({
  // TODO reconsider implementations here
  containerPanelQuantityInCart: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },

  textPanelQuantityInCart: {
    backgroundColor: '$colorForeground',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    fontSize: 16,
    aspectRatio: 1,
  },

  buttonPanelQuantityInCart: {
    height: 30,
    backgroundColor: '$colorPrimary',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    aspectRatio: 1,
    color: '$colorLabel',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButtonPanelQuantityInCart: {

  },

  displayPanelQuantityInCart: {
    flex: 1,
    minHeight: 30,
    minWidth: 40,
    display: 'flex',
    backgroundColor: '$colorBackground',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textDisplayPanelQuantityInCart: {
    color: '$colorText',
    textAlign: 'center',
    fontSize: 46,
  },

})