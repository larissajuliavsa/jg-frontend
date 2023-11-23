import React from 'react';
import whatsapp from '../../assets/images/whatsapp.svg';
import './Footer.scss';
import Register from '../Register/Register';

function Footer() {
  return (
    <>
      <Register />
      <footer className="footer">
        <div className="container">
          <p className="footer__created">
            <span>@</span>
            Site criado por Aluno A, Aluno B em 2023
          </p>
          <p className="footer__contact">
            <img src={whatsapp} alt="whatsapp icon" />
            (99) 9999 - 9999
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
