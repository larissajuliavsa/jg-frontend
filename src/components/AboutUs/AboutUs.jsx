import React from 'react';
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
          <li><img src={honda} alt="honda logo" /></li>
          <li><img src={hyundai} alt="hyundai logo" /></li>
          <li><img src={audi} alt="audi logo" /></li>
          <li><img src={gm} alt="gm logo" /></li>
          <li><img src={volkswagen} alt="volkswagen logo" /></li>
          <li><img src={jeep} alt="jeep logo" /></li>
          <li><img src={toyota} alt="toyota logo" /></li>
          <li><img src={bmw} alt="bmw logo" /></li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
