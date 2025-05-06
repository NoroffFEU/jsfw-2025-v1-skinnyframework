import React from 'react';
import { Link } from 'react-router';
import { ProductProps } from '../../types/props';

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasDiscount = product.discountedPrice < product.price;

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img
          src={product.image.url}
          alt={product.image.alt}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
            marginBottom: '0.5rem',
          }}
        />
        <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>
          {product.title}
        </h2>
        <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
          <span
            style={
              hasDiscount
                ? { textDecoration: 'line-through', color: '#888' }
                : {}
            }
          >
            ${product.price.toFixed(2)}
          </span>{' '}
          {hasDiscount && (
            <span
              style={{ color: 'red', fontWeight: 'bold', marginLeft: '0.5rem' }}
            >
              ${product.discountedPrice.toFixed(2)}
            </span>
          )}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
