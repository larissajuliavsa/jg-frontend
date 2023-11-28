/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './Filter.scss';
import Slider from 'react-slider';
import { formatCurrency } from '../../utils/utils';

const priceMin = 0;
const priceMax = 120000;

const yearMin = 1990;
const yearMax = 2024;

function Filter() {
  const [price, setPrice] = useState([priceMin, priceMax]);
  const [year, setYear] = useState([yearMin, yearMax]);

  const formatMinValue = formatCurrency.format(price[0]);
  const formatMaxValue = formatCurrency.format(price[1]);

  return (
    <section className="filter">
      <div className="filter--align container">
        <h1 className="filter__title">Filtros</h1>
        <div className="filter__item">
          <p className="filter__subtitle">Preço</p>
          <Slider
            className="slider"
            value={price}
            min={priceMin}
            max={priceMax}
            onChange={setPrice}
          />
          <p className="filter__range">
            {formatMinValue}
            {' '}
            até
            {' '}
            {formatMaxValue}
          </p>
        </div>
        <div className="filter__item">
          <p className="filter__subtitle">Ano</p>
          <Slider
            className="slider"
            value={year}
            min={yearMin}
            max={yearMax}
            onChange={setYear}
          />
          <p className="filter__range">
            {year[0]}
            {' '}
            até
            {' '}
            {year[1]}
          </p>
        </div>
        <div className="filter__item">
          <p className="filter__subtitle">Cor</p>
          <div className="filter__colors">
            <div className="filter__color color-1" />
            <div className="filter__color color-2" />
            <div className="filter__color color-3" />
            <div className="filter__color color-4" />
            <div className="filter__color color-5" />
            <div className="filter__color color-6" />
          </div>
        </div>

        <div className="filter__buttons">
          <div className="button--outline">limpar</div>
          <div className="button--primary">aplicar</div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
