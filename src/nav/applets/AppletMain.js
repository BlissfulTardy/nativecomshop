
// IMPORT Dependencies
import React, { useState, useEffect } from 'react';
import { View } from 'react-native'

// IMPORT Navigator
import NavigatorMain from '../navigators/NavigatorMain';

// IMPORT Styles
import PROJECT_STYLES from '../../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

// IMPORT Components
import HeaderCommon from '../../components/HeaderCommon';

// IMPORT Selector
import { useSelector } from 'react-redux';

// IMPORT Handler
import HandlerShopData from '../../utils/project/handlers/HandlerShopData';

// IMPORT Context Provider
import { ProviderFetchedDataFake } from '../../contexts/ContextFetchedDataFake';
import { ProviderShopData } from '../../contexts/ContextShopData';
import { ProviderClientCart } from '../../contexts/ContextClientCart';
// ?? import { ProviderClientSettings } from '../../contexts/ContextClientSetings';

// IMPORT API
import { fakeFetchProducts, fakeFetchCategories } from '../../utils/project/api/fakeFetcher';

import { useDispatch } from 'react-redux';

// APPLET main component
const AppletMain = ({ states, utils, data }) => {

  const dispatch = useDispatch();

  // TODO REPLACE DUMMY DATABASE FETCING IMPLEMENTATION WITH ACTUAL WHEN READY ////////////////////

  // TODO* dummy flag state whether app is currently initiating
  const [init, setInit] = useState(true);
  // TODO* dummy flag state variable for data fetch initiations
  const [fetching, setFetching] = useState(false);

  const [productsFake, setProductsFake] = useState([]);
  const [categoriesFake, setCategoriesFake] = useState([]);

  // TODO* initialization fetch call useEffect to be fired once only
  useEffect(() => {
    if (init || fetching) {
      console.log(`commencing data fetch...`); // TODO:TESTLOG

      // Fetch products
      fakeFetchProducts()
        .then(responseProductsFake => {
          console.log(`fetched products (fake): `, responseProductsFake); // TODO:TESTLOG
          setProductsFake(responseProductsFake);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });

      // Fetch categories
      fakeFetchCategories()
        .then(responseCategoriesFake => {
          console.log(`fetched categories (fake) `, responseCategoriesFake); // TODO:TESTLOG
          setCategoriesFake(responseCategoriesFake);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });

      console.log(`assigning fetched data...`); // TODO:TESTLOG

      // Set fetching and initialization states
      setFetching(false);
      setInit(false);
      console.log(`data fetch complete!`); // TODO:TESTLOG
    }
  }, [init]); // Only run this effect once when `init` is true

  // TODO REPLACE DUMMY DATABASE FETCING IMPLEMENTATION WITH ACTUAL WHEN READY ////////////////////

  return (
    // TODO* Providing Fetched Fake Data
    <ProviderFetchedDataFake>
      <View style={PROJECT_STYLES.containers['containerScreen']}>
        <HeaderCommon/>
        <NavigatorMain/>
      </View>
    </ProviderFetchedDataFake>
  );
};


// STATES of this applet
const statesMain = {
  // TODO implement states required locally
};

// UTILITIES of this applet
const utilsMain = {
  // TODO implement util methods required locally
};

// DATA of this applet
const dataMain = {
  // TODO implement util methods required locally
};

export default AppletMain;
export { statesMain, utilsMain, dataMain };