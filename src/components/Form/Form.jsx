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

  function handleChange(e) {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setEmptyFields((prev) => prev.filter((field) => field !== name));
  }

  function validateLogin() {
    const { email, senha } = JSON.parse(localStorage.getItem('userData'));
    if (form.email === email && form.senha === senha) {
      navigate('/');
    }
  }

  function handleClick(e) {
    e.preventDefault();

    const checkFields = inputs
      .filter((item) => !form[item.name] && item.type !== 'radio')
      .map((item) => item.name);

    setEmptyFields(checkFields);

    if (checkFields.length === 0) {
      if (formType === 'Cadastro') {
        navigate('/');
        localStorage.setItem('userData', JSON.stringify(form));
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
                className={item.type === 'radio' ? 'form__label--radio' : 'form__label'}
              >
                <p>{item.name}</p>
                <input
                  type={item.type}
                  id={item.name}
                  name={item.name}
                  placeholder={item.placeholder ? item.placeholderText : ''}
                  className={`${
                    item.type === 'radio' ? 'form__radio' : 'form__input'
                  } ${emptyFields.includes(item.name) ? 'form__input--error' : ''}`}
                  onChange={handleChange}
                  required
                  checked={item.type === 'radio' ? true : null}
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
