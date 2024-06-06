
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
/*
import { fakeFetchProducts, fakeFetchCategories } from '../../api/fakeFetcher';
*/

// IMPORT COMPONENTS
import SectionSerializerSearcher from '../../../components/SectionSerializerSearcher';
import CardProduct from '../../../components/CardProduct';

// SCREEN COMPONENT
const ScreenMainSearch = () => {

  // PRODUCTS & CATEGORIES DATA
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  /**
   * TODO: set this as a clone of the initially fetched products
   * as im planning to utilize this for the filter operations
   */
  const [filtered, setFiltered] = useState([]);

  // USE EFFECT IMPLEMENTATION FOR DATA FETCH WITH API
  // TODO! consider mitigating data fetch entirely elsewhere appropriate
  // TODO! consider implementing this elsewise however most appropriate
  useEffect(() => {

    // FETCH DATA
    const fetchData = async () => {

      // FETCH AND SET POPULAR PRODUCTS
      const fetchedProducts = []; // TODO! fetch products here when API method ready
      setProducts(fetchedProducts)

      // FETCH AND SET CATEGORIES
      const fetchedCategories = []; // TODO! fetch products here when API method ready
      setCategories(fetchedCategories)

    }
    fetchData();
  }, []);

  // COMPONENT COMPOSITION
  return (
    /* PAGE CONTAINER */
    <View style={PROJECT_STYLES.containers['containerPageTab']}>

    {/* SEARCHER SECTION COMPONENT */}
      <SectionSerializerSearcher
        title="Search Products"
        data={products}
        containerStyle={'containerScroller'}
        renderItem={CardProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsScrollIndicator={false}
        numColumns={2}
      />

    </View>
  );
};

export default ScreenMainSearch;