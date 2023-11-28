/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import './Filter.scss';
// import Slider from 'react-slider';
// import { formatCurrency, products } from '../../utils/utils';

// const priceMin = 0;
// const priceMax = 120000;

// const yearMin = 1990;
// const yearMax = 2024;

// function Filter({
//   price,
//   setPrice,
//   year,
//   setYear,
//   selectedColors,
//   setSelectedColors,
//   handleReset,
//   handleApplyFilters,
// }) {
//   const [price, setPrice] = useState([priceMin, priceMax]);
//   const [year, setYear] = useState([yearMin, yearMax]);
//   const formatMinValue = formatCurrency.format(price[0]);
//   const formatMaxValue = formatCurrency.format(price[1]);
//   const [selectedColors, setSelectedColors] = useState({});

//   function handleColorClick(color) {
//     setSelectedColors((prevColors) => {
//       const newColors = { ...prevColors };
//       newColors[color] = !newColors[color];

//       if (!newColors[color]) {
//         const { [color]: deletedColor, ...rest } = newColors;
//         return rest;
//       }

//       return newColors;
//     });
//   }

//   const filters = {
//     price,
//     year,
//     selectedColors,
//   };

//   function handleReset() {
//     setSelectedColors({});
//     setYear([yearMin, yearMax]);
//     setPrice([priceMin, priceMax]);

//     localStorage.removeItem('filterData');
//   }

//   function handleSubmit() {
//     localStorage.setItem('filterData', JSON.stringify(filters));
//   }

//   function handleSubmit() {
//     // Salva os valores do filtro no localStorage
//     localStorage.setItem('price', JSON.stringify(price));
//     localStorage.setItem('year', JSON.stringify(year));
//     localStorage.setItem('selectedColors', JSON.stringify(selectedColors));

//     // Chama a função de aplicar os filtros no componente pai
//     handleApplyFilters(products);
//   }

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
//             {formatMinValue}
//             {' '}
//             até
//             {' '}
//             {formatMaxValue}
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
//             {year[0]}
//             {' '}
//             até
//             {' '}
//             {year[1]}
//           </p>
//         </div>
//         <div className="filter__item">
//           <p className="filter__subtitle">Cor</p>
//           <div className="filter__colors">
//             <div
//               className={`filter__color color-1 ${selectedColors.preto ? 'active' : ''}`}
//               onClick={() => handleColorClick('preto')}
//             />
//             <div
//               className={`filter__color color-2 ${selectedColors.prata ? 'active' : ''}`}
//               onClick={() => handleColorClick('prata')}
//             />
//             <div
//               className={`filter__color color-3 ${selectedColors.branco ? 'active' : ''}`}
//               onClick={() => handleColorClick('branco')}
//             />
//             <div
//               className={`filter__color color-4 ${selectedColors.vermelho ? 'active' : ''}`}
//               onClick={() => handleColorClick('vermelho')}
//             />
//             <div
//               className={`filter__color color-5 ${selectedColors.azul ? 'active' : ''}`}
//               onClick={() => handleColorClick('azul')}
//             />
//             <div
//               className={`filter__color color-6 ${selectedColors.laranja ? 'active' : ''}`}
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

import React from 'react';
import './Filter.scss';
import Slider from 'react-slider';
import { formatCurrency, products } from '../../utils/utils';

function Filter({
  price,
  setPrice,
  year,
  setYear,
  selectedColors,
  setSelectedColors,
  handleReset,
  handleApplyFilters,
}) {
  const priceMin = 0;
  const priceMax = 120000;

  const yearMin = 1990;
  const yearMax = 2024;

  const formatMinValue = formatCurrency.format(price[0]);
  const formatMaxValue = formatCurrency.format(price[1]);

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

  function handleSubmit() {
    localStorage.setItem('price', JSON.stringify(price));
    localStorage.setItem('year', JSON.stringify(year));
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));

    handleApplyFilters(products);
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
              className={`filter__color color-1 ${selectedColors.preto ? 'active-color' : ''}`}
              onClick={() => handleColorClick('preto')}
            />
            <div
              className={`filter__color color-2 ${selectedColors.prata ? 'active-color' : ''}`}
              onClick={() => handleColorClick('prata')}
            />
            <div
              className={`filter__color color-3 ${selectedColors.branco ? 'active-color' : ''}`}
              onClick={() => handleColorClick('branco')}
            />
            <div
              className={`filter__color color-4 ${selectedColors.vermelho ? 'active-color' : ''}`}
              onClick={() => handleColorClick('vermelho')}
            />
            <div
              className={`filter__color color-5 ${selectedColors.azul ? 'active-color' : ''}`}
              onClick={() => handleColorClick('azul')}
            />
            <div
              className={`filter__color color-6 ${selectedColors.laranja ? 'active-color' : ''}`}
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
