
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT Dependencies
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';

// IMPORT Styles
import PROJECT_STYLES from '../../../../styles';

// IMPORT API
// TODO! import updated counterparts when ready
import { fakeFetchProducts, fakeFetchCategories } from '../../../utils/project/api/fakeFetcher';
/*
import { fakeFetchProducts, fakeFetchCategories } from '../../api/fakeFetcher';
*/

// IMPORT Reducer
import reducerShopData from '../../../store/reducers/reducerShopData';
import reducerClientCart from '../../../store/reducers/reducerClientCart';

// IMPORT Handler
import HandlerClientCart from '../../../utils/project/handlers/HandlerClientCart';
import HandlerShopData from '../../../utils/project/handlers/HandlerShopData';

import { statesMain, utilsMain, dataMain } from '../../../nav/applets/AppletMain';

// IMPORT COMPONENTS
import SectionSerializerLabeled from '../../../components/SectionSerializerLabeled';
import CardProduct from '../../../components/CardProduct';
import ButtonGridCategories from '../../../components/ButtonGridCategories';
import { useShopData } from '../../../contexts/ContextShopData';
import { useDispatch } from 'react-redux';

// SCREEN COMPONENT
const PageMainHome = () => {

  dispatch = useDispatch()

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
        data={fakeFetchProducts(50)} // TODO! replace dummy implementation
        containerStyle={'containerSlider'}
        renderItem={
          <CardProduct
          cart={utilsMain.CLIENT_CART}
          />
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />

      {/* CATEGORIES GRID */}
      <SectionSerializerLabeled
        title={'Categories'}
        data={fakeFetchCategories()} // TODO! replace dummy implementation
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

export default PageMainHome;
