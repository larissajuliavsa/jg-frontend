/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import { products } from '../../utils/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsCarousel.scss';

function ProductsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="home-products">
        <Slider {...settings} className="home-products__carousel container">
          {
            products.map((item, index) => (
              <Link to="/product">
                <Product
                  key={index}
                  index={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  type="catalog"
                />
              </Link>
            ))
          }
        </Slider>
        <Link to="/veiculos" className="button--primary">ver mais</Link>
      </section>

      <section className="home-banner" />
    </>
  );
}

export default ProductsCarousel;
