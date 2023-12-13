/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import spin from '../../assets/images/spin.svg';
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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/vehicles/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      setLoading(false);
      setData(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <>
      <section className="home-products">
        {
          loading ? (
            <img src={spin} alt="spin icon" className="home-products__spin" />
          ) : (
            <Slider {...settings} className="home-products__carousel container">
              {
                data && data.map((item) => (
                  <Link key={item.id} to={`/veiculo/${item.id.toString()}`}>
                    <Product
                      id={item.id}
                      name={item.model}
                      price={item.price}
                      color={item.color}
                      year={item.year}
                      type="catalog"
                    />
                  </Link>
                ))
              }
            </Slider>
          )
        }
        <Link to="/veiculos" className="button--primary">ver mais</Link>
      </section>

      <section className="home-banner" />
    </>
  );
}

export default ProductsCarousel;
