/* eslint-disable max-len */
/* eslint-disable no-redeclare */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import './Filter.scss';
// import Slider from 'react-slider';
// import { formatCurrency } from '../../utils/utils';

// function Filter() {
//   const priceMin = 0;
//   const priceMax = 120000;

//   const yearMin = 1990;
//   const yearMax = 2024;

// const formattedMinValue = price && price.length >= 2 ? formatCurrency.format(price[0]) : '';
// const formattedMaxValue = price && price.length >= 2 ? formatCurrency.format(price[1]) : '';
// const formattedMinYear = year && year.length >= 2 ? year[0] : '';
// const formattedMaxYear = year && year.length >= 2 ? year[1] : '';

// function handleColorClick(color) {
//   setSelectedColors((prevColors) => {
//     const newColors = { ...prevColors };
//     newColors[color] = !newColors[color];
//     return newColors;
//   });
// }

// function handleSubmit() {
//   localStorage.setItem('price', JSON.stringify(price));
//   localStorage.setItem('year', JSON.stringify(year));
//   localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
//   applyFilters();
// }

//   return (
//     <section className="filter">
//       <div className="filter--align container">
//         <h1 className="filter__title">Filtros</h1>
//         <div className="filter__item">
//           <p className="filter__subtitle">Preço</p>
//           <Slider
//             className="slider"
//             value={price}
//             min={priceMin}
//             max={priceMax}
//             onChange={setPrice}
//           />
//           <p className="filter__range">
//             {formattedMinValue}
//             {' '}
//             até
//             {' '}
//             {formattedMaxValue}
//           </p>
//         </div>
//         <div className="filter__item">
//           <p className="filter__subtitle">Ano</p>
//           <Slider
//             className="slider"
//             value={year}
//             min={yearMin}
//             max={yearMax}
//             onChange={setYear}
//           />
//           <p className="filter__range">
//             {formattedMinYear}
//             {' '}
//             até
//             {' '}
//             {formattedMaxYear}
//           </p>
//         </div>
//         <div className="filter__item">
//           <p className="filter__subtitle">Cor</p>
//           <div className="filter__colors">
//             <div
//               className={`filter__color color-1 ${selectedColors.preto ? 'active-color' : ''}`}
//               onClick={() => handleColorClick('preto')}
//             />
//             <div
//               className={`filter__color color-2 ${selectedColors.prata ? 'active-color' : ''}`}
//               onClick={() => handleColorClick('prata')}
//             />
//             <div
//               className={`filter__color color-3 ${selectedColors.branco ? 'active-color' : ''}`}
//               onClick={() => handleColorClick('branco')}
//             />
//             <div
// className={`filter__color color-4 ${selectedColors.vermelho ? 'active-color' : ''}`}
//               onClick={() => handleColorClick('vermelho')}
//             />
//             <div
//               className={`filter__color color-5 ${selectedColors.azul ? 'active-color' : ''}`}
//               onClick={() => handleColorClick('azul')}
//             />
//             <div
//               className={`filter__color color-6 ${selectedColors.laranja ? 'active-color' : ''}`}
//               onClick={() => handleColorClick('laranja')}
//             />
//           </div>
//         </div>

//         <div className="filter__buttons">
//           <button
//             type="button"
//             className="button--outline"
//             onClick={handleReset}
//           >
//             limpar
//           </button>
//           <button
//             type="button"
//             className="button--primary"
//             onClick={handleSubmit}
//           >
//             aplicar
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Filter;

import React, { useState } from 'react';
import './Filter.scss';
import Slider from 'react-slider';

const priceMin = 0;
const priceMax = 120000;

const yearMin = 1990;
const yearMax = 2024;

function Filter() {
  const [price, setPrice] = useState([priceMin, priceMax]);
  const [year, setYear] = useState([yearMin, yearMax]);

  const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

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
