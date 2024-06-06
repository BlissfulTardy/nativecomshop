
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
// TODO! import updated counterparts when ready
import SectionSerializerLabeled from '../../../components/SectionSerializerLabeled';
/*
import SectionSerializerLabeled from '../../components/common/SectionSerializerLabeled';
import CardProduct from '../../components/CardProduct';
import ButtonGridCategory from '../../components/ButtonGridCategory';
*/

// SCREEN COMPONENT
const ScreenMainHome = () => {

  // PRODUCTS & CATEGORIES DATA
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // USE EFFECT IMPLEMENTATION FOR DATA FETCH WITH API
  useEffect(() => {
    // FETCH DATA
    const fetchData = async () => {
      // FETCH AND SET POPULAR PRODUCTS
      const fetchedProducts = await (fakeFetchProducts(50));
      setProducts(fetchedProducts)
      // FETCH AND SET CATEGORIES
      const fetchedCategories = await (fakeFetchCategories());
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
        renderItem={ButtonGridCategory}
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
