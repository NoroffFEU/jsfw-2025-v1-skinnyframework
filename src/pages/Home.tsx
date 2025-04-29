import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { PageProps } from '../types/props';
import { getProducts, Product } from '../services/api';

const Home: React.FC<PageProps> = ({ themeStyles }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        // console.log('Products:', fetchedProducts); // Log to verify API response
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <div className={themeStyles.text}>Loading products...</div>;
  }

  if (error) {
    return <div className={themeStyles.text}>{error}</div>;
  }

  if (products.length === 0) {
    return <div className={themeStyles.text}>No products available.</div>;
  }

  return (
    <div className={themeStyles.pageBody}>
      <h1 className={themeStyles.heading}>Products</h1>
      <div className={themeStyles.grid}>
        {products.map((product) => (
          <div key={product.id} className={themeStyles.card}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image.url}
                alt={product.title}
                className={themeStyles.image}
              />
              <h2 className={themeStyles.text}>{product.title}</h2>
              <p className={themeStyles.text}>Price: ${product.price.toFixed(2)}</p>
              {product.discountedPrice < product.price && (
                <p className={themeStyles.discount}>
                  Discounted: ${product.discountedPrice.toFixed(2)}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;