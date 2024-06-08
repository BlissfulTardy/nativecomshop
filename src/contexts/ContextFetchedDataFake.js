
// IMPORT React
import React, { createContext, useState, useEffect } from 'react';
import { fakeFetchProducts, fakeFetchCategories } from '../utils/project/api/fakeFetcher';

// CREATE CONTEXT
const FetchedDataContext = createContext();

// PROVIDER COMPONENT
export const ProviderFetchedDataFake = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProducts = await fakeFetchProducts();
        const responseCategories = await fakeFetchCategories();
        setProducts(responseProducts);
        setCategories(responseCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <FetchedDataContext.Provider value={{ products, categories, isLoading }}>
      {children}
    </FetchedDataContext.Provider>
  );
};

export const useFetchedDataFake = () => React.useContext(FetchedDataContext);
