
// TODO! check if all imports are working

// IMPORT React
import React from 'react';
// IMPORT React-Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// IMPORT Icon
import Icon from 'react-native-vector-icons/FontAwesome';
// IMPORT Styles
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT Main Primary Screens
import ScreenMainHome from '../../screens/main/primary/ScreenMainHome';
import ScreenMainSearch from '../../screens/main/primary/ScreenMainSearch';
import ScreenMainCart from '../../screens/main/primary/ScreenMainCart';
import ScreenMainProfile from '../../screens/main/primary/ScreenMainProfile';

// IMPORT Main Secondary Screens
import ScreenMainDeliveryAddresses from '../../screens/main/secondary/ScreenMainDeliveryAddresses';
import ScreenMainCheckout from '../../screens/main/secondary/ScreenMainCheckout';
import ScreenMainPaymentMethods from '../../screens/main/secondary/ScreenMainPaymentMethods';
import ScreenMainProduct from '../../screens/main/secondary/ScreenMainProduct';
import ScreenMainReceipts from '../../screens/main/secondary/ScreenMainReceipts';
import ScreenMainUserinfo from '../../screens/main/secondary/ScreenMainUserinfo';
import ScreenMainCategoryProducts from '../../screens/main/secondary/ScreenMainCategoryProducts';

// DECLARE Tab Navigation
const Tab = createBottomTabNavigator();

// DECLARE Stack Navigation
const Stack = createStackNavigator();

/**
 * TODO: Currently implementing the stack partition such that
 * each page is enabled from every tab navigation, with the
 * initial main page of each tab on the very top.
 * Could be reduced once navigations dependencies are clear.
 * @returns 
 */

// DEFINE shared pages
const StackShared = () => {
  return (
    <Stack.Navigator>
      {/* primary tab (main) pages of the application */}
      <Stack.Screen name="Home" component={ScreenMainHome} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={ScreenMainSearch} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={ScreenMainCart} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ScreenMainProfile} options={{ headerShown: false }} />
      {/* secondary (misc) pages of the application */}
      <Stack.Screen name="DeliveryAddresses" component={ScreenMainDeliveryAddresses} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={ScreenMainCheckout} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethods" component={ScreenMainPaymentMethods} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ScreenMainProduct} options={{ headerShown: false }} />
      <Stack.Screen name="Receipts" component={ScreenMainReceipts} options={{ headerShown: false }} />
      <Stack.Screen name="UserInfo" component={ScreenMainUserinfo} options={{ headerShown: false }} />
      <Stack.Screen name="CategoryProducts" component={ScreenMainCategoryProducts} options={{ headerShow: false }}/>
    </Stack.Navigator>
  );
};

// DEFINE home pages
const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ScreenMainHome} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE search pages
const StackSearch = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={ScreenMainSearch} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE cart pages
const StackCart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={ScreenMainCart} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE profile pages
const StackProfile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ScreenMainProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE main tabs navigator
const NavigatorMain = () => {
  return (
    <NavigationContainer
    // TODO* passing below for enabling nested navigation containment
    independent={true}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // disabling as a fixed header exists
          // configuring tab bar icons and coloring
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: EStyleSheet.value('$colorTabbarTintActive'),
          tabBarInactiveTintColor: EStyleSheet.value('$colorTabbarTintInactive'),
          tabBarStyle: { height: EStyleSheet.value('$heightTabbar') }
        })}
      >
        <Tab.Screen name="Home" component={StackHome} />
        <Tab.Screen name="Search" component={StackSearch} />
        <Tab.Screen name="Cart" component={StackCart} />
        <Tab.Screen name="Profile" component={StackProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorMain;