
// IMPORT Dependency
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// IMPORT Component
import RoutingAuth from './src/nav/navigators/RoutingAuth';

// SETUP Application Styling Global Variables
///////////////////////////////////////////////////////////////////////////////
// IMPORT StyleSheet & Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles'; // TODO Revise when its implementation done
// BUILD Style at top level
EStyleSheet.build(
  { // TODO Introduce global CSS variables here when ready: $variable: 'value'
    /* [0] TESTING */
    //$outline: 1 // TEST

    /* [1] THEMING */
    // TODO decide whether and how to implement light/dark theme
    // TODO decide whether different light/dark colors should apply to pri/sec/ter
    // COLOR: BACKGROUND
    $colorBackgroundLight: '#ddd',
    $colorBackgroundDark: '#222',
    // COLOR: FOREGROUND slighly lighter/darker of background
    $colorForegroundLight: '', // TODO determine appropriate
    $colorForegoundDark: '', // TODO determine appropriate
    // COLOR: TEXT
    $colorTextLight: '#222',
    $colorTextDark: '#ddd',
    // COLOR: LINK
    $colorLinkLight: '', // TODO determine appropriate
    $colorLinkDark: '', // TODO determine appropriate
    // COLOR: PRIMARY
    $colorPrimaryLight: '#0059bb',
    $colorPrimaryDark: '0059bb',
    // COLOR: SECONDARY
    $colorSecondaryLight: '', // TODO determine appropriate
    $colorSecondaryDark: '', // TODO determine appropriate
    // COLOR: TERTIARY
    $colorTertiaryLight: '', // TODO determine appropriate
    $colorTertiaryDark: '', // TODO determine appropriate
    // COLOR: BORDER
    $colorBorderLight: '', // TODO determine appropriate
    $colorBorderDark: '', // TODO determine appropriate

    // [2] COLOURING assign repetitive colors
    // COLOR: BUTTONS
    $colorButtonGreen: '', // TODO determine appropriate
    $colorButtonRed: '', // TODO determine appropriate
    $colorButtonBlue: '', // TODO determine appropriate
    $colorButtonYellow: '', // TODO determine appropriate

    // TODO? consider another scaling variable for accessibility settings later on
    // [3] TYPEFACE define main text font characteristics
    $fFamily: '', // TODO determine appropriate
    // font sizes
    $fSize1: '', // TODO determine appropriate
    $fSize2: '', // TODO determine appropriate
    $fSize3: '', // TODO determine appropriate
    $fSize4: '', // TODO determine appropriate
    $fSize5: '', // TODO determine appropriate
    $fSize6: '', // TODO determine appropriate
    // font heights // TODO determine whether different font heights are necessary
    $fHeight1: '', // TODO determine appropriate
    $fHeight2: '', // TODO determine appropriate
    $fHeight3: '', // TODO determine appropriate
    $fHeight4: '', // TODO determine appropriate
    $fHeight5: '', // TODO determine appropriate
    $fHeight6: '', // TODO determine appropriate

    // [4] SPACING
    // MARGIN
    $mar0: '', // TODO determine appropriate
    $mar1: '', // TODO determine appropriate
    $mar2: '', // TODO determine appropriate
    // PADDING
    $pad0: '', // TODO determine appropriate
    $pad1: '', // TODO determine appropriate
    $pad2: '', // TODO determine appropriate
    // SPACING
    $spa1: '', // TODO determine appropriate
    $spa2: '', // TODO determine appropriate
    $spa3: '', // TODO determine appropriate

    // TODO! introduce further global variables if required

  }
)
///////////////////////////////////////////////////////////////////////////////

export default function App() {
  // TODO implement variables and logic if required
  return (
    // TODO wrap with provider or misc if required
    <RoutingAuth/> // main router component handling user login status
  );
}