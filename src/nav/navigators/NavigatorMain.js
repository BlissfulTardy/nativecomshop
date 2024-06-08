
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
import PageMainHome from '../../pages/main/primary/PageMainHome';
import PageMainSearch from '../../pages/main/primary/PageMainSearch';
import PageMainCart from '../../pages/main/primary/PageMainCart';
import PageMainProfile from '../../pages/main/primary/PageMainProfile';

// IMPORT Main Secondary Screens
import PageMainDeliveryAddresses from '../../pages/main/secondary/PageMainDeliveryAddresses';
import PageMainCheckout from '../../pages/main/secondary/PageMainCheckout';
import PageMainPaymentMethods from '../../pages/main/secondary/PageMainPaymentMethods';
import PageMainProduct from '../../pages/main/secondary/PageMainProduct';
import PageMainReceipts from '../../pages/main/secondary/PageMainReceipts';
import PageMainUserinfo from '../../pages/main/secondary/PageMainUserinfo';
import PageMainCategoryProducts from '../../pages/main/secondary/PageMainCategoryProducts';

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
      <Stack.Screen name="PageHome" component={PageMainHome} options={{ headerShown: false }} />
      <Stack.Screen name="PageSearch" component={PageMainSearch} options={{ headerShown: false }} />
      <Stack.Screen name="PageCart" component={PageMainCart} options={{ headerShown: false }} />
      <Stack.Screen name="PageProfile" component={PageMainProfile} options={{ headerShown: false }} />
      {/* secondary (misc) pages of the application */}
      <Stack.Screen name="PageDeliveryAddresses" component={PageMainDeliveryAddresses} options={{ headerShown: false }} />
      <Stack.Screen name="PageCheckout" component={PageMainCheckout} options={{ headerShown: false }} />
      <Stack.Screen name="PagePaymentMethods" component={PageMainPaymentMethods} options={{ headerShown: false }} />
      <Stack.Screen name="PageProduct" component={PageMainProduct} options={{ headerShown: false }} />
      <Stack.Screen name="PageReceipts" component={PageMainReceipts} options={{ headerShown: false }} />
      <Stack.Screen name="PageUserInfo" component={PageMainUserinfo} options={{ headerShown: false }} />
      <Stack.Screen name="PageCategoryProducts" component={PageMainCategoryProducts} options={{ headerShow: false }}/>
    </Stack.Navigator>
  );
};

// DEFINE home pages
const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageHome" component={PageMainHome} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE search pages
const StackSearch = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageSearch" component={PageMainSearch} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE cart pages
const StackCart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageCart" component={PageMainCart} options={{ headerShown: false }} />
      <Stack.Screen name="Shared" component={StackShared} />
    </Stack.Navigator>
  );
};

// DEFINE profile pages
const StackProfile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageProfile" component={PageMainProfile} options={{ headerShown: false }} />
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