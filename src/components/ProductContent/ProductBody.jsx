/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';
import './ProductBody.scss';
import { products } from '../../utils/utils';

function ProductBody() {
  const { id } = useParams();
  const product = products.filter((item) => item.id === Number(id));

  return (
    <section className="product">
      {
        product.map((item) => (
          <>
            <ImagesCarousel />
            <section
              className="product--align container"
              key={item.id}
            >
              <div className="product__title">
                <h1 className="product__name">
                  {item.name}
                  {' '}
                  {item.year}
                </h1>
                <h1 className="product__price">
                  R$
                  {' '}
                  {item.price}
                  <div className="product__line" />
                </h1>
              </div>
              <div className="product__body">
                <div className="product__details">
                  <ul className="product__list">
                    <li className="product__item">
                      <p className="product__subtitle">Marca</p>
                      <span>Branco</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Cor</p>
                      <span>Branco</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">KM</p>
                      <span>Branco</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Combustível</p>
                      <span>Branco</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Câmbio</p>
                      <span>Branco</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Motor</p>
                      <span>Branco</span>
                    </li>
                  </ul>
                </div>
                <div className="product__desc">
                  <p className="product__subtitle">Descrição</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </section>
          </>
        ))
      }
    </section>
  );
}

export default ProductBody;
