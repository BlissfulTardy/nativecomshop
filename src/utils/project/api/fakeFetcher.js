
// TEMPORARY FAKE API IMPLEMENTATION

// FETCHER FUNCTION FOR PRODUCTS
export const fakeFetchProducts = async (amount) => {
  try {
    const endpoint = amount ? `https://fakestoreapi.com/products?limit=${amount}` : 'https://fakestoreapi.com/products';
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// FETCHER FUNCTION FOR CATEGORIES
export const fakeFetchCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};