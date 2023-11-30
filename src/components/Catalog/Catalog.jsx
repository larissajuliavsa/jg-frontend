/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { products } from '../../utils/utils';
import Product from '../Product/Product';
import './Catalog.scss';

function Catalog() {
  const location = useLocation();
  const [allVehicles, setAllVehicles] = useState([]);
  const [searchMake, setSearchMake] = useState([]);
  const query = new URLSearchParams(location.search).get('query');

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

  async function renderSearchMake() {
    const filter = await fetchSearchMake(query);

    if (filter && filter.length > 0) {
      setSearchMake(filter);
    } else {
      setSearchMake([]);
    }
  }

  useEffect(() => {
    fetchData();
    if (query) {
      renderSearchMake();
    }
  }, []);

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
    // if (filteredResults && filteredResults.length > 0) {
    //   return renderFilteredResults(filteredResults);
    // }

    if (searchMake && searchMake.length > 0) {
      return renderProducts(searchMake);
    }

    return renderProducts(allVehicles);
  }

  return (
    <section>
      <div className="catalog__products">
        {renderPage()}
      </div>
    </section>
  );
}

export default Catalog;
