/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slider';
import Product from '../Product/Product';
import './Catalog.scss';
import '../Filter/Filter.scss';

const priceMin = 0;
const priceMax = 120000;
const yearMin = 1990;
const yearMax = 2024;
const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function Catalog() {
  const location = useLocation();
  const [allVehicles, setAllVehicles] = useState([]);
  const [searchMake, setSearchMake] = useState([]);
  const [price, setPrice] = useState([priceMin, priceMax]);
  const [year, setYear] = useState([yearMin, yearMax]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const query = new URLSearchParams(location.search).get('query');
  const formatMinValue = formatCurrency.format(price[0]);
  const formatMaxValue = formatCurrency.format(price[1]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/vehicles/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setAllVehicles(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  const fetchSearchMake = async (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filteredData = allVehicles.filter(
      (item) => item.model.toLowerCase().includes(lowercaseQuery)
        || item.make.toLowerCase().includes(lowercaseQuery),
    );

    if (filteredData.length === 0) {
      return [];
    }

    const { make } = filteredData[0];

    try {
      const response = await fetch(`http://localhost:8081/api/vehicles/filter?make=${make}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      return result;
    } catch (err) {
      console.error('erro: ', err);
      return [];
    }
  };

  function handleColorClick(color) {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [color.toLowerCase()]: !prevSelectedColors[color.toLowerCase()],
    }));
  }

  function handleFilterSubmit() {
    const filteredByPriceAndYear = allVehicles.filter(
      (vehicle) => vehicle.price >= price[0]
      && vehicle.price <= price[1]
      && vehicle.year >= year[0]
      && vehicle.year <= year[1],
    );

    const selectedColorKeys = Object.keys(selectedColors).filter(
      (color) => selectedColors[color],
    );

    const filteredByColors = selectedColorKeys.length > 0
      ? filteredByPriceAndYear.filter((vehicle) => selectedColorKeys.includes(vehicle.color.toLowerCase()))
      : filteredByPriceAndYear;

    setFilteredVehicles(filteredByColors);
  }

  function handleReset() {
    setPrice([priceMin, priceMax]);
    setYear([yearMin, yearMax]);
    setSelectedColors([]);
    setFilteredVehicles(allVehicles);
  }

  function renderProducts(products) {
    return products && products.map((item) => (
      <Link key={item.id} to={`/veiculo/${item.id.toString()}`}>
        <Product
          id={item.id}
          name={item.model}
          price={item.price}
          color={item.color}
          year={item.year}
          type="catalog"
        />
      </Link>
    ));
  }

  function renderPage() {
    if (filteredVehicles.length > 0) {
      return renderProducts(filteredVehicles);
    } if (searchMake && searchMake.length > 0) {
      return renderProducts(searchMake);
    }

    return renderProducts(allVehicles);
  }

  async function fetchDataWithQuery() {
    if (query) {
      const filter = await fetchSearchMake(query);
      if (filter && filter.length > 0) {
        setSearchMake(filter);
      } else {
        setSearchMake([]);
      }
    } else {
      setFilteredVehicles(allVehicles);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDataWithQuery();
  }, [query, allVehicles]);

  return (
    <>
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
                className={`filter__color Preto ${selectedColors.preto ? 'active-color' : ''}`}
                onClick={() => handleColorClick('preto')}
              />
              <div
                className={`filter__color Prata ${selectedColors.prata ? 'active-color' : ''}`}
                onClick={() => handleColorClick('prata')}
              />
              <div
                className={`filter__color Branco ${selectedColors.branco ? 'active-color' : ''}`}
                onClick={() => handleColorClick('branco')}
              />
              <div
                className={`filter__color Vermelho ${selectedColors.vermelho ? 'active-color' : ''}`}
                onClick={() => handleColorClick('vermelho')}
              />
              <div
                className={`filter__color Azul ${selectedColors.azul ? 'active-color' : ''}`}
                onClick={() => handleColorClick('azul')}
              />
              <div
                className={`filter__color Laranja ${selectedColors.laranja ? 'active-color' : ''}`}
                onClick={() => handleColorClick('laranja')}
              />
            </div>
          </div>

          <div className="filter__buttons">
            <button
              type="button"
              onClick={handleReset}
              className="button--outline"
            >
              limpar
            </button>
            <button
              type="button"
              onClick={handleFilterSubmit}
              className="button--primary"
            >
              aplicar
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="catalog__products">
          {renderPage()}
        </div>
      </section>
    </>
  );
}

export default Catalog;
