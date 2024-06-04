
// IMPORT Dependency
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT Style
import styles from './styles'; // TODO Revise when its implementation done
// BUILD Style
EStyleSheet.build(
  { // TODO Introduce global CSS variables here when ready: $variable: 'value'
    /* [0] TESTING */
    //$outline: 1 // TEST

    /* [1] THEMING */
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
    $colorSecondaryDark: '',
    // COLOR: TERTIARY
    $colorTertiaryLight: '', // TODO determine appropriate
    $colorTertiaryDark: '',
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
    $fontFamily: '', // TODO determine appropriate
    // font sizes
    $fontSize1: '', // TODO determine appropriate
    $fontSize2: '', // TODO determine appropriate
    $fontSize3: '', // TODO determine appropriate
    $fontSize4: '', // TODO determine appropriate
    $fontSize5: '', // TODO determine appropriate
    $fontSize6: '', // TODO determine appropriate
    // font heights
    $fontHeight1: '', // TODO determine appropriate
    $fontHeight2: '', // TODO determine appropriate
    $fontHeight3: '', // TODO determine appropriate
    $fontHeight4: '', // TODO determine appropriate
    $fontHeight5: '', // TODO determine appropriate
    $fontHeight6: '', // TODO determine appropriate

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

export default function App() {
  return (
    <View style={styles.basic.container}>
      {/* // TODO implement this */}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}