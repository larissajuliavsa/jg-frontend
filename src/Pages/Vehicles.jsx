/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import VehiclesBody from '../components/VehiclesBody/VehiclesBody';

function Vehicles() {
  return (
    <>
      <Navbar />
      <Hero />
      <VehiclesBody />
      <Footer />
    </>
  );
}

export default Vehicles;
