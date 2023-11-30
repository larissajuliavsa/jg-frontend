/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';
import './ProductBody.scss';
import { formatCurrency, formatNumberWithDot } from '../../utils/utils';

function ProductBody() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const isUser = JSON.parse(localStorage.getItem('userData'));

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

  const fetchUpdate = async (body) => {
    try {
      const response = await fetch(`http://localhost:8081/api/vehicles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      setData([result]);
      setEditedFields(result);
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  const fetchDelete = async () => {
    try {
      await fetch(`http://localhost:8081/api/vehicles/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'year') {
      updatedValue = Number(value);
    }

    if (name === 'price') {
      updatedValue = Number(value);
    }

    if (name === 'mileage') {
      updatedValue = Number(value);
    }
    if (name === 'engineSize') {
      updatedValue = Number(value);
    }
    setEditedFields({
      ...editedFields,
      [name]: updatedValue,
    });
  }

  function renderEditableFields() {
    return (
      <section className="form-product__inputs editing">
        <label htmlFor="model" className="form-product__text">
          <span>Modelo</span>
          <input
            type="text"
            id="model"
            name="model"
            value={editedFields.model}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="make" className="form-product__text">
          <span>Marca</span>
          <input
            type="text"
            id="make"
            name="make"
            value={editedFields.make}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="year" className="form-product__text">
          <span>Ano</span>
          <input
            type="number"
            id="year"
            name="year"
            min="1990"
            max="2024"
            value={editedFields.year}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="color"
          className="form-product__select"
        >
          <span>Cor</span>
          <select
            id="color"
            name="color"
            className="form-select"
            onChange={handleChange}
            value={editedFields.color}

          >
            <option value="Preto">Preto</option>
            <option value="Prata">Prata</option>
            <option value="Branco">Branco</option>
            <option value="Vermelho">Vermelho</option>
            <option value="Azul">Azul</option>
            <option value="Laranja">Laranja</option>
          </select>
        </label>
        <label
          htmlFor="price"
          className="form-product__text"
        >
          <span>Valor</span>
          <input
            type="number"
            id="price"
            name="price"
            value={editedFields.price}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="mileage"
          className="form-product__text"
        >
          <span>KM</span>
          <input
            type="number"
            min="0"
            max="200000"
            id="mileage"
            name="mileage"
            value={editedFields.mileage}
            onChange={handleChange}
          />
        </label>
        <div
          className="form-product__radio"
        >
          <span>Combustível</span>
          <div className="form-product__radio--align">
            <label htmlFor="Gasolina" className="form-product__label">
              <input
                type="radio"
                id="Gasolina"
                value="Gasolina"
                name="fuelType"
                onChange={handleChange}
                checked={editedFields.fuelType === 'Gasolina'}
              />
              Gasolina
            </label>
            <label htmlFor="Flex" className="form-product__label">
              <input
                type="radio"
                id="Flex"
                value="Flex"
                name="fuelType"
                onChange={handleChange}
                checked={editedFields.fuelType === 'Flex'}
              />
              Flex
            </label>
            <label htmlFor="Diesel" className="form-product__label">
              <input
                type="radio"
                id="Diesel"
                value="Diesel"
                name="fuelType"
                onChange={handleChange}
                checked={editedFields.fuelType === 'Diesel'}
              />
              Diesel
            </label>

          </div>
        </div>
        <label
          htmlFor="transmission"
          className="form-product__select"
        >
          <span>Transmissão</span>
          <select
            id="transmission"
            name="transmission"
            className="form-select"
            onChange={handleChange}
            value={editedFields.transmission}
          >
            <option value="Automático">Automático</option>
            <option value="Automatizado">Automatizado</option>
            <option value="Manual">Manual</option>
          </select>
        </label>
        <label
          htmlFor="engineSize"
          className="form-product__select"
        >
          <span>Motor</span>
          <select
            id="engineSize"
            name="engineSize"
            className="form-select"
            onChange={handleChange}
            value={editedFields.engineSize}
          >
            <option value="1.0">1.0</option>
            <option value="1.4">1.4</option>
            <option value="1.8">1.8</option>
            <option value="2.5">2.5</option>
          </select>
        </label>
        <label
          htmlFor="engineSize"
          className="form-product__textarea"
        >
          <span>Descrição</span>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            onChange={handleChange}
            value={editedFields.description}
          />
        </label>
      </section>
    );
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const { id, ...editData } = editedFields;
    fetchUpdate(editData);
    setIsEditing(false);
  }

  function handleDelete() {
    fetchDelete();
    navigate('/veiculos');
  }

  return (
    <section className="product">
      {
        isEditing ? (
          <>
            <ImagesCarousel />
            {renderEditableFields()}
            <div className="product__buttons">
              <button
                type="button"
                onClick={handleSave}
                className="button--primary"
              >
                salvar
              </button>
            </div>
          </>
        ) : (
          data && data.map((item) => (
            <>
              <ImagesCarousel />
              <section
                className={`product--align ${isEditing ? 'update' : ''}`}
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
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
                {
                  isUser ? (
                    <div className="product__buttons">
                      <button
                        type="button"
                        onClick={handleDelete}
                        className="button--outline"
                      >
                        deletar
                      </button>
                      <button
                        type="button"
                        onClick={handleEdit}
                        className="button--primary"
                      >
                        editar
                      </button>
                    </div>
                  ) : null
                }
              </section>
            </>
          ))
        )
      }
    </section>
  );
}

export default ProductBody;
