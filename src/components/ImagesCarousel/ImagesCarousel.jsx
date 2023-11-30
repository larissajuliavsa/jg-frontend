/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import Product from '../Product/Product';
// import { productImage } from '../../utils/utils';

import './ImagesCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 980,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// function ImagesCarousel() {
//   const { id } = useParams();
//   const [base64Image, setBase64Image] = useState([]);
//   const [image, setImage] = useState([]);

//   const fetchImage = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/vehicles/images/${id}`, {
//         method: 'GET',
//       });

//       const result = await response.json();
//       setBase64Image(result);
//     } catch (err) {
//       console.error('erro: ', err);
//     }
//   };

//   const decodeImage = () => {
//     base64Image.forEach((base64String) => {
//       setImage(atob(base64String.split(',')[1]));
//     });
//   };
//   console.log('✨  base64Image:', base64Image);
//   console.log('✨  image:', image);

//   useEffect(() => {
//     fetchImage();
//     decodeImage();
//   }, []);

//   return (
//     <section>
//       <img src={image} alt="teste" />
//     </section>
//   );
// }

// export default ImagesCarousel;

function ImagesCarousel() {
  // const [images, setImages] = useState([]);
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

  // console.log('✨  base64Images:', base64Images);

  useEffect(() => {
    fetchImages();
  }, []);

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

/*

  return (
    <section>
      <Slider {...settings} className="home-products__carousel container">
        {
          productImage.map((item, index) => (
            <Product
              key={item.id}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
              type="images"
            />
          ))
        }
      </Slider>
      <div>
        <img src={image} alt="teste" />
      </div>
    </section>
  );

*/
