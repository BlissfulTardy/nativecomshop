
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT React
import React from 'react';
// Import React-Native
import { View, Text, Pressable } from 'react-native';
// Import Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from '../../../../styles';

///////////////////////////////////////////////////////////////////////////////
// TODO! inspect and if required replace current navigation implementation
// Import React Navigation
import { useNavigation } from '@react-navigation/native';
///////////////////////////////////////////////////////////////////////////////

// SCREEN COMPONENT
const ScreenMainProfile = () => {
  
  // TODO! inspect and reconsider this current routing implementation
  const navigation = useNavigation();

  return (
    <View style={
      [
        PROJECT_STYLES.containers['containerPageTab'],
        PROJECT_STYLES.containers['containerPageCentered'],
      ]
    }>
      <Text style={PROJECT_STYLES.typography['labelLoggedUser']}>Logged in as: example@example.com</Text>

      {/*// TODO! reconsider implementing this as a standalone component*/}
      <View style={menuProfile.containerMenuProfile}>
        <Pressable onPress={() => navigation.navigate('ScreenUserinfo')} style={menuProfile.itemMenuProfile}>
          <Text style={menuProfile.textItemMenuProfile}>User Information</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenDeliveryAddresses')} style={menuProfile.itemMenuProfile}>
          <Text style={menuProfile.textItemMenuProfile}>Delivery Address</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenPaymentMethods')} style={menuProfile.itemMenuProfile}>
          <Text style={menuProfile.textItemMenuProfile}>Payment Methods</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenReceipts')} style={menuProfile.itemMenuProfile}>
          <Text style={menuProfile.textItemMenuProfile}>Receipts</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScreenMainProfile;

// TODO mitigate this to own component if decided to implement standalone
export const menuProfile = EStyleSheet.create({
  // TODO reconsider implementations here
  containerMenuProfile: {
    width: '80%',
    alignItems: 'center',
  },
  itemMenuProfile: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: '2.5%',
    backgroundColor: '$colorPrimary',
    borderRadius: 5,
  },
  textItemMenuProfile: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$colorText',
    textAlign: 'center',
  },
})