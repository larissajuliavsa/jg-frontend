/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';
import './ProductBody.scss';
import { formatCurrency, formatNumberWithDot } from '../../utils/utils';

function ProductBody() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/vehicles/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      setData([result]);
      setEditedFields(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const fetchSave = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/vehicles/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        if (result) {
          setIsEditing(false);
          fetchData();
        }
      } catch (err) {
        console.error('erro: ', err);
      }
    };

    setIsEditing(false);
    fetchSave();
  }

  function handleFieldChange(e) {
    const { name, value } = e.target;
    setEditedFields({
      ...editedFields,
      [name]: value,
    });
  }

  return (
    <section className="product">
      {
        data && data.map((item) => (
          <>
            <ImagesCarousel />
            <section
              className="product--align container"
              key={item.id}
            >
              <div className="product__title">
                <h1 className="product__name">
                  {item.model}
                  {' '}
                  {item.year}
                </h1>
                <h1 className="product__price">
                  {formatCurrency(item.price.toString())}
                  <div className="product__line" />
                </h1>
              </div>
              <div className="product__body">
                <div className="product__details">
                  <ul className="product__list">
                    <li className="product__item">
                      <p className="product__subtitle">Marca</p>
                      <span>{item.make}</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Cor</p>
                      <span>{item.color}</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">KM</p>
                      <span>{formatNumberWithDot(item.mileage)}</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Combustível</p>
                      <span>{item.fuelType}</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Câmbio</p>
                      <span>{item.transmission}</span>
                    </li>
                    <li className="product__item">
                      <p className="product__subtitle">Motor</p>
                      <span>{item.engineSize === 1 ? '1.0' : item.engineSize}</span>
                    </li>
                  </ul>
                </div>
                <div className="product__desc">
                  <p className="product__subtitle">Descrição</p>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
              <div className="product__buttons">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="button--outline"
                >
                  editar
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="button--primary"
                >
                  salvar
                </button>
              </div>
            </section>
          </>
        ))
      }
    </section>
  );
}

export default ProductBody;
