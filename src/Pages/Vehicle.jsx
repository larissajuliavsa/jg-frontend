import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import ProductBody from '../components/ProductContent/ProductBody';

export default function Vehicle() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductBody />
      <Footer />
    </>
  );
}
