/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import search from '../../assets/images/search.svg';

function Hero() {
  return (
    <section className="home-hero">
      <h1 className="home-hero__title">JG Garagem</h1>
      <div className="home-hero__search">
        <input type="text" placeholder="Digite marca ou modelo do carro" className="home-hero__input" />
        <Link to="/"><img src={search} alt="search icon" /></Link>
      </div>
    </section>
  );
}

export default Hero;
