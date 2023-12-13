/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ImagesCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImagesCarousel() {
  const { id } = useParams();

  const [base64Images, setBase64Images] = useState();
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
  }, [id]);

  return (
    <section>
      <img
        alt="icon teste"
        className="vehicle__image"
        src={`data:image/${imageTypes};base64,${base64Images}`}
      />
    </section>
  );
}

export default ImagesCarousel;
