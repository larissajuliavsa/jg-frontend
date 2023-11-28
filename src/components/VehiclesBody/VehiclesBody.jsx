/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import Catalog from '../Catalog/Catalog';
import { products } from '../../utils/utils';

function VehiclesBody() {
  const priceMin = 0;
  const priceMax = 120000;

  const yearMin = 1990;
  const yearMax = 2024;

  const [price, setPrice] = useState([priceMin, priceMax]);
  const [year, setYear] = useState([yearMin, yearMax]);
  const [selectedColors, setSelectedColors] = useState({
    preto: false,
    prata: false,
    branco: false,
    vermelho: false,
    azul: false,
    laranja: false,
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const priceInRange = product.price >= price[0] && product.price <= price[1];
      const yearInRange = product.year >= year[0] && product.year <= year[1];
      const hasSelectedColor = selectedColors[product.color];

      const conditionals = priceInRange
        && yearInRange && (Object.keys(selectedColors).length === 0 || hasSelectedColor);

      return conditionals;
    });

    setFilteredProducts(filtered);
  }, [price, year, selectedColors]);

  function handleReset() {
    setSelectedColors({});
    setYear([yearMin, yearMax]);
    setPrice([priceMin, priceMax]);

    localStorage.removeItem('price');
    localStorage.removeItem('year');
    localStorage.removeItem('selectedColors');
  }

  function handleApplyFilters(product) {
    // Aplica lógica adicional se necessário
    console.log('Aplicar filtros nos produtos:', product);
  }

  return (
    <section className="catalog">
      <Filter
        price={price}
        setPrice={setPrice}
        year={year}
        setYear={setYear}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        handleReset={handleReset}
        handleApplyFilters={handleApplyFilters}
      />
      <Catalog filteredResults={filteredProducts} />
    </section>
  );
}

export default VehiclesBody;
