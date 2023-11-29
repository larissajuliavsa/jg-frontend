/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */

import React from 'react';
import Filter from '../Filter/Filter';
import Catalog from '../Catalog/Catalog';
// import { formatCurrency, products } from '../../utils/utils';

function VehiclesBody() {
  // const priceMin = 0;
  // const priceMax = 120000;

  // const yearMin = 1990;
  // const yearMax = 2024;

  // const [price, setPrice] = useState([priceMin, priceMax]);
  // const [year, setYear] = useState([yearMin, yearMax]);
  // const [selectedColors, setSelectedColors] = useState({
  //   preto: false,
  //   prata: false,
  //   branco: false,
  //   vermelho: false,
  //   azul: false,
  //   laranja: false,
  // });
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // function applyFilters() {
  //   const filtered = products.filter((product) => {
  //     const priceInRange = product.price >= price[0] && product.price <= price[1];
  //     const yearInRange = product.year >= year[0] && product.year <= year[1];
  //     const hasSelectedColor = selectedColors[product.color];

  //     return priceInRange || yearInRange || (Object.keys(selectedColors).length === 0 || hasSelectedColor);
  //   });

  //   setFilteredProducts(filtered);
  // }

  // useEffect(() => {
  //   applyFilters();
  // }, [price, year, selectedColors]);

  // function handleReset() {
  //   setSelectedColors({
  //     preto: false,
  //     prata: false,
  //     branco: false,
  //     vermelho: false,
  //     azul: false,
  //     laranja: false,
  //   });
  //   setYear([yearMin, yearMax]);
  //   setPrice([formatCurrency.format(priceMin), formatCurrency.format(priceMax)]);
  // }

  return (
    <section className="catalog">
      <Filter />
      <Catalog />
    </section>
  );
}

export default VehiclesBody;
