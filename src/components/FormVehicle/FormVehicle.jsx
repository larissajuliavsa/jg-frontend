/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-alert */
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
    color: 'Preto',
    engineSize: 1.0,
    fuelType: '',
    mileage: '',
    price: '',
    transmission: 'Automático',
    vehicleType: 'Carro',
    year: '',
    description: '',
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
    year: false,
    formFile: false,
    description: false,
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

  async function fetchImages(id, files, token) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('file', files[i]);
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

    if (type === 'text') {
      updatedValue = value[0].toUpperCase() + value.slice(1);
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
    if (e.target.files.length > 3) {
      alert('Add somente 3 arquivos');
      e.preventDefault();
    }
    setFiles(Array.from(e.target.files));
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
    console.log('files', files);
    const token = localStorage.getItem('token');
    const formErrors = validateForm();
    const hasError = Object.keys(formErrors).length > 0;

    if (hasError) {
      setInputErrors({ ...inputErrors, ...formErrors });
      return;
    }

    if (!files || files.length === 0 || files.length > 3) {
      formErrors.file = true;
      setInputErrors({ ...inputErrors, ...formErrors });
      return;
    }

    const formToSend = { ...form };

    try {
      const { id } = await fetchData(formToSend, token);

      if (id) {
        console.log('antes do timeout', id);
        
        setTimeout(async () => {
          for (const file of files) {
            console.log(id, file, token);
            await fetchImages(id, file, token);
          }
        }, 3000);
        // navigate('/veiculos');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <section className="form-product">
      <div className="form-product--align">
        <h1 className="form-product__title">Cadastrar Veículo</h1>
        <div className="form-product__inputs">
          <label
            htmlFor="vehicleType"
            className={`form-product__select ${inputErrors.vehicleType ? 'error' : ''}`}
          >
            <span>Veículo</span>
            <select
              id="vehicleType"
              name="vehicleType"
              className="form-select"
              onChange={handleChange}
            >
              <option value="Carro">Carro</option>
              <option value="Caminhonete">Caminhonete</option>
              <option value="Moto">Moto</option>
            </select>
          </label>
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
            <label htmlFor="Gasolina" className="form-product__label">
              <input
                type="radio"
                id="Gasolina"
                value="Gasolina"
                name="fuelType"
                onChange={handleChange}
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
              <option value="Automático">Automático</option>
              <option value="Automatizado">Automatizado</option>
              <option value="Manual">Manual</option>
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
            htmlFor="engineSize"
            className="form-product__textarea"
          >
            <span>Descrição</span>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              onChange={handleChange}
            />
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
