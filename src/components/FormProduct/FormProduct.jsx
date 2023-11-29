/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './FormProduct.scss';
import { formatCurrency, formatNumberWithDot } from '../../utils/utils';

function FormProduct() {
  const [files, setFiles] = useState();
  const [form, setForm] = useState();

  function handleChange(e) {
    const { value, name } = e.target;
    let updatedValue = value;

    if (name === 'price') {
      updatedValue = formatCurrency(value);
    }

    if (name === 'year') {
      updatedValue = value.toString();
    }

    if (name === 'mileage') {
      updatedValue = formatNumberWithDot(value);
    }

    setForm({
      ...form,
      [name]: updatedValue,
    });
  }

  function handleClick() {
    console.log('✨  form:', form);
    console.log('✨  files:', files);
  }
  return (
    <section className="form-product">
      <div className="form-product--align">
        <h1 className="form-product__title">Cadastrar Veículo</h1>
        <div className="form-product__inputs">
          <div className="form-product__radio">
            <span>Tipo de veículo</span>
            <label htmlFor="carro" className="form-product__label">
              <input
                type="radio"
                id="carro"
                value="carro"
                name="vehicleType"
                onChange={handleChange}
              />
              Carro
            </label>
            <label htmlFor="moto" className="form-product__label">
              <input
                type="radio"
                id="moto"
                value="moto"
                name="vehicleType"
                onChange={handleChange}
              />
              Moto
            </label>
          </div>
          <label htmlFor="make" className="form-product__text">
            <span>Marca</span>
            <input
              type="text"
              id="make"
              name="make"
              placeholder="GM"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="model" className="form-product__text">
            <span>Modelo</span>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Cruze"
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
              placeholder="2017"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="color" className="form-product__select">
            <span>Cor</span>
            <select
              id="color"
              name="color"
              className="form-select"
              onChange={handleChange}
            >
              <option value="preto">Preto</option>
              <option value="prata">Prata</option>
              <option value="branco">Branco</option>
              <option value="vermelho">Vermelho</option>
              <option value="azul">Azul</option>
              <option value="laranja">Laranja</option>
            </select>
          </label>
          <label htmlFor="price" className="form-product__text">
            <span>Valor</span>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="80.000,00"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mileage" className="form-product__text">
            <span>KM</span>
            <input
              type="number"
              min="0"
              max="200000"
              id="mileage"
              name="mileage"
              placeholder="20.000"
              onChange={handleChange}
            />
          </label>
          <div className="form-product__radio">
            <span>Combustível</span>
            <label htmlFor="gasolina" className="form-product__label">
              <input
                type="radio"
                id="gasolina"
                value="gasolina"
                name="fuelType"
                onChange={handleChange}
              />
              Gasolina
            </label>
            <label htmlFor="flex" className="form-product__label">
              <input
                type="radio"
                id="flex"
                value="flex"
                name="fuelType"
                onChange={handleChange}
              />
              Flex
            </label>
            <label htmlFor="diesel" className="form-product__label">
              <input
                type="radio"
                id="diesel"
                value="diesel"
                name="fuelType"
                onChange={handleChange}
              />
              Diesel
            </label>
          </div>
          <label htmlFor="transmission" className="form-product__select">
            <span>Transmissão</span>
            <select
              id="transmission"
              name="transmission"
              className="form-select"
              onChange={handleChange}
            >
              <option value="automatico">Automático</option>
              <option value="automatizado">Automatizado</option>
              <option value="manual">Manual</option>
            </select>
          </label>
          <label htmlFor="engineSize" className="form-product__select">
            <span>Motor</span>
            <select
              id="engineSize"
              name="engineSize"
              className="form-select"
              onChange={handleChange}
            >
              <option value="1.0">1.0</option>
              <option value="1.4">1.4</option>
              <option value="1.8">1.8</option>
              <option value="2.5">2.5</option>
            </select>
          </label>
          <label htmlFor="formFile" className="form-product__file">
            <span>Imagem</span>
            <input
              className="form-control"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              id="formFile"
              name="formFile"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFiles(Array.from(e.target.files));
                }
              }}
              multiple
            />
          </label>
        </div>
        <div className="form-product__button">
          <button
            type="submit"
            className="button--primary"
            onClick={handleClick}
          >
            cadastrar
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormProduct;
