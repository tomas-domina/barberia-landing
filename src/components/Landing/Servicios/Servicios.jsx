import React from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";

import styled from "styled-components";
import corteImg from "../../../images/CORTE.jpg";
import afeitadoImg from "../../../images/afeitado.jpg";
import corteAfeitadoImg from "../../../images/corte-y-afeitado.jpg";
import bgImage2 from "../../../images/fondo-2.png";
import bgMobile2 from "../../../images/fondo-mobile-2.png";

const Servicios = () => {
  const [openModal, setOpenModal] = useState(false);
  const [service, setService] = useState("");

  return (
    <div>
      <ServicesContainer id="servicio">
        <div className="titles">
          <h4 className="title1">Nuestros</h4>
          <h1 className="title2">Servicios</h1>
        </div>
        <div className="container">
          <div className="img-container">
            <div onClick={() => setService("Corte")} className="animation">
              <img
                src={corteImg}
                alt="corte"
                onClick={() => {
                  setOpenModal(true);
                }}
              />
              <div
                onClick={() => {
                  setOpenModal(true);
                }}
                className="texto-encima-corte"
              >
                Corte
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit <br /> amet consectetur adi-
            </p>
          </div>
          <div className="img-container">
            <div className="animation" onClick={() => setService("Afeitado")}>
              <img
                src={afeitadoImg}
                alt="afeitado"
                onClick={() => {
                  setOpenModal(true);
                }}
              />
              <div>
                <div
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="texto-encima-afeitado"
                >
                  Afeitado
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur adi-
            </p>
          </div>
          <div className="img-container">
            <div
              className="animation"
              onClick={() => setService("Corte y Afeitado")}
            >
              <div
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <div
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="texto-encima-ambos"
                >
                  Ambos
                </div>
                <img src={corteAfeitadoImg} alt="corte-y-afeitado" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit <br /> amet consectetur adi-
            </p>
          </div>
        </div>
      </ServicesContainer>

      {openModal && <Modal closeModal={setOpenModal} service={service} />}
    </div>
  );
};

export default Servicios;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  background-image: url(${bgImage2});
  background-repeat: no-repeat;
  background-size: 100rem;
  background-position: 50% 70%;

  @media (min-width: 3072px) {
    background-size: 192rem;
  }

  @media (max-width: 768px) {
    background-image: url(${bgMobile2});
    background-size: 30rem;
    overflow: hidden;
  }

  heigth: 600px;
  img {
    height: 300px;
    width: 300px;
  }
  p {
    color: white;
    font-family: MuseoSlab;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
  }

  .titles {
    margin-top: 75px;
  }

  .title1,
  .title2 {
    margin: 0 auto;
    margin-right: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media (max-width: 768px) {
      margin-right: 100px;
    }
  }
  .title1 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.5rem;
    margin-right: 66rem;

    @media (max-width: 768px) {
      margin-right: 200px;
    }
  }
  .title2 {
    font-family: ShadedLarch;
    font-size: 4rem;
    font-weight: 300;
    color: #ae862a;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .img-container {
    padding: 30px;
    position: relative;
    display: inline-block;
    text-align: center;

    transition-duration: 0.4s;
  }
  .img-container:hover {
    transform: scale(1.1);
    transition-duration: 0.4s;
  }

  .texto-encima-corte {
    font-family: ShadedLarch;
    color: white;
    font-size: 90px;
    position: absolute;
    top: 140px;
    left: 90px;
    transform: rotate(-10deg);
  }
  .texto-encima-afeitado {
    font-family: ShadedLarch;
    color: white;
    font-size: 75px;
    position: absolute;
    top: 130px;
    left: 70px;
    transform: rotate(-10deg);
  }
  .texto-encima-ambos {
    font-family: ShadedLarch;
    color: white;
    font-size: 70px;
    position: absolute;
    top: 140px;
    left: 95px;
    transform: rotate(-10deg);
  }

  .animation {
    cursor: pointer;
  }
  .animation:hover {
  }
`;
