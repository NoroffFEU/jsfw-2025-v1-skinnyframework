const API_URL = 'https://v2.api.noroff.dev/online-shop';

interface Image {
  url: string;
  alt: string;
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
}

// The response for fetching all products
interface ProductsResponse {
  data: Product[];
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
  data: Product;
  meta: unknown; 
}

// A utility function to fetch data from our API endpoint and handle errors.
async function fetchAPI(endpoint: string): Promise<any> {
  const response = await fetch(`${API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  const json: ProductsResponse = await fetchAPI('/');
  return json.data;
}

// Fetch a single product by ID
export async function getProductById(id: string): Promise<Product> {
  const json: SingleProductResponse = await fetchAPI(`/${id}`);
  return json.data;
}

// For testing purposes, you might log products to the console.
// (You can remove or comment this out later.)
async function logProducts() {
  try {
    const products = await getProducts();
    console.log(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

logProducts();