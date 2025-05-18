import { useContext, useMemo, FC, useState } from 'react';
import { Link } from 'react-router';
import { PageProps } from '../types/props';
import { ProductsContext } from '../context/ProductsContext';
import { SearchContext } from '../context/SearchContext';
import SearchBar from '../ui/components/SearchBar';
import Wrapper from '../ui/components/Wrapper';

const Home: FC<PageProps> = ({ themeStyles }) => {
  const { products, loading, error } = useContext(ProductsContext);
  const { searchQuery } = useContext(SearchContext);
  const [ascendingAlpha, setAscendingAlpha] = useState(true);
  const [ascendingPrice, setAscendingPrice] = useState(true);

  // Filter products using the global search query; useMemo prevents unnecessary recalculations.
  const filteredProducts = useMemo(
    () =>
      products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [products, searchQuery],
  );

  if (loading) {
    return <div className={themeStyles.text}>Loading products...</div>;
  }

  if (error) {
    return <div className={themeStyles.text}>{error}</div>;
  }

  function handleAlphaSort() {
    if (ascendingAlpha) {
      setAscendingAlpha(false);
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      setAscendingAlpha(true);
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  function handlePriceSort() {
    if (ascendingPrice) {
      setAscendingPrice(false);
      filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else {
      setAscendingPrice(true);
      filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
  }

  return (
    <Wrapper themeStyles={themeStyles}>
      <SearchBar themeStyles={themeStyles} filteredProducts={filteredProducts} />
      <div className={themeStyles.pageBody}>
        <div className={themeStyles.sortItems}>
          <button onClick={handleAlphaSort}>alphabetically: {(ascendingAlpha) ? 'ascending' : 'descending'}</button>
          <button onClick={handlePriceSort}>price: {(ascendingPrice) ? 'ascending' : 'descending'}</button>
        </div>
        <h1 className={themeStyles.heading}>Products</h1>
        <div className={themeStyles.grid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={themeStyles.card}>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image.url}
                  alt={product.title}
                  className={themeStyles.image}
                />
                <h2 className={themeStyles.text}>{product.title}</h2>

                {product.discountedPrice < product.price ? (
                  <>
                    <p className={themeStyles.discount}>
                      Discounted: ${product.discountedPrice.toFixed(2)}
                    </p>
                    <p>
                      Total discount:{' '}
                      {(
                        ((product.price - product.discountedPrice) /
                          product.price) *
                        100
                      ).toFixed()}
                      %
                    </p>
                  </>
                ) : (
                  <p className={themeStyles.text}>
                    Price: ${product.price.toFixed(2)}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className={themeStyles.text}>No items found</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Home;
