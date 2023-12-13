/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Product.scss';
import { formatCurrency } from '../../utils/utils';
import placeholder from '../../assets/images/image-placeholder.svg';

function Product(props) {
  const {
    id, name, price, year, type,
  } = props;

  const [base64Images, setBase64Images] = useState([]);
  const imageTypes = 'jpg' || 'jpeg' || 'png';

  const fetchImages = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/vehicles/images/${id}`, {
        method: 'GET',
      });

      const result = await response.json();
      setBase64Images(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const imageToShow = base64Images
  && base64Images.length > 0 ? `data:image/${imageTypes};base64,${base64Images[0]}` : placeholder;

  return (
    <div className="products__item" key={name}>
      <img
        alt="icon teste"
        className="vehicle__image"
        src={imageToShow}
      />
      {
        type === 'catalog' ? (
          <>
            <p className="products__title">
              {name}
            </p>
            <p className="products__desc">
              {formatCurrency(price.toString())}

            </p>
            <p className="products__desc">
              {year}
            </p>
          </>
        ) : ''
      }
    </div>
  );
}

export default Product;
