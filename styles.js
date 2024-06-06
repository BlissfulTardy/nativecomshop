
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
  labelSectionDefault: { // TODO reconsider mitigating to own component
    paddingVertical: 20, // Temporary
    color: '$colorPrimaryDark',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
	labelHeaderCommon: { // TODO reconsider mitigating to own component
    color: '#fff', // TODO: adjust color
    fontSize: 26,
    fontWeight: 'bold',
  },
	labelTitleDefault: { // TODO reconsider
    fontSize: 26,
    fontWeight: 'bold',
    color: '$colorAppPrimary',
    textAlign: 'center',
  },
	labelLoggedUser: { // TODO reconsider mitigating to own component or elsewhere
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
	labelLink: { // TODO! implement this
		// TODO implement as required
	},
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
const containers = EStyleSheet.create({
	// TODO implement common container elements and definitions
	// may include both attributive and specific definitions
	containerScreen: { // TODO reconsider
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		// not introducing padding here as this is the mother container
	},
	containerDefault: { // TODO! consider what this undefined def should b
		// TODO implement as required
	},
	containerPageDefault: { // TODO reconsider
		flex: 1,
		//padding: '$paddingPageDefault' // TODO reconsider
	},
	containerPageTab: {
    flex: 1,
    //padding: '$paddingPageTab' // TODO reconsider
	},
  containerSlider: { // TODO reconsider
    flex: 1,
    paddingHorizontal: -10,
    // paddingVertical: 10,
  },
  containerGrid: { // TODO reconsider
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
	containerSectionDefault: { // TODO reconsider
    flex: 1,
    paddingHorizontal: 0,
    // paddingVertical: 20,
  },
	headerCommon: { // TODO reconsider
    height: '$heightHeader',
    backgroundColor: '$colorPrimaryDark', // TODO reconsider
    justifyContent: 'center',
    alignItems: 'center',
  },
	containerPageCentered: { // TODO reconsider
    flex: 1,
    // TODO: revise default alingment behaviour if required later
    alignItems: 'center',
    justifyContent: 'center',
  },
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
	gapVertical10: { // TODO reconsider
    paddingTop: 10,
  },
  gapVeertical15: { // TODO reconsider
    paddingTop: 15,
  },
  paddingDefault: { // TODO reconsider
    padding: 20,
  },
})

///////////////////////////////////////////////////////////////////////////////
// COMBINE AND EXPORT STYLES
const PROJECT_STYLES =
{
	// TODO! include all stylesheets instances defined above here
	basic,
	theming,
	palette,
	typography,
	clickables,
	visuals,
	containers,
	misc,
	spatial,
}

export default PROJECT_STYLES;
///////////////////////////////////////////////////////////////////////////////

// TODO! planning to keep component specific styling local to their own .js