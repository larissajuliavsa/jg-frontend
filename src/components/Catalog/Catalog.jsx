/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';
import './Catalog.scss';
import { products } from '../../utils/utils';
import Product from '../Product/Product';

function Catalog() {
  return (
    <section className="catalog">
      <Filter />
      <div className="catalog__products">
        {
          products.map((item, index) => (
            <Link to="/product">
              <Product
                key={item.name}
                index={index}
                name={item.name}
                price={item.price}
                image={item.image}
                type="catalog"
              />
            </Link>
          ))
          }
      </div>
    </section>
  );
}

export default Catalog;
