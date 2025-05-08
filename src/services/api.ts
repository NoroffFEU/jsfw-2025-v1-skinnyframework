import { mockData } from './mockProductData';
const API_URL = 'https://v2.api.noroff.dev/online-shop';
const isOffline = true;

interface ImageProps {
  url: string;
  alt: string;
}

interface ReviewProps {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ImageProps;
  rating: number;
  tags: string[];
  reviews: ReviewProps[];
}

// The response for fetching all products
interface ProductsResponse {
  data: ProductProps[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}

// The response for fetching a single product
interface SingleProductResponse {
  data: ProductProps;
  meta: unknown;
}

// A utility function to fetch data from our API endpoint and handle errors.
async function fetchAPI(endpoint: string): Promise<any> {
  let response;
  if (isOffline) {
    response = mockData;
    return response;
  } else {
    response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  }
}

// Fetch all products
export async function getProducts(): Promise<ProductProps[]> {
  const json: ProductsResponse = await fetchAPI('/');
  return json.data;
}

// Fetch a single product by ID
export async function getProductById(id: string): Promise<ProductProps> {
  let json: SingleProductResponse;
  let result;
  if (isOffline) {
    const index = parseInt(id) - 1;
    result = mockData.data[index];
  } else {
    json = await fetchAPI(`/${id}`);
    result = json.data;
  }
  return result;
}

// Testing function to log products to the console
// This is just for testing purposes to see if the API call works correctly.
// async function logProducts() {
//   try {
//     const products = await getProducts();
//     console.log(products);
//   } catch (error) {
//     console.error('Failed to fetch products:', error);
//   }
// }

// logProducts();
