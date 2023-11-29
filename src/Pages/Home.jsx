import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import ProductsCarousel from '../components/ProductsCarousel/ProductsCarousel';
import AboutUs from '../components/AboutUs/AboutUs';

function Home() {
  // const [error, setError] = useState(null);

  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/vehicles/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('🚀 ~ data:', data);

  return (
    <>
      <Navbar />
      <Hero />
      <ProductsCarousel />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
