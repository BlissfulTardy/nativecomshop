
// IMPORT React
import { useState } from 'react';
// IMPORT React-Native
import { View, Text, Modal, Pressable, TextInput, ScrollView } from 'react-native';
// IMPORT Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from '../../styles';
// IMPORT Components
import SectionSerializerLabeled from './SectionSerializerLabeled';

const SectionSerializerSearcher = ({ title, data, containerStyle, renderItem, keyExtractor, horizontal = true, showsScrollIndicator = false, numColumns = 1 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const clearFilters = () => {
    setSearchText('');
    // Add logic to clear other filters if needed
  };

  const handleSearch = () => {
    // Add logic to perform search based on searchText
  };

  return (
    /* SECTION CONTAINER */
    <View style={PROJECT_STYLES.containers['containerSectionDefault']}>
      {/* SECTION TITLE */}
      <View>
        {title && (
          <View>
            <Text style={PROJECT_STYLES.typography['titleSectionDefault']}>{title}</Text>
          </View>
        )}
      </View>

      {/* SEARCHBAR */}
      <View style={sectionSerializerSearcher.componentSerializerSearcher}>
        <View style={sectionSerializerSearcher.searchbarSerializerSearcher}>
          <TextInput
            style={sectionSerializerSearcher.inputSearchbarSerializerSearcher}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for an item..."
          />
        </View>
        <View style={sectionSerializerSearcher.containerSerializerSearcherButtonsSearchbar}>
          <Pressable onPress={toggleModal} style={sectionSerializerSearcher.buttonFilter}>
            <Text>Filter</Text>
          </Pressable>
          <Pressable onPress={clearFilters} style={sectionSerializerSearcher.buttonClear}>
            <Text>Clear</Text>
          </Pressable>
          <Pressable onPress={handleSearch} style={sectionSerializerSearcher.buttonSearch}>
            <Text>Search</Text>
          </Pressable>
        </View>

        {/* MODAL FOR FILTERING */}
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={sectionSerializerSearcher.containerModal}>
              {/* TODO: IMPLEMENT MODAL CONTENT */}
              <Pressable onPress={toggleModal} style={sectionSerializerSearcher.buttonCloseModal}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </Modal>
        </View>

      </View>

      {/* SCROLLABLE CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionSerializerLabeled
          data={data}
          containerStyle={containerStyle}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          showsScrollIndicator={showsScrollIndicator}
          numColumns={numColumns}
        />
      </ScrollView>
    </View>
  );
};

export default SectionSerializerSearcher;

// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const sectionSerializerSearcher = EStyleSheet.create({
  // TODO reconsider implementations here
  componentSerializerSearcher: {
    padding: '10px',
  },
  searchbarSerializerSearcher: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$colorForeground',
    borderRadius: 10,
    height: 50,
    marginHorizontal: '10%',
    marginBottom: '10px',
  },
  inputSearchbarSerializerSearcher: {
    flex: 1,
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: '$colorText',
    borderRadius: 10,
    paddingLeft: 10,
  },
  containerSerializerSearcherButtonsSearchbar: {
    width: '75%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonFilter: {
    width: '30%',
    backgroundColor: 'darkorange',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    color: '$colorLabel',
  },
  buttonClear: {
    width: '30%',
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    color: '$colorLabel',
  },
  buttonSearch: {
    width: '30%',
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    color: '$colorLabel',
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonCloseModal: {

  },
})