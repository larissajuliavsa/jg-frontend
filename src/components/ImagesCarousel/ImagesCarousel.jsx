/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ImagesCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ImagesCarousel() {
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
  const { id } = useParams();

  const [base64Images, setBase64Images] = useState([]);
  const imageTypes = 'jpg' || 'jpeg' || 'png';
  const fetchImages = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/vehicles/images/${id}`, {
        method: 'GET',
      });

      const result = await response.json();
      setBase64Images(result.toString());
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [id]);

  return (
    <section>
      <Slider {...settings} className="home-products__carousel container">
        {
          base64Images.map((item) => (
            <img
              alt="icon teste"
              className="vehicle__image"
              src={`data:image/${imageTypes};base64,${item}`}
            />
          ))
        }
      </Slider>
    </section>
  );
}

export default ImagesCarousel;
