
// IMPORT REACT
import React from 'react';

// IMPORT REACT NATIVE
import { Pressable, Text } from 'react-native';

// IMPORT STYLES
import PROJECT_STYLES from '../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const ButtonGridCategories = ({ item, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        buttonGridCategories.buttonGridCategory,
        { 
          backgroundColor: pressed
          ? '#000277'
          : EStyleSheet.value('$colorPrimaryDark'), // change on press // TODO reconsider
        }
      ]}
      onPress={() => onPress(item)}
    >
      {/* Display category name */}
      <Text style={buttonGridCategories.labelbuttonGridCategory}>{item}</Text>
    </Pressable>
  );
};

export default ButtonGridCategories;

// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const buttonGridCategories = EStyleSheet.create({
  // TODO reconsider implementations here
  buttonGridCategory: {
    flex: 1,
    aspectRatio: 1.5,
    height: '80px',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '$colorAppPrimary',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelbuttonGridCategory: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
})