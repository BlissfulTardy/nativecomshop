
// TODO! IS THIS DEPRACATED?

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
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT MAIN SCREENS
import PageMainHome from '../../pages/main/primary/PageMainHome';
import PageMainSearch from '../../pages/main/primary/PageMainSearch';
import PageMainCart from '../../pages/main/primary/PageMainCart';
import PageMainProfile from '../../pages/main/primary/PageMainProfile';

// IMPORT HEADER
import HeaderCommon from '../../components/HeaderCommon';
// TODO reconsider rendering application header here

// CREATE TAB
const Tab = createBottomTabNavigator();

// DECLARE MAIN TABS COMPONENT
const BottomTabsMain = () => {

  // TODO: implement component logic

    return (

        /* PAGE */
        <View>

          {/* //TODO! inspect why this header would not appear */}
          {/* MAIN APPLET HEADER */}
          <HeaderCommon/>

          {/* TAB NAVIGATION COMPOSITION */}
          <NavigationContainer
          style={PROJECT_STYLES.containers['containerPageTab']}
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
                // TODO consider mitigating this somewhere alongside other styling implementations
                // TODO! troubleshoot why tab bar background color won't change
                tabBarStyle: {
                  backgroundColor: EStyleSheet.value('$colorForeground'),
                },
                tabBarActiveTintColor: EStyleSheet.value('$colorTintActive'),
                tabBarInactiveTintColor: EStyleSheet.value('colorTintInactive'),
              })}
            >

              {/* APPLICATION MAIN SCREENS */}
              <Tab.Screen name="Home" component={PageMainHome} />
              <Tab.Screen name="Search" component={PageMainSearch} />
              <Tab.Screen name="Cart" component={PageMainCart} />
              <Tab.Screen name="Profile" component={PageMainProfile} />

            </Tab.Navigator>

          </NavigationContainer>

        </View>

    );
};

export default BottomTabsMain;
