
// IMPORT REACT
import React from 'react';

// IMPORT REACT NATIVE
import { View, Text } from 'react-native';

// IMPORT REACT NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// IMPORT IONICONS
import Icon from 'react-native-vector-icons/FontAwesome'

// IMPORT STYLES
import PROJECT_STYLES from '../../../styles';

// IMPORT MAIN SCREENS
import ScreenMainHome from '../../screens/main/primary/ScreenMainHome';
import ScreenMainSearch from '../../screens/main/primary/ScreenMainSearch';
import ScreenMainCart from '../../screens/main/primary/ScreenMainCart';
import ScreenMainProfile from '../../screens/main/primary/ScreenMainProfile';

// CREATE TAB
const Tab = createBottomTabNavigator();

// DECLARE MAIN TABS COMPONENT
const BottomTabsMain = () => {

  // TODO: implement component logic

    return (

        /* PAGE */
        <View>

          {/* TAB NAVIGATION COMPOSITION */}
          <NavigationContainer
          style={PROJECT_STYLES.containers.pageTabs} // TODO! validate, reconsider and fix later when ready
          >

            {/* TAB NAVIGATOR */}
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
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: '#bbb',
              })}
            >

              {/* APPLICATION MAIN SCREENS */}
              <Tab.Screen name="Home" component={ScreenMainHome} />
              <Tab.Screen name="Search" component={ScreenMainSearch} />
              <Tab.Screen name="Cart" component={ScreenMainCart} />
              <Tab.Screen name="Profile" component={ScreenMainProfile} />

            </Tab.Navigator>

          </NavigationContainer>

        </View>

    );
};

export default BottomTabsMain;
