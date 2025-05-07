import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { PageProps } from '../types/props';
import { ProductsContext } from '../context/ProductsContext';

const Home: React.FC<PageProps> = ({ themeStyles }) => {
  const { products, loading, error } = useContext(ProductsContext);

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
        {products.map(product => (
          <div key={product.id} className={themeStyles.card}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image.url}
                alt={product.title}
                className={themeStyles.image}
              />
              <h2 className={themeStyles.text}>{product.title}</h2>
              <p className={themeStyles.text}>
                Price: ${product.price.toFixed(2)}
              </p>
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
};

export default Home;
