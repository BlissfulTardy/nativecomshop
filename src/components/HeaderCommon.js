
// IMPORT React
import React from 'react';
// IMPORT React-Native
import { View, Text } from 'react-native';
// IMPRT Styles
import PROJECT_STYLES from '../../styles';

/**
 * Fixed universal header of the application
 */
const HeaderCommon = () => {
  return (
    <View style={PROJECT_STYLES.containers['headerCommon']}>
        <Text style={PROJECT_STYLES.typography['labelHeaderCommon']}>NativEcom</Text>
    </View>
  )
}

export default HeaderCommon

// TODO? consider pulling remainder stylings in PROJECT_STYLES here