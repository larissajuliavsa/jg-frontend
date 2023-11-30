/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useLocation } from 'react-router-dom';
import whatsapp from '../../assets/images/whatsapp.svg';
import './Footer.scss';
import HomeRegister from '../HomeRegister/HomeRegister';

function Footer() {
  const { pathname } = useLocation();
  const cadastroVeiculo = '/veiculo/cadastro';
  const isUser = JSON.parse(localStorage.getItem('userData'));

  return (
    <>
      {
        isUser && pathname !== cadastroVeiculo ? <HomeRegister /> : null
      }
      <footer className="footer">
        <div className="container">
          <p className="footer__created">
            <span>@</span>
            Site criado por Gyll Marcos da Guarda Garcia,
            Julia Silva Rizzo e Lázaro Brenner Freitas Barbosa em 2023
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
