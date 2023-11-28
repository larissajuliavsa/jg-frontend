/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './FormProduct.scss';

function FormProduct() {
  return (
    <section className="form-product">

      <div className="form-product--align">
        <h1 className="form-product__title">Cadastrar Veículo</h1>
        <div className="form-product__inputs">
          <div className="form-product__radio">
            <span>Tipo de veículo</span>
            <label htmlFor="carro" className="form-product__label">
              <input type="radio" id="carro" value="carro" name="vehicleType" />
              Carro
            </label>
            <label htmlFor="moto" className="form-product__label">
              <input type="radio" id="moto" value="moto" name="vehicleType" />
              Moto
            </label>
          </div>
          <label htmlFor="make" className="form-product__text">
            <span>Marca</span>
            <input type="text" id="make" placeholder="GM" />
          </label>
          <label htmlFor="model" className="form-product__text">
            <span>Modelo</span>
            <input type="text" id="model" placeholder="Cruze" />
          </label>
          <label htmlFor="year" className="form-product__text">
            <span>Ano</span>
            <input type="text" id="year" placeholder="2017" />
          </label>
          <label htmlFor="color" className="form-product__select">
            <span>Cor</span>
            <select id="color" className="form-select">
              <option value="black">Preto</option>
              <option value="silver">Prata</option>
              <option value="white">Branco</option>
              <option value="red">Vermelho</option>
              <option value="blue">Azul</option>
              <option value="orange">Laranja</option>
            </select>
          </label>
          <label htmlFor="price" className="form-product__text">
            <span>Valor</span>
            <input type="text" id="price" placeholder="80.000,00" />
          </label>
          <label htmlFor="mileage" className="form-product__text">
            <span>KM</span>
            <input type="text" id="mileage" placeholder="20.000" />
          </label>
          <div className="form-product__radio">
            <span>Combustível</span>
            <label htmlFor="gasolina" className="form-product__label">
              <input type="radio" id="gasolina" value="gasolina" name="fuelType" />
              Gasolina
            </label>
            <label htmlFor="flex" className="form-product__label">
              <input type="radio" id="flex" value="flex" name="fuelType" />
              Flex
            </label>
            <label htmlFor="diesel" className="form-product__label">
              <input type="radio" id="diesel" value="diesel" name="fuelType" />
              Diesel
            </label>
          </div>
          <label htmlFor="transmission" className="form-product__select">
            <span>Transmissão</span>
            <select id="transmission" className="form-select">
              <option value="automatic">Automático</option>
              <option value="automated">Automatizado</option>
              <option value="manual">Manual</option>
            </select>
          </label>
          <label htmlFor="engineSize" className="form-product__text">
            <span>Motor</span>
            <input type="text" id="engineSize" placeholder="2.5" />
          </label>
          <label htmlFor="formFile" className="form-product__file">
            <span>Imagem</span>
            <input className="form-control" type="file" id="formFile" />
          </label>
        </div>
        <div className="form-product__button">
          <button type="submit" className="button--primary">cadastrar</button>
        </div>
      </div>
    </section>
  );
}

export default FormProduct;
