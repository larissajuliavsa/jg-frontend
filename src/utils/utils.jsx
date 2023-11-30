/* eslint-disable max-len */
import placeholder from '../assets/images/image-placeholder.svg';

export const productsMock = [
  {
    id: 1,
    name: 'Product',
    year: '2005',
    price: '10.000',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'branco',
  },
  {
    id: 2,
    name: 'Product',
    year: '2006',
    price: '20.500',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'preto',
  },
  {
    id: 3,
    name: 'Product',
    year: '2007',
    price: '30.000',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'prata',
  },
  {
    id: 4,
    name: 'Product',
    year: '2007',
    price: '40.500',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'vermelho',
  },
  {
    id: 5,
    name: 'Product',
    year: '2009',
    price: '50.000',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'laranja',
  },
  {
    id: 6,
    name: 'Product',
    year: '2010',
    price: '60.500',
    image: placeholder,
    description: 'Ar condicionado, direção hidráulica, travas elétricas, freio ABS, vidros elétricos, airbag motorista e passageiro.',
    color: 'azul',
  },
];

export function formatCurrency(valor) {
  const valorLimpo = valor.replace(/\./g, '');
  const temVirgula = valorLimpo.includes(',');
  if (temVirgula) {
    const partes = valorLimpo.split(',');
    const parteInteira = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const parteDecimal = partes[1].padEnd(2, '0').slice(0, 2);
    return `R$ ${parteInteira},${parteDecimal}`;
  }
  const parteInteira = valorLimpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `R$ ${parteInteira},00`;
}

export function formatNumberWithDot(number) {
  if (typeof number === 'string' && number.includes('.')) {
    return number;
  }

  const numStr = String(number).replace(/\./g, '');

  const parts = [];
  let i = numStr.length;
  while (i > 0) {
    i -= 3;
    parts.unshift(numStr.slice(Math.max(0, i), i + 3));
  }

  return parts.join('.');
}
