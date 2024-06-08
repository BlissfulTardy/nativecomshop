
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

// IMPORT Provider
import { ProviderShopData } from '../../contexts/ContextShopData';
import { ProviderClientCart } from '../../contexts/ContextClientCart';
// ?? import { ProviderClientSettings } from '../../contexts/ContextClientSetings';

// IMPORT API
import { fakeFetchProducts, fakeFetchCategories } from '../../utils/project/api/fakeFetcher';

import { useDispatch } from 'react-redux';

// APPLET main component
const AppletMain = ({ states, utils, data }) => {
  const [init, setInit] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      const fetchData = async () => {
        const fetchedProducts = await fakeFetchProducts(50);
        console.log('Fetched products:', fetchedProducts);
        HandlerShopData.setProducts(dispatch, fetchedProducts);

        const fetchedCategories = await fakeFetchCategories();
        console.log('Fetched categories:', fetchedCategories);
        HandlerShopData.setCategories(dispatch, fetchedCategories);

        setInit(false);
      };
      fetchData();
    }
  }, [init, dispatch]);

  return (
    <View style={PROJECT_STYLES.containers['containerScreen']}>
      <HeaderCommon/>
      <NavigatorMain/>
    </View>
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