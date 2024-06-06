
// IMPORT React
import React, { useEffect } from 'react';

// IMPORT Dependency
import { View } from 'react-native';

// IMPORT Authenticative Router
import RoutingAuth from './src/nav/navigators/RoutingAuth';

// IMPORT Settings Context Provider
import { ProviderClientSettings } from './src/contexts/ContextClientSettings';

// IMPORT Theming Wrapper Component
import { WrapperTheming } from './styling_variables';

// IMPORT StyleSheet & Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from './styles';

export default function App() {

  // TODO implement variables and logic if required
  
  return (
    // TODO reconsider wrapping with main screen component at this level
      <ProviderClientSettings>
        <WrapperTheming>
          <RoutingAuth/>
        </WrapperTheming>
      </ProviderClientSettings>
  );
}