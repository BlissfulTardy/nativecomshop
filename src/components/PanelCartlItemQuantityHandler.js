
// IMPORT React
import React, { useState, useEffect } from 'react';
// IMPORT React Native
import { View, Text, Pressable } from 'react-native'; // Import necessary components
// IMPORT React Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// IMPORT Icon
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon component
// IMPORT Styling
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT Reducer
import reducerClientCart from '../store/reducers/reducerClientCart';
// IMPORT Actions
import actionsClientCart from '../store/actions/actionsClientCart';

// IMPORT Utiility
import { utilsMain } from '../nav/applets/AppletMain';

const PanelCartItemQuantityHandler = ({ item, handlerClientCart }) => {

  const dispatch = useDispatch();

  const DISABLE_DECREMENT = item.quantity <= 0;
  const IS_SINGLE_ITEM = item.quantity === 1;
  const [init, setInit] = useState(true);

  const [itemAmount, setItemAmount] = useState(handlerClientCart.itemAmount(item.id));

  const handleDecrement = () => {
    console.log(`CLICK: decrement`) //TODO:TESTLOG
    handlerClientCart.decrement(item.id)
    setItemAmount(handlerClientCart.itemAmount(item.id));
  }

  const handleIncrement = () => {
    console.log(`CLICK: increment`) //TODO:TESTLOG
    handlerClientCart.increment(item.id)
    setItemAmount(handlerClientCart.itemAmount(item.id));
  }

  useEffect(() => {
    if(init) {
      setItemAmount(handlerClientCart.itemAmount(item.id));
      setInit(false);
    }
  }, [])

  return (
    <View style={itemCartCount.containerItemCartCount}>
      <Pressable onPress={handleDecrement} disabled={DISABLE_DECREMENT} style={[itemCartCount.buttonItemCartCount, { backgroundColor: IS_SINGLE_ITEM ? 'red' : 'blue', opacity: DISABLE_DECREMENT ? 0.5 : 1 }]}>
        <View style={itemCartCount.iconButtonItemCartCount}>
          <Icon name={IS_SINGLE_ITEM ? 'trash' : 'minus'} size={24} color={'#fff'} />
        </View>
      </Pressable>
      <View style={itemCartCount.displayItemCartCount}>
        <Text style={itemCartCount.textDisplayItemCartCount}>{itemAmount}</Text>
      </View>
      <Pressable onPress={handleIncrement} style={[itemCartCount.buttonItemCartCount, { backgroundColor: 'green' }]}>
        <View style={itemCartCount.iconButtonItemCartCount}>
          <Icon name={'plus'} size={24} color={'#fff'} />
        </View>
      </Pressable>
    </View>
  );
};

export default PanelCartItemQuantityHandler;


export const itemCartCount = EStyleSheet.create({
  // TODO reconsider implementations here
  containerItemCartCount: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },

  textItemCartCount: {
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    fontSize: 16,
    aspectRatio: 1,
  },

  buttonItemCartCount: {
    height: 30,
    backgroundColor: '$colorPrimary',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    aspectRatio: 1,
    color: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButtonItemCartCount: {

  },

  displayItemCartCount: {
    flex: 1,
    minHeight: 30,
    aspectRatio: 1,
    display: 'flex',
    backgroundColor: '$colorBackground',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textDisplayItemCartCount: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24,
  },

})