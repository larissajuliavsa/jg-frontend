/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isVehicles = location.pathname === '/veiculos';
  const isPerfil = location.pathname === '/perfil';
  const isUser = JSON.parse(localStorage.getItem('ROLE_ADMIN' || 'ROLE_SELLER'));
  const isLogin = localStorage.getItem('userLogin');

  useEffect(() => {
    if (location.hash === '#aboutUs') {
      const sectionId = 'aboutUs';
      const section = document.getElementById(sectionId);

      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  const handleLocation = (link) => {
    if (location.pathname === '/') {
      return (
        <AnchorLink href="#aboutUs">
          {link}
          <div className="navbar__line" />
        </AnchorLink>
      );
    }
    return (
      <a href="/#aboutUs">
        {link}
        <div className="navbar__line" />
      </a>
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('userLogin');
    navigate('/');
  };

  return (
    <header className="navbar">
      <nav className="navbar--justify container">
        <div className="navbar__logo">
          <Link to="/">JG Garagem</Link>
        </div>
        <ul className={`navbar__menu ${menuActive ? 'active' : ''}`}>
          <li>
            <Link to="/" className={isHome ? 'active' : ''}>
              Home
              <div className="navbar__line" />
            </Link>
          </li>
          <li>
            {handleLocation('Sobre nós')}
          </li>
          <li>
            <Link to="/veiculos" className={isVehicles ? 'active' : ''}>
              Veículos
              <div className="navbar__line" />
            </Link>
          </li>
          {
            isUser ? (
              <li>
                <Link to="/perfil" className={isPerfil ? 'active' : ''}>
                  Perfil
                  <div className="navbar__line" />
                </Link>
              </li>
            ) : null
          }

          {
            isLogin ? (
              <li>
                <button type="button" onClick={handleLogout}>
                  Logout
                  <div className="navbar__line" />
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  Login
                  <div className="navbar__line" />
                </Link>
              </li>
            )
          }
        </ul>
        <button
          type="button"
          onClick={toggleMenu}
          aria-hidden="true"
          className={`navbar__hamburger ${menuActive ? 'active' : ''}`}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
