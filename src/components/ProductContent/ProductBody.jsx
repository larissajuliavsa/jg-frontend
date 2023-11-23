import React from 'react';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';
import './ProductBody.scss';

function ProductBody() {
  return (
    <section className="product">
      <ImagesCarousel />
      <section className="product--align container">
        <div className="product__title">
          <h1 className="product__name">CARRO 2017/2018</h1>
          <h1 className="product__price">
            R$ 52.500,00
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
            <p>
              Ar condicionado, direção hidráulica, travas elétricas,
              {' '}
              freio ABS, vidros elétricos, airbag motorista e passageiro.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProductBody;
