
// TODO RE-ARRANGE THIS LATER ON FOR BETTER ERGONOMY
/**
 * ///TODO? this implementation can be drastically improved when
 * working with further advanced features of EStyleSheets.
 * ///TODO try to improve overall coding convention later on
 */

// TODO consider implementations for better and programmatized handling of colors

/**
 * ///TODO* INTENDED AS AN ADDITIONAL TOP LEVEL STYLING IMPLEMENTATION FOR THEMING PURPOSES
 * pre-defines set of colouring variables for different themes, returning them as a wrapper
 */

// IMPORT React
import React, { useEffect } from 'react';
// IMPORT ReactNative
import { View } from 'react-native';

// IMPORT Context
import { useSettings } from './src/contexts/ContextClientSettings';

// IMPORT Stylesheets
import EStyleSheet from "react-native-extended-stylesheet";
import PROJECT_STYLES from './styles';

// IMPORT Utility
import { invert as invertColor } from 'polished';

// IMPORT Test Utility // TODO remove testing utility when done with
import consoleLogOnce from './src/utilities/blisslib_react/common/consoleLogOnce';

///////////////////////////////////////////////////////////////////////////////
// EDIT THEMES BELOW

const THEMES = {
  light: {
    colorBackground: '#eee',
    colorForeground: '#ddd',
    colorLabel: '#111',
    colorText: '#222',
    colorLink: '#1a20b6',
    colorLinkClicked: '#1e217a',
    colorPrimary: '#0059bb',
    colorSecondary: '#2b5179',
    colorTertiary: '#253649',
    colorBorder: '#16253a',
    colorTintActive: '#005abb',
    colorTintInactive: '#00000000',
  },
  dark: {
    colorBackground: '#222',
    colorForeground: '#333',
    colorLabel: '#ddd',
    colorText: '#eee',
    colorLink: '1a20b6',
    colorLinkClicked: '#1e217a',
    colorPrimary: '#0059bb',
    colorSecondary: '#2b5179',
    colorTertiary: '#253649',
    colorBorder: '#5b92df',
    colorTintActive: '#005abb',
    colorTintInactive: '#00000000',
  },
  // TODO? consider futher themes such as high contrast or custom themes etc.
}

///////////////////////////////////////////////////////////////////////////////
// EDIT VARIABLES BELOW

const SPECIFICS = () => {
  const specifics =
  convertBuild(
  { // TODO* ASSIGN SPECIFIC VARIABLES HERE
    heightHeader: '60px',
    heightTabbar: '60px',
    paddingPageDefault: '10px',
    colorTabbarTintActive: '#007bff',
    colorTabbarTintInactive: '#bbb',
  });
  console.log(`buildSpecifics:`, specifics); // TODO:TESTLOG
  return specifics;
}

const COLOURS = () => {
  const colours =
  convertBuild(
  { // TODO* ASSIGN COLOUR RELATED VARIABLES HERE
    colorButtonGreen: '',
    colorButtonRed: '',
    colorButtonBlue: '',
    colorButtonYellow: '',
  });
  console.log(`buildColours:`, colours); // TODO:TESTLOG
  return colours;
}

const TYPOGRAPHY = () => {
  const typography =
  convertBuild(
  { // TODO* ASSIGN TYPOGRAPHY RELATED VARIABLES HERE
    fFamily: '',
    // font sizes
    fSize1: '',
    fSize2: '',
    fSize3: '',
    fSize4: '',
    fSize5: '',
    fSize6: '',
    // font heights // TODO determine whether different font heights are necessary
    fHeight1: '',
    fHeight2: '',
    fHeight3: '',
    fHeight4: '',
    fHeight5: '',
    fHeight6: '',
  });
  console.log(`buildTypography:`, typography); // TODO:TESTLOG
  return typography;
}

const SPACING = () => {
  const spacing =
  convertBuild(
  { // TODO* ASSIGN SPACING RELATED VARIABLES HERE
    // MARGIN
    mar0: '',
    mar1: '',
    mar2: '',
    // PADDING
    pad0: '',
    pad1: '',
    pad2: '',
    // SPACING
    spa1: '',
    spa2: '',
    spa3: '',
  });
  console.log(`buildSpacing:`, spacing); // TODO:TESTLOG
  return spacing;
}

///////////////////////////////////////////////////////////////////////////////

const flattenBuilds = (buildset) => {
  console.log(`merging builds:`, buildset); // TODO:TESTLOG
  // Create an empty object to hold the merged result
  var mergedBuild = {};

  // Loop through each build within current buildset
  for (var buildKey in buildset) {
    var build = buildset[buildKey]; // Get the build object from the buildset using the key
    console.log(`current build:`, build); // TODO:TESTLOG

    // Loop through each property of current build
    for (var prop in build) {
      console.log(`current build property:`, prop); // TODO:TESTLOG
      // Check if the property is an object (nested object)
      if (typeof build[prop] === 'object' && !Array.isArray(build[prop])) {
        // If it is, recursively call flattenBuilds to flatten its properties
        var nestedObj = flattenBuilds(build[prop]);
        // Merge the nested object properties into the mergedObj
        for (var nestedKey in nestedObj) {
          mergedBuild[nestedKey] = nestedObj[nestedKey];
        }
      } else {
        // If it's not an object, simply assign the property to mergedObj
        mergedBuild[prop] = build[prop];
      }
    }
  }

  // Return the merged object
  console.log(`mergedBuild:`, mergedBuild); // TODO:TESTLOG
  return mergedBuild;
}

const convertBuild = (build) => {
  console.log(`build to flatten:`, build); // TODO:TESTLOG
  var conversion = {};
  // Iterate through the keys of the input object
  for (var key in build) {
    // Prefix each key with '$' and assign it to the new object
    conversion['$' + key] = build[key];
  }
  // Return the new object with prefixed keys
  console.log(`conversion:`, conversion); // TODO:TESTLOG
  return conversion;
}

///////////////////////////////////////////////////////////////////////////////
// DO NOT EDIT BELOW

const BUILDS_LIST = {
  specifics: SPECIFICS(),
  colours: COLOURS(),
  typography: TYPOGRAPHY(),
  spacing: SPACING(),
}

const THEME = (theme) => {
  const selected = convertBuild(THEMES[theme]);
  console.log(`client buildTheme:`, selected); // TODO:TESTLOG
  return selected;
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// FLATTEN Other Builds
const BUILDS = flattenBuilds(BUILDS_LIST);
console.log(`BUILDS:`, BUILDS); // TODO:TESTLOG

// METHOD Building StyleSheet
const buildStyleSheet = (currBuild) => {
  EStyleSheet.build({$outline: 1, ...currBuild})
}

export const ProviderStyling = ({ children }) => {
  
  // Use the useSettings hook to access client settings
  const { clientSettings, updateSettings } = useSettings();
  console.log(`clientSettings:`, clientSettings); // TODO:TESTLOG

  // Extract theme from clientSettings
  const clientTheme = clientSettings.theme;
  console.log(`clientTheme:`, clientTheme); // TODO:TESTLOG

  // APPEND Theme Build
  const CURRENT_BUILD = flattenBuilds({ others: BUILDS, theme: THEME(clientTheme) });
  console.log(`CURRENT_BUILD:`, CURRENT_BUILD); // TODO:TESTLOG

  // BUILD Stylesheet upon theme change
  useEffect(() => {
    buildStyleSheet(CURRENT_BUILD);
  }, [clientTheme]);

  // RETURN WRAPPER
  return(
    <>{children}</>
  );
};
