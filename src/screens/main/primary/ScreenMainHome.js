
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT Dependencies
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';

// IMPORT Styles
import PROJECT_STYLES from '../../../../styles';

// IMPORT API
// TODO! import updated counterparts when ready
/*
import { fakeFetchProducts, fakeFetchCategories } from '../../api/fakeFetcher';
*/

// IMPORT COMPONENTS
import SectionSerializerLabeled from '../../../components/SectionSerializerLabeled';
import CardProduct from '../../../components/CardProduct';
import ButtonGridCategories from '../../../components/ButtonGridCategories';

// SCREEN COMPONENT
const ScreenMainHome = () => {

  // PRODUCTS & CATEGORIES DATA
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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

    /* SCROLL VIEW */
    <ScrollView
    style={PROJECT_STYLES.containers['containerPageTab']}
    showsVerticalScrollIndicator={false}
    >
      
      {/* POPULAR ITEMS SLIDER SECTION */}
      <SectionSerializerLabeled
        title={'Popular'}
        data={products}
        containerStyle={'containerSlider'}
        renderItem={CardProduct}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />

      {/* CATEGORIES GRID */}
      <SectionSerializerLabeled
        title={'Categories'}
        data={categories}
        containerStyle={'containerGrid'}
        renderItem={ButtonGridCategories}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
      />

      {/* Product recommendations (optional) */}
      {/* Implementation based on user's purchase history */}

    </ScrollView>

  );
};

export default ScreenMainHome;
