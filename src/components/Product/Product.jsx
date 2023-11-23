/* eslint-disable react/prop-types */
import React from 'react';
import './Product.scss';

function Product(props) {
  const {
    index, name, price, image, type,
  } = props;

  return (
    <div className="products__item" key={name}>
      <img className="products__img" src={image} alt={name} />
      {
        type === 'catalog' ? (
          <>
            <p className="products__title">
              {name}
              {' '}
              {index}
            </p>
            <p className="products__desc">
              R$
              {' '}
              {price}
              {' '}
            </p>
          </>
        ) : ''
      }
    </div>
  );
}

export default Product;
