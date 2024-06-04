
// TODO? Develop a personal global dictionary for main component classifications

/**
 * CSS styles.js purposed for handling global styling elements
 * supported by extension 'react-native-extended-stylesheet'
 * https://github.com/vitalets/react-native-extended-stylesheet
 */

// IMPORT Dependency
import EStyleSheet from "react-native-extended-stylesheet";

// TODO Establish a finalized structure

// TODO! IMPORTANT: make sure necessary global variables are defined within your App.js EStyleSheet build

/**
 * STYLE [0] BASIC
 * basicmost styling and containment definitions to fallback to
 */
const basic = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

/**
 * STYLE [1] THEMING
 * define base font sizes, colors, and other global properties
 */

const theming = EStyleSheet.create({
    defaultLight:
    {
        // fontFamily: '',
        color: '$colorTextLight',
        backgroundColor: '$colorBackgroundLight',
        // ...
    },
    defaultDark:
    {
        // fontFamily: '',
        color: '$colorTextDark',
        backgroundColor: '$colorBackgroundDark',
        // ...
    }
})

/**
 * STYLE [2] PALETTE
 * define color palette for application
 */

const palette = EStyleSheet.create({
    default:
    {

    }
})

/**
 * STYLE [3] TYPOGRAPHY
 * define text classifications, their behaviours & attributes
 */
const typography = EStyleSheet.create({
    // TODO implement common title, label and paragraph types styling here
})

/**
 * STYLE [4] CLICKABLES
 * define visual characteristics of various common clickable elements
 */
const clickables = EStyleSheet.create({
    // TODO implement common clickable elements styling here
})

/**
 * STYLE [5] VISUALS
 * define common visual elements such as pictures and icons
 */
const visuals = EStyleSheet.create({
    // TODO implement common visual elements styling here
})

/**
 * STYLE [6] CONTAINMENT
 * define common containers behaviour and styling
 */
const contain = EStyleSheet.create({
    // TODO implement common container elements and definitions
    // may include both attributive and specific definitions
})

/**
 * STYLE [7] MISC
 * define styling implementations for misc. common element types
 * e.g. lists, forms, modals, alerts etc.
 */
// TODO decide to whether expand as 7.1 7.2 etc. or keep as is
const misc = EStyleSheet.create({
    // TODO implement misc. types of common elements styling here
})

/**
 * STYLE [?] SPATIAL
 * define common spatial utilities such as margins, paddings, spacings etc.
 */
// TODO decide to keep or remove
const spatial = EStyleSheet.create({
    // TODO implement common spatial utility elements here
})

///////////////////////////////////////////////////////////////////////////////
// COMBINE AND EXPORT STYLES
const styles =
{
    // TODO! include all stylesheets instances defined above here
    basic,
    theme: theming,
    palette,
    typography,
    clickables,
    visuals,
    contain,
    misc,
    spatial,
}

export default styles;
///////////////////////////////////////////////////////////////////////////////

// TODO! planning to keep component specific styling local to their own .js