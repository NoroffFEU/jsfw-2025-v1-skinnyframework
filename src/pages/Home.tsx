import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ProductProps } from '../types/props';
import ProductCard from '../ui/components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { useSearch } from '../context/SearchContext';

const Home = () => {
  const { products, loading, error } = useProducts();
  const { searchTerm } = useSearch();
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure that products is an array
    if (!Array.isArray(products)) {
      setFilteredProducts([]);
      return;
    }

    // If there's no search term, display all products.
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }

    const matches = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(matches);

    // If exactly one match, automatically navigate to the product page.
    if (matches.length === 1) {
      navigate(`/product/${matches[0].id}`);
    }
  }, [searchTerm, products, navigate]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Home;
