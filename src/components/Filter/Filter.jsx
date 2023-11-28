/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './Filter.scss';
import Slider from 'react-slider';
import { formatCurrency } from '../../utils/utils';

let priceMin = 0;
let priceMax = 120000;

let yearMin = 1990;
let yearMax = 2024;

function Filter() {
  const [price, setPrice] = useState([priceMin, priceMax]);
  const [year, setYear] = useState([yearMin, yearMax]);
  const formatMinValue = formatCurrency.format(price[0]);
  const formatMaxValue = formatCurrency.format(price[1]);
  const [selectedColors, setSelectedColors] = useState({});

  function handleColorClick(color) {
    setSelectedColors((prevColors) => {
      const newColors = { ...prevColors };
      newColors[color] = !newColors[color];

      if (!newColors[color]) {
        const { [color]: deletedColor, ...rest } = newColors;
        return rest;
      }

      return newColors;
    });
  }

  function handleReset() {
    setSelectedColors({});
    setYear([yearMin = 1990, yearMax = 2024]);
    setPrice([priceMin = 0, priceMax = 120000]);
  }

  function handleSubmit() {
    console.log('filtrar');
  }

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
            <div
              className={`filter__color color-1 ${selectedColors.preto ? 'active' : ''}`}
              onClick={() => handleColorClick('preto')}
            />
            <div
              className={`filter__color color-2 ${selectedColors.prata ? 'active' : ''}`}
              onClick={() => handleColorClick('prata')}
            />
            <div
              className={`filter__color color-3 ${selectedColors.branco ? 'active' : ''}`}
              onClick={() => handleColorClick('branco')}
            />
            <div
              className={`filter__color color-4 ${selectedColors.vermelho ? 'active' : ''}`}
              onClick={() => handleColorClick('vermelho')}
            />
            <div
              className={`filter__color color-5 ${selectedColors.azul ? 'active' : ''}`}
              onClick={() => handleColorClick('azul')}
            />
            <div
              className={`filter__color color-6 ${selectedColors.laranja ? 'active' : ''}`}
              onClick={() => handleColorClick('laranja')}
            />
          </div>
        </div>

        <div className="filter__buttons">
          <button
            type="button"
            className="button--outline"
            onClick={handleReset}
          >
            limpar
          </button>
          <button
            type="button"
            className="button--primary"
            onClick={handleSubmit}
          >
            aplicar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Filter;
