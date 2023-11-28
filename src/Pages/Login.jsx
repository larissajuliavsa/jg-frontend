import React from 'react';
import Form from '../components/Form/Form';

function Login() {
  const inputs = [
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
  ];

  return (
    <Form
      title="Login"
      inputs={inputs}
      question="Não possui cadastro?"
      path="/cadastro"
    />
  );
}

export default Login;
