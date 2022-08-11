import React from "react";
import styled from "styled-components";

import banner from "../images/img-banner.png";
import button from "../images/Boton.png";
import bgImage1 from "../images/fondo-1.png";

const Inicio = ({ title1, title2 }) => {
  return (
    <TilteContainer>
      <div className="container">
        <div>
          <h4 className="title1">{title1}</h4>
          <h1 className="title2">{title2}</h1>
          <img className="banner" src={banner} alt="banner" />
        </div>

        <a href="">
          <img className="button" src={button} alt="button" />
          <div className="texto-encima">Obtener</div>
        </a>
      </div>
    </TilteContainer>
  );
};

export default Inicio;

const TilteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-height: 100%;
  max-width: 100%;
  background-image: url(${bgImage1});
  background-repeat: no-repeat;
  background-size: 100rem;
  background-position: 50% 70%;
  height: 600px;

  @media (min-width: 3072px) {
    background-size: 192rem;
  }

  .banner {
    height: 450px;
    margin-left: 300px;
    margin-bottom: 300px;
  }

  .title1,
  .title2 {
    color: white;
    margin-right: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 400px;
    margin-bottom: -175px;
  }

  .title1 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.5rem;
    margin-right: 66rem;
    margin-top: 400px;
    margin-bottom: -400px;
  }
  .title2 {
    font-family: ShadedLarch;
    font-size: 4rem;
    font-weight: 300;
  }

  .container {
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .texto-encima {
    font-family: MuseoSlab;
    color: white;
    font-size: 30px;
    position: absolute;
    top: 518px;
    left: 43px;
  }
  .button {
    height: 95px;
    margin-bottom: 500px;
    margin-top: -700px;
    margin-right: 900px;
    margin-left: -120px;
  }
`;
