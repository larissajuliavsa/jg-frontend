/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
// import Catalog from '../components/Catalog/Catalog';
import VehiclesBody from '../components/VehiclesBody/VehiclesBody';

function Vehicles() {
  return (
    <>
      <Navbar />
      <Hero />
      <VehiclesBody />
      {/* <Catalog /> */}
      <Footer />
    </>
  );
}

export default Vehicles;
