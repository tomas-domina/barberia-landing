import React from "react";
import styled from "styled-components";

import button from "../../../images/Boton.png";
import bgImage4 from "../../../images/ffondo-4.png";
import bgMobile4 from "../../../images/fondo-mobile-4.png";

const Membresia = () => {
  return (
    <MembresiaContainer id="turnos-y-membresias">
      <div className="text-container">
        <h4 className="contrataNuestra">Contratá nuestra</h4>
        <h1 className="membresia">Membresía</h1>
      </div>
      <div className="button-container">
        <a href="">
          <img className="membresiaImg" src={button} alt="obtener" />
          <div className="texto-encima">Obtener</div>
        </a>
      </div>
    </MembresiaContainer>
  );
};

export default Membresia;

const MembresiaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 120rem;
  max-width: 100%;
  background-image: url(${bgImage4});
  background-repeat: no-repeat;
  background-size: 95rem;
  background-position: 10% 0;

  @media (min-width: 3072px) {
    background-size: 192rem;
  }

  @media (max-width: 768px) {
    background-image: url(${bgMobile4});
    background-size: 30rem;
    overflow: hidden;
  }

  .membresiaImg {
    margin-top: 10px;
    margin-bottom: 200px;
    margin-left: 275px;
  }

  .membresia,
  .contrataNuestra {
    margin: 0 auto;
    margin-right: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contrataNuestra {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 2rem;
    margin-right: 66rem;
    color: #ae862a;
    margin-right: -245px;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .membresia {
    font-family: ShadedLarch;
    font-size: 6rem;
    font-weight: 300;
    color: white;
    margin-right: -350px;

    @media (max-width: 768px) {
      font-size: 5rem;
    }
  }

  .text-container {
    margin-top: 175px;
    // margin-left: 1350px;

    @media (max-width: 768px) {
      margin-right: 350px;
      margin-top: 100px;
    }
  }
  .button-container {
    position: relative;
    display: inline-block;
    text-align: center;

    @media (max-width: 768px) {
      margin-right: 300px;
    }
  }
  .texto-encima {
    font-family: MuseoSlab;
    color: white;
    font-size: 45px;
    position: absolute;
    top: 38px;
    left: 320px;
  }
`;
