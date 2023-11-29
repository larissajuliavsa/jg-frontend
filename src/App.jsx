/* eslint-disable import/no-extraneous-dependencies */
// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Vehicles from './Pages/Vehicles';
import Vehicle from './Pages/Vehicle';
import Login from './Pages/Login';
import RegisterUser from './Pages/RegisterUser';
import RegisterVehicle from './Pages/RegisterVehicle';
import Profile from './Pages/Profile';
import SearchResult from './Pages/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<RegisterUser />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/veiculos" element={<Vehicles />} />
        <Route path="/veiculos/resultado" element={<SearchResult />} />
        <Route path="/veiculo/:id" element={<Vehicle />} />
        <Route path="/veiculo/cadastro" element={<RegisterVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
