
// IMPORT React
import React, { useEffect } from 'react';

// IMPORT Dependency
import { View } from 'react-native';

// IMPORT Authenticative Router
import RoutingAuth from './src/nav/navigators/RoutingAuth';

// IMPORT Settings Context Provider
import { ProviderClientSettings } from './src/contexts/ContextClientSettings';

// IMPORT Theming Wrapper Component
import { ProviderStyling } from './Styling';

// IMPORT StyleSheet & Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from './styles';

// IMPORT Utility // TODO remove testing utility when done with
import ReactErrorBoundary from './src/utilities/blisslib_react/common/ReactErrorBoundary';

export default function App() {

  // TODO implement variables and logic if required
  
  return (
    <ReactErrorBoundary> // TODO remove ErrorBoundary after done testing
      <ProviderClientSettings>
        <ProviderStyling>
          <RoutingAuth/>
        </ProviderStyling>
      </ProviderClientSettings>
    </ReactErrorBoundary>
  );
}