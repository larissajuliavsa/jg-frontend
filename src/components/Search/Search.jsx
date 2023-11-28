/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../utils/utils';
import './Search.scss';
import search from '../../assets/images/search.svg';

function filterQuery(query, product) {
  if (query.trim() === '') {
    return null;
  }

  const result = product
    .filter((item) => item.name.toLowerCase().includes(query) || item.price.includes(query));

  if (result.length === 0) {
    return (
      <p>Não encontramos este produto</p>
    );
  }

  return (
    result.map((item) => (
      <li className="search__item">
        <Link
          to={`/veiculo/${item.id}`}
        >
          {item.name}
          {' '}
          {item.price}
        </Link>
      </li>
    ))
  );
}

function Search() {
  const [query, setQuery] = useState('');
  const result = filterQuery(query, products);
  const navigate = useNavigate();

  function handleClickIcon() {
    navigate(`/veiculos/resultado?query=${encodeURIComponent(query)}`);
    setQuery('');
  }

  return (
    <section className="search">
      <div className="search--align">
        <input
          type="text"
          placeholder="Pesquise marca ou modelo do carro"
          className="search__input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          onClick={handleClickIcon}
        >
          <img src={search} alt="search icon" />
        </button>
      </div>
      <ul className="search__result">
        {result}
      </ul>
    </section>
  );
}

export default Search;
