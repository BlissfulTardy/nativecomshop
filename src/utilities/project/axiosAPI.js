
/**
 * AXIOS API implementation to handle data
 * communication with external databse
 */

// IMPORT Axios
import axios from 'axios';

// INSTANCE basicmost api
const axiosAPI = axios.create({
  baseURL: 'https://your-api-endpoint.com', // TODO! set base url when available
});

// FUNCTION for fetching products
export const fetchProducts = async () => {
  try {
    const response = await axiosAPI.get('/products');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};