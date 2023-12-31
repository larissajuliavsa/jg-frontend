/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/arrow-back.svg';
import './Form.scss';

function Form(props) {
  const {
    title,
    inputs,
    question,
    path,
  } = props;

  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [emptyFields, setEmptyFields] = useState([]);
  const formClass = title === 'Login' ? 'form__login' : 'form__cadastro';
  const formType = title;

  const fetchRegister = async (body) => {
    try {
      const response = await fetch('http://localhost:8081/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (err) {
      console.error('Erro na requisição: ', err);
      throw err;
    }
  };

  const fetchLogin = async (body) => {
    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (err) {
      console.error('Erro na requisição: ', err);
      throw err;
    }
  };

  async function validateLogin() {
    const userAdmin = JSON.parse(localStorage.getItem('ROLE_ADMIN')) || {};
    const userSeller = JSON.parse(localStorage.getItem('ROLE_SELLER')) || {};

    const isAdmin = form.email === userAdmin.email && form.password === userAdmin.password;
    const isSeller = form.email === userSeller.email && form.password === userSeller.password;

    if (isAdmin) {
      const { accessToken } = await fetchLogin(form);
      userAdmin.token = accessToken;
      localStorage.setItem('ROLE_ADMIN', JSON.stringify(userAdmin));
      localStorage.setItem('userLogin', 'ROLE_ADMIN');
      navigate('/');
    }

    if (isSeller) {
      const { accessToken } = await fetchLogin(form);
      userSeller.token = accessToken;
      localStorage.setItem('ROLE_SELLER', JSON.stringify(userSeller));
      localStorage.setItem('userLogin', 'ROLE_SELLER');
      navigate('/');
    }
  }

  function handleChange(e) {
    const {
      value, name, type, checked,
    } = e.target;
    let updatedRoles = form.roles;

    if (type === 'checkbox') {
      updatedRoles = checked ? ['ROLE_SELLER'] : ['ROLE_ADMIN'];
    }

    setForm({
      ...form,
      [name]: value,
      roles: updatedRoles,
    });

    setEmptyFields((prev) => prev.filter((field) => field !== name));
  }

  async function handleClick(e) {
    e.preventDefault();

    const checkFields = inputs
      .filter((item) => !form[item.name] && item.type !== 'checkbox').map((item) => item.name);
    setEmptyFields(checkFields);

    const formIsValid = checkFields.length === 0;

    if (formIsValid) {
      if (formType === 'Cadastro') {
        const updatedForm = { ...form, roles: form.roles || ['ROLE_ADMIN'] };
        const user = updatedForm.roles[0];
        localStorage.setItem(user, JSON.stringify(updatedForm));
        fetchRegister(updatedForm);
        navigate('/login');
      }

      if (formType === 'Login') {
        validateLogin();
      }
    }
  }

  return (
    <section className={`form ${formClass}`}>
      <Link to="/" className="form__back-home">
        <img src={arrow} alt="arrow back home" />
        Home
      </Link>
      <form className="form--align">
        <div className="form__title">
          <h1>{title}</h1>
          <p>JG</p>
        </div>
        <div className="form__item">
          {
            inputs.map((item) => (
              <label
                htmlFor={item.name}
                className={item.type === 'checkbox' ? 'form__label--checkbox' : 'form__label'}
              >
                <p>{item.type === 'checkbox' ? 'seller' : item.name}</p>
                <input
                  type={item.type}
                  id={item.name}
                  value={item.value}
                  name={item.name}
                  placeholder={item.placeholder ? item.placeholderText : ''}
                  className={`${
                    item.type === 'checkbox' ? 'form__checkbox' : 'form__input'
                  } ${emptyFields.includes(item.name) ? 'form__input--error' : ''}`}
                  onChange={handleChange}
                  required
                  // checked={item.type === 'checkbox' ? true : null}
                />
              </label>
            ))
          }
        </div>
        <div className="form__buttons">
          <button
            type="submit"
            onClick={handleClick}
            className="button--primary enter"
          >
            Entrar
          </button>
          <p>
            {question}
            {' '}
            <Link to={path}>Clique Aqui</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Form;
