/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Hero.scss';
import Search from '../Search/Search';

function Hero() {
  return (
    <section className="home-hero">
      <h1 className="home-hero__title">JG Garagem</h1>
      <Search />
    </section>
  );
}

export default Hero;
