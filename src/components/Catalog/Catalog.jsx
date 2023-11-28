/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Filter from '../Filter/Filter';
import './Catalog.scss';
import { products } from '../../utils/utils';
import Product from '../Product/Product';

function Catalog({ filteredResults }) {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(null);
  const query = new URLSearchParams(location.search).get('query');

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
              image={item.image}
              year={item.year}
              type="catalog"
            />
          </Link>
        ))}
      </>
    );
  }

  function renderProducts(product) {
    return (
      <>
        {product.map((item) => (
          <Link key={item.id} to={`/veiculo/${item.id}`}>
            <Product
              name={item.name}
              price={item.price}
              color={item.color}
              image={item.image}
              year={item.year}
              type="catalog"
            />
          </Link>
        ))}
      </>
    );
  }

  function renderFilteredResults(results) {
    return (
      <>
        {results.map((item) => (
          <Link key={item.id} to={`/veiculo/${item.id}`}>
            <Product
              name={item.name}
              price={item.price}
              color={item.color}
              image={item.image}
              year={item.year}
              type="catalog"
            />
          </Link>
        ))}
      </>
    );
  }

  function renderPage() {
    if (filteredResults) {
      renderFilteredResults(filteredResults);
    }

    if (searchResults) {
      renderSearchResults(searchResults);
    }

    renderProducts(products);
  }

  return (
    <section className="catalog">
      <Filter />
      <div className="catalog__products">
        {renderPage}
      </div>
    </section>
  );
}

export default Catalog;
