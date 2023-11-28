import React from 'react';
import Form from '../components/Form/Form';

function RegisterUser() {
  const inputs = [
    {
      name: 'nome',
      type: 'text',
      placeholder: true,
      placeholderText: 'Maria José da Silva',
    },
    {
      name: 'username',
      type: 'text',
      placeholder: true,
      placeholderText: 'maria01',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: true,
      placeholderText: 'email@email.com',
    },
    {
      name: 'senha',
      type: 'password',
      placeholder: false,
      placeholderText: '',
    },
    {
      name: 'vendedor',
      type: 'radio',
      placeholder: false,
      placeholderText: '',
    },
  ];

  return (
    <Form
      title="Cadastro"
      inputs={inputs}
      question="Já possui cadastro?"
      path="/login"
    />
  );
}

export default RegisterUser;
