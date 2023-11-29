/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './FormVehicle.scss';
import { useNavigate } from 'react-router-dom';

function FormVehicle() {
  const navigate = useNavigate();
  const [files, setFiles] = useState();
  const [success, setSuccess] = useState();
  const [form, setForm] = useState({
    make: '',
    model: '',
    color: 'preto',
    engineSize: 1.0,
    fuelType: '',
    mileage: '',
    price: '',
    transmission: 'automatico',
    vehicleType: '',
    year: '',
  });
  const [inputErrors, setInputErrors] = useState({
    make: false,
    model: false,
    color: false,
    engineSize: false,
    fuelType: false,
    mileage: false,
    price: false,
    transmission: false,
    vehicleType: false,
    year: false,
    formFile: false,
  });

  const fetchData = async (body, token) => {
    try {
      const response = await fetch('http://localhost:8081/api/vehicles/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
      const results = await response.json();
      setSuccess(true);
      return results;
    } catch (err) {
      console.error('erro: ', err);
    }
  };

  // const fetchImage = async (id, body) => {
  //   try {
  //     const formData = new FormData();
  //     body.forEach((file, index) => {
  //       formData.append(`image${index + 1}`, file);
  //     });

  //     const response = await fetch(`http://localhost:8081/api/vehicles/uploadImage/${id}`, {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     console.log('✨  response:', response);

  //     // const results = await response.json();
  //     return response;
  //   } catch (err) {
  //     console.error('erro: ', err);
  //   }
  // };

  async function fetchImages(id, files, token) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('imagens[]', files[i]);
    }

    const url = `http://localhost:8081/api/vehicles/uploadImage/${id}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Imagens enviadas com sucesso:', data);
    } else {
      console.error('Erro ao enviar imagens:', response.status);
    }
  }

  function handleChange(e) {
    const { value, name, type } = e.target;
    let updatedValue = value;

    if (type === 'file') {
      const hasSelectedFiles = e.target.files && e.target.files.length > 0;

      setFiles(hasSelectedFiles ? Array.from(e.target.files) : undefined);
      setInputErrors({
        ...inputErrors,
        [name]: !hasSelectedFiles,
      });

      return;
    }

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

    setForm({
      ...form,
      [name]: updatedValue,
    });

    setInputErrors({
      ...inputErrors,
      [name]: false,
    });
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
    }
  };

  function isStringEmpty(value) {
    return typeof value === 'string' && value.trim() === '';
  }

  function isNumericFieldEmpty(value) {
    return value === undefined || value === null || value === '';
  }

  function validateForm() {
    const errors = {};

    Object.entries(form).forEach(([key, value]) => {
      if (
        isStringEmpty(value)
      || (['year', 'price', 'mileage', 'engineSize'].includes(key)
        && isNumericFieldEmpty(value))
      ) {
        errors[key] = true;
      }
    });

    return errors;
  }

  async function handleSubmit() {
    const token = localStorage.getItem('token');
    const formErrors = validateForm();
    const hasError = Object.keys(formErrors).length > 0;
    console.log('✨  files:', files);

    if (hasError) {
      setInputErrors({ ...inputErrors, ...formErrors });
      return;
    }

    if (!files || files.length === 0) {
      formErrors.file = true;
      setInputErrors({ ...inputErrors, ...formErrors });
      return;
    }

    const formToSend = { ...form };

    const { id } = await fetchData(formToSend, token);
    console.log('✨  vehicle:', id);
    // fetchImage(id, files);
    fetchImages(id, files, token);

    // if (vehicle) navigate('/veiculos');
  }

  return (
    <section className="form-product">
      <div className="form-product--align">
        <h1 className="form-product__title">Cadastrar Veículo</h1>
        <div className="form-product__inputs">
          <div
            className={`form-product__radio ${inputErrors.vehicleType ? 'error' : ''}`}
          >
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
          </div>
          <label
            htmlFor="make"
            className={`form-product__text ${inputErrors.make ? 'error' : ''}`}
          >
            <span>Marca</span>
            <input
              type="text"
              id="make"
              name="make"
              placeholder="GM"
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="model"
            className={`form-product__text ${inputErrors.model ? 'error' : ''}`}
          >
            <span>Modelo</span>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Cruze"
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="year"
            className={`form-product__text ${inputErrors.year ? 'error' : ''}`}
          >
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
          <label
            htmlFor="color"
            className={`form-product__select ${inputErrors.color ? 'error' : ''}`}
          >
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
          <label
            htmlFor="price"
            className={`form-product__text ${inputErrors.price ? 'error' : ''}`}
          >
            <span>Valor</span>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="80.000,00"
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="mileage"
            className={`form-product__text ${inputErrors.mileage ? 'error' : ''}`}
          >
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
          <div
            className={`form-product__radio ${inputErrors.fuelType ? 'error' : ''}`}
          >
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
          <label
            htmlFor="transmission"
            className={`form-product__select ${inputErrors.transmission ? 'error' : ''}`}
          >
            <span>Transmissão</span>
            <select
              id="transmission"
              name="transmission"
              className="form-select"
              onChange={handleChange}
            >
              <option value="automática">Automático</option>
              <option value="automatizada">Automatizado</option>
              <option value="manual">Manual</option>
            </select>
          </label>
          <label
            htmlFor="engineSize"
            className={`form-product__select ${inputErrors.engineSize ? 'error' : ''}`}
          >
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
          <label
            htmlFor="formFile"
            className={`form-product__file ${inputErrors.formFile ? 'error' : ''}`}
          >
            <span>Imagem</span>
            <input
              className="form-control"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              id="formFile"
              name="formFile"
              onChange={handleFileChange}
              multiple
            />
          </label>
        </div>
        <div className="form-product__button">
          <button
            type="submit"
            className="button--primary"
            onClick={handleSubmit}
            disabled={success}
          >
            {success ? 'cadastrado!' : 'cadastrar'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormVehicle;
