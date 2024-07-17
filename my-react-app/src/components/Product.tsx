import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  addToCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, name, price, image, addToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
