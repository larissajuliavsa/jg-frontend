/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import honda from '../../assets/images/honda.svg';
import hyundai from '../../assets/images/hyundai.svg';
import audi from '../../assets/images/audi.svg';
import gm from '../../assets/images/gm.svg';
import volkswagen from '../../assets/images/volkswagen.svg';
import jeep from '../../assets/images/jeep.svg';
import toyota from '../../assets/images/toyota.svg';
import bmw from '../../assets/images/bmw.svg';
import './AboutUs.scss';

function AboutUs() {
  const navigate = useNavigate();

  const fetchMake = async (make) => {
    const response = await fetch(`http://localhost:8081/api/vehicles/filter?make=${make}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  };

  const fetchSearchMake = async (make) => {
    try {
      const makeLowerCase = make.toLowerCase();

      if (makeLowerCase === 'chevrolet' || makeLowerCase === 'gm') {
        const combinedResults = await Promise.all([
          fetchMake('chevrolet'),
          fetchMake('gm'),
        ]);

        return combinedResults.flat();
      }

      const result = await fetchMake(make);
      return result;
    } catch (err) {
      console.error('erro: ', err);
      return [];
    }
  };

  async function handleClick(make) {
    const result = await fetchSearchMake(make);

    if (!result.length) {
      alert('Não possuímos veículos desta marca no momento');
    }

    if (result.length) {
      navigate(`/veiculos/resultado?query=${encodeURIComponent(make)}`);
    }
    console.log('result', result);
  }

  return (
    <section className="about" id="aboutUs">
      <div className="about--align container">
        <div className="about__content">
          <h1>Sobre nós</h1>
          <div className="about__text">
            <p>
              Seja bem-vindo à JG Garagem, a sua parceira confiável no universo dos automóveis
              na deslumbrante cidade de Ilha Solteira, São Paulo.Estabelecida com a missão de
              oferecer uma experiência de compra de veículos excepcional,
              nós nos dedicamos a fornecer qualidade,
              transparência e excelência em cada interação com nossos clientes.
            </p>
            <p>
              <span>Nossa Trajetória</span>
              A história da JG Garagem começou com uma paixão compartilhada por carros
              e um compromisso inabalável em proporcionar uma experiência
              de compra excepcional. Desde a nossa origem, temos trabalhado incansavelmente
              para superar as expectativas, tornando-nos um destino confiável para aqueles
              que buscam qualidade, variedade e confiança ao adquirir um veículo.
            </p>
            <p>
              <span>O Nosso Diferencial</span>
              Na JG Garagem, destacamos-nos pelo nosso compromisso com a honestidade,
              confiabilidade e atendimento de alta qualidade. Cada veículo em nosso estoque
              passa por rigorosas verificações, garantindo a qualidade e o desempenho de cada carro.
              Nossa equipe altamente capacitada está pronta para oferecer orientação especializada,
              auxiliando os clientes a encontrar o veículo perfeito que se alinha
              às suas necessidades e preferências.
            </p>
            <p>
              <span>Foco no Cliente</span>
              Nossa prioridade é oferecer uma experiência personalizada e livre de complicações
              para nossos clientes. Disponibilizamos soluções de financiamento flexíveis e uma
              vasta gama de opções de veículos para garantir que cada pessoa encontre
              o carro ideal conosco. Além disso, nosso suporte pós-venda garante que
              nossos clientes recebam a assistência necessária após a compra.
            </p>
            <p>
              <span>Compromisso Social e Ambiental</span>
              Na JG Garagem, estamos comprometidos não apenas em oferecer excelência
              em produtos e serviços, mas também em contribuir positivamente para a comunidade
              e o meio ambiente. Procuramos continuamente maneiras de reduzir nosso
              impacto ambientale participamos ativamente de iniciativas sociais para
              fortalecer nossa cidade e apoiar causas significativas.
            </p>
            <p>
              Estamos empolgados em fazer parte da sua jornada automotiva,
              proporcionando confiança, qualidade e satisfação em cada transação.
              Entre em contato conosco hoje mesmo e descubra como podemos ajudá-lo
              a encontrar o carro dos seus sonhos na JG Garagem!
            </p>
            <p>Contate-nos agora e descubra como tornar realidade o seu próximo veículo!</p>
          </div>
        </div>
        <ul className="about__brands">
          <li>
            <button type="button" onClick={() => handleClick('honda')}>
              <img src={honda} alt="honda logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('hyundai')}>
              <img src={hyundai} alt="hyundai logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('audi')}>
              <img src={audi} alt="audi logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('chevrolet')}>
              <img src={gm} alt="gm logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('volkswagen')}>
              <img src={volkswagen} alt="volkswagen logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('jeep')}>
              <img src={jeep} alt="jeep logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('toyota')}>
              <img src={toyota} alt="toyota logo" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick('bmw')}>
              <img src={bmw} alt="bmw logo" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
