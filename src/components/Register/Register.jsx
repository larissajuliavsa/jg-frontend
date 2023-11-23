/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

function Register() {
  return (
    <section className="register">
      <div className="register__banner" />
      <div className="register__content">
        <h1 className="register__title">Cadastre seu veículo em nossa plataforma</h1>
        <Link to="/" className="button--outline">clique aqui</Link>
      </div>
    </section>
  );
}

export default Register;
