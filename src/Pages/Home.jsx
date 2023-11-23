import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import ProductsCarousel from '../components/ProductsCarousel/ProductsCarousel';
import AboutUs from '../components/AboutUs/AboutUs';

function Home() {
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
