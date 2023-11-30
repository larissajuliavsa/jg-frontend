/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Catalog from '../components/Catalog/Catalog';

function SearchResult() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="catalog">
        <Catalog />
      </section>
      <Footer />
    </>
  );
}

export default SearchResult;
