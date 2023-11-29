/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Search.scss';
import search from '../../assets/images/search.svg';

function filterQuery(query, product) {
  if (query.trim() === '') {
    return [];
  }

  const lowercaseQuery = query.toLowerCase();

  const result = product.filter(
    (item) => item.model.toLowerCase().includes(lowercaseQuery)
      || item.make.toLowerCase().includes(lowercaseQuery),
  );

  return result;
}

function Search() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

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

  const fetchFilter = async (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filteredData = data.filter(
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

      const result = await response.json();
      return result;
    } catch (err) {
      console.error('erro: ', err);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = filterQuery(query, data);
      setFilteredResults(filtered);
    }
  }, [query, data]);

  async function handleClickIcon() {
    const filter = await fetchFilter(query);
    if (filter) {
      navigate(`/veiculos/resultado?query=${encodeURIComponent(query)}`);
      setQuery('');
    }
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
        {filteredResults.length === 0 && query.trim() !== '' && (
        <p>Não encontramos este produto</p>
        )}
        {filteredResults.map((item) => (
          <li className="search__item" key={item.id}>
            <Link to={`/veiculo/${item.id}`}>
              {item.model}
              {' '}
              {item.year}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Search;
