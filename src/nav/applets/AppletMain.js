
// IMPORT Dependencies
import React, { useState } from 'react';

// IMPORT Navigator
import NavigatorMain from '../navigators/NavigatorMain';

// APPLET main component
const AppletMain = ({ states, utils, data }) => {
  return (
    // TODO whether to introduce a container container here
    <NavigatorMain
    states={null}
    utils={null}
    data={null}
    // TODO take props as needed
    />
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