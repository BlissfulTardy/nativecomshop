
// IMPORT Dependencies
import React, { useState } from 'react';
import { View } from 'react-native'

// IMPORT Navigator
import NavigatorMain from '../navigators/NavigatorMain';

// IMPORT Styles
import PROJECT_STYLES from '../../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT Components
import HeaderCommon from '../../components/HeaderCommon';

// APPLET main component
const AppletMain = ({ states, utils, data }) => {
  return (
    // TODO reconsider keeping screen and header here
    <View style={PROJECT_STYLES.containers['containerScreen']}>
      <HeaderCommon/>
        <NavigatorMain
        states={null}
        utils={null}
        data={null}
        // TODO take props as needed
        />
    </View>
  );
};

// STATES of this applet
const statesMain = {
  // TODO implement states required locally
};

// UTILITIES of this applet
const utilsMain = {
  // TODO implement util methods required locally
};

// DATA of this applet
const dataMain = {
  // TODO introduce localized data if required
};

export default AppletMain;
export { statesMain, utilsMain, dataMain };