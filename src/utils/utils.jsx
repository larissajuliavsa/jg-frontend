/* eslint-disable max-len */
import placeholder from '../assets/images/image-placeholder.svg';

export const products = [
  {
    id: 1,
    name: 'Product',
    year: '2005',
    price: '10.000,00',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'branco',
  },
  {
    id: 2,
    name: 'Product',
    year: '2006',
    price: '20.500,00',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'preto',
  },
  {
    id: 3,
    name: 'Product',
    year: '2007',
    price: '30.000,00',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'prata',
  },
  {
    id: 4,
    name: 'Product',
    year: '2007',
    price: '40.500,00',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'vermelho',
  },
  {
    id: 5,
    name: 'Product',
    year: '2009',
    price: '50.000,00',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'laranja',
  },
  {
    id: 6,
    name: 'Product',
    year: '2010',
    price: '60.500,00',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'azul',
  },
];

export const productImage = [
  {
    id: 1,
    image: placeholder,
  },
  {
    id: 2,
    image: placeholder,
  },
  {
    id: 3,
    image: placeholder,
  },
  {
    id: 4,
    image: placeholder,
  },
  {
    id: 5,
    image: placeholder,
  },
  {
    id: 6,
    image: placeholder,
  },
];

export const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
