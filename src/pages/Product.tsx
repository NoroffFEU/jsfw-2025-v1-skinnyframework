import { FC } from "react";

interface ProductProps {
  themeStyles: { [key: string]: string };
}

const Product: FC<ProductProps> = ({ themeStyles }) => {
  return (
    <>
      <h1 className={themeStyles.heading}>PRODUCT</h1>
    </>
  );
};

export default Product;
