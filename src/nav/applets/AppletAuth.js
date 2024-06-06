
// IMPORT Dependencies
import React, { useState } from 'react';

// IMPORT Navigator
import NavigatorAuth from '../navigators/NavigatorAuth';

// APPLET main component
const AppletAuth = ({ states, utils, data }) => {
  return (
    // TODO whether to introduce a container container here
    <NavigatorAuth
    states={null}
    utils={null}
    data={null}
    // TODO take props as needed
    />
  );
};

// STATES of this applet
const statesAuth = {
  // TODO implement states required locally
};

// UTILITIES of this applet
const utilsAuth = {
  // TODO implement util methods required locally
};

// DATA of this applet
const dataAuth = {
  // TODO introduce localized data if required
};

export default AppletAuth;
export { statesAuth, utilsAuth, dataAuth };