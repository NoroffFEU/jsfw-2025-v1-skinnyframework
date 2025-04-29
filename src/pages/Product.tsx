import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductById, Product as ProductType } from '../services/api';

interface ProductProps {
  themeStyles: { [key: string]: string };
}

const Product: FC<ProductProps> = ({ themeStyles }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const fetchedProduct = await getProductById(id);
          setProduct(fetchedProduct);
        } catch (err: any) {
          console.error('Error fetching product:', err);
          setError('Failed to load product.');
        } finally {
          setLoading(false);
        }
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className={themeStyles.text}>Loading product...</div>;
  }

  if (error) {
    return <div className={themeStyles.text}>{error}</div>;
  }

  if (!product) {
    return <div className={themeStyles.text}>Product not found.</div>;
  }

  // Compute discount percentage if applicable
  const isDiscounted = product.discountedPrice < product.price;
  const discountPercentage = isDiscounted
    ? Math.round(100 - (product.discountedPrice / product.price) * 100)
    : 0;

  return (
    <div className={themeStyles.pageBody}>
      <h1 className={themeStyles.heading}>{product.title}</h1>
      <img
        src={product.image.url}
        alt={(product.image.alt !== '' && product.image.alt) ? product.image.alt : product.title}
        className={themeStyles.image}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      {isDiscounted && (
        <div>
          <p>
            Discounted Price: ${product.discountedPrice.toFixed(2)} (
            {discountPercentage}% off)
          </p>
        </div>
      )}
      {product.reviews && product.reviews.length > 0 && (
        <div>
          <h3>Reviews:</h3>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <p>
                {review.username} - {review.rating}/5
              </p>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      )}
      <button className={themeStyles.button}>Buy this thing</button>
    </div>
  );
};

export default Product;