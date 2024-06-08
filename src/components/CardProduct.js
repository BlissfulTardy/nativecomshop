
// IMPORT REACT
import React from 'react';

//IMPORT REACT NATIVE
import { View, Text, Image, Pressable } from 'react-native';

// IMPORT STYLES
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from './../../styles';

// IMPORT IONICONS
import Icon from 'react-native-vector-icons/FontAwesome'

// IMPORT COMPONENT
import PanelCartItemQuantityHandler from './PanelCartlItemQuantityHandler';

// COMPONENT RENDER FUNCTION
const CardProduct = ({ item, handlerClientCart, onPress }) => {

  // TODO! remove temporary testlog after done with
  console.log(`card item: `, item); // TODO:TESTLOG
  console.log(`card cart handler: `, handlerClientCart); // TODO:TESTLOG

  // TODO experimenting declaring this here
  const instanceHandlerClientCart = new handlerClientCart();
  console.log(`handler instance: `, instanceHandlerClientCart);

  return (
    // HANDLES HANDLING APPROPRIATE ONPRESS HANDLER AS A FUNCTION PARAMETER
    <Pressable onPress={onPress} style={cardProduct.cardProduct}>
      {/* PRODUCT IMAGE */}
      <Image source={{ uri: item.image }} style={cardProduct.imageCardProduct} />
      {/* PRODUCT NAME */}
      <Text style={cardProduct.nameCardProduct} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      {/* PRODUCT DESCRIPTION */}
      <Text style={cardProduct.descriptionCardProduct} numberOfLines={3} ellipsizeMode="tail">
        {item.description}
      </Text>
      {/* PRODUCT CATEGORY */}
      <Text style={cardProduct.categoryCardProduct}>
        {item.category}
      </Text>
      {/* PRODUCT PRICE */}
      <Text style={cardProduct.priceCardProduct}>${item.price}</Text>
      {/* CART ITEM QUANTITY HANDLER */}
      <PanelCartItemQuantityHandler
        item={item}
        handlerClientCart={handlerClientCart}
      />
    </Pressable>
  );
};

export default CardProduct;

// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const cardProduct = EStyleSheet.create({
  // TODO inspect and reconsider implementations here
  cardProduct: {
    backgroundColor: '$colorForeground',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: '$colorBorder',
    padding: '10px',
    margin: '5px',
    width: '45vw',
  },
  nameCardProduct: {
    color: '$colorLabel',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  descriptionCardProduct: {
    color: '$colorText',
    fontSize: 14,
    marginTop: 5,
  },
  categoryCardProduct: {
    color: '$colorText',
    fontSize: 14,
    marginTop: 5,
  },
  priceCardProduct: {
    color: '$colorText',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  imageCardProduct: {
    height: 150, // TODO reconsider
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF', // TODO reconsider
    borderRadius: 10,
  },
})