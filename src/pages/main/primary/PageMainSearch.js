
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT REACT
import React, { useEffect, useState } from 'react';

// IMPORT REACT NATIVE
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';

// IMPORT STYLES
import PROJECT_STYLES from '../../../../styles';

// IMPORT API
// TODO! import updated counterparts when ready

// IMPORT COMPONENTS
import SectionSerializerSearcher from '../../../components/SectionSerializerSearcher';
import CardProduct from '../../../components/CardProduct';

import HandlerClientCart from '../../../utils/project/handlers/HandlerClientCart';
import reducerClientCart from '../../../store/reducers/reducerClientCart';

// IMPORT Main
import { statesMain, utilsMain, dataMain } from '../../../nav/applets/AppletMain';
import { fakeFetchProducts, fakeFetchCategories } from './../../../utils/project/api/fakeFetcher';

// SCREEN COMPONENT
const PageMainSearch = () => {

  // RECEIVE Fetched Data From Above
  const { products, categories } = useFetchedDataFake();

  // COMPONENT COMPOSITION
  return (
    /* PAGE CONTAINER */
    <View style={PROJECT_STYLES.containers['containerPageTab']}>

    {/* SEARCHER SECTION COMPONENT */}
      <SectionSerializerSearcher
        title="Search Products"
        data={products} // TODO! replace dummy implementation
        containerStyle={'containerScroller'}
        renderItem={({ item }) => (
          <CardProduct
            item={item}
            cart={HandlerClientCart}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsScrollIndicator={false}
        numColumns={2}
      />

    </View>
  );
};

export default PageMainSearch;