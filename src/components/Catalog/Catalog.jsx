/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
// import Filter from '../Filter/Filter';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../../utils/utils';
import Product from '../Product/Product';
import './Catalog.scss';

function Catalog() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(null);
  const [data, setData] = useState(null);
  const query = new URLSearchParams(location.search).get('query');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/vehicles/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('🚀 ~ data:', data);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const results = products
        .filter((item) => item.name.toLowerCase().includes(lowerCaseQuery) || item.price.includes(query));
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  }, [query]);

  function renderSearchResults(results) {
    return (
      <>
        {results.map((item) => (
          <Link key={item.id} to={`/veiculo/${item.id}`}>
            <Product
              name={item.name}
              price={item.price}
              color={item.color}
              year={item.year}
              type="catalog"
            />
          </Link>
        ))}
      </>
    );
  }

  function renderProducts(products) {
    return products && products.map((item) => (
      <Link key={item.id} to={`/veiculo/${item.id}`}>
        <Product
          name={item.model}
          price={item.price}
          color={item.color}
          year={item.year}
          type="catalog"
        />
      </Link>
    ));
  }

  // function renderFilteredResults(results) {
  //   return (
  //     <>
  //       {results.map((item) => (
  //         <Link key={item.id} to={`/veiculo/${item.id}`}>
  //           <Product
  //             name={item.name}
  //             price={item.price}
  //             color={item.color}
  //             image={item.image}
  //             year={item.year}
  //             type="catalog"
  //           />
  //         </Link>
  //       ))}
  //     </>
  //   );
  // }

  function renderPage() {
    // if (filteredResults && filteredResults.length > 0) {
    //   return renderFilteredResults(filteredResults);
    // }

    if (searchResults && searchResults.length > 0) {
      return renderSearchResults(searchResults);
    }

    return renderProducts(data);
  }

  return (
    <section className="catalog">

      <div className="catalog__products">
        {renderPage()}
      </div>
    </section>
  );
}

export default Catalog;
