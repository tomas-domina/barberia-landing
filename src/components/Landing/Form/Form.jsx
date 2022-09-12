import React from "react";
import styled from "styled-components";

import button from "../../../images/Boton.png";
import igIcon from "../../../images/icon-ig.png";

import pinIcon from "../../../images/icon-pin.png";

const Form = () => {
  return (
    <FormContainer id="contacto">
      <div className="main-form">
        <h1 className="contactanos">Contactanos</h1>
        <form>
          <input
            className="inputForm"
            type="text"
            placeholder="Nombre"
            id="name"
            required
          />
          <br />
          <input
            className="inputForm"
            type="email"
            id="email"
            placeholder="Mail"
            required
          />
          <br />
          <textarea
            className="inputForm"
            id="message"
            rows="4"
            placeholder="Mensaje"
          ></textarea>
          <br />

          <button type="submit" className="button-container">
            <img className="buttonForm" src={button} alt="enviar" />
            <div className="texto-encimaForm">Enviar</div>
          </button>
        </form>
      </div>

      <div>
        <a
          className="ig"
          href="https://www.instagram.com/barberia.adiosnonino/?hl=es-la"
          target="_blank"
        >
          <h2 className="seguinos">Seguinos en redes</h2>
          <img className="ig-icon" src={igIcon} alt="instagram" />
        </a>
        <hr />

        <a
          className="location"
          href="https://goo.gl/maps/R1pSweBqsoZBs3vX9"
          target="_blank"
        >
          <img className="location-icon" src={pinIcon} alt="location" />
          <p className="adress">
            3 de Febrero 2489, <br /> S2000 Rosario, Santa Fe
          </p>
        </a>
      </div>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  background-color: #434240;

  @media (max-width: 768px) {
    max-heigth: 100%;
    width: 768px;
    flex-direction: column;
    overflow: hidden;
  }

  .contactanos {
    font-family: ShadedLarch;
    font-size: 3.5rem;
    font-weight: 300;
    color: #775000;
    margin-top: 20px;

    @media (max-width: 768px) {
      margin-left: 80px;
      font-size: 3rem;
    }
  }
  .seguinos {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.75rem;
    color: #775000;
  }
  h3 {
    color: white;
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.75rem;
  }
  .adress {
    color: white;
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.1rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .inputForm {
    padding: 10px;
    font-family: MuseoSlab;
    border: none;

    @media (max-width: 768px) {
      margin-left: 75px;
    }
  }
  textarea {
    font-family: MuseoSlab;
  }

  .buttonForm {
    height: 70px;
    width: 180px;
  }

  hr {
    width: 100%;
    border-color: #775000;
    background-color: #775000;
  }

  .main-form {
    margin-right: 75px;
  }

  .ig {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ig-icon {
    height: 70px;
  }
  .tel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .tel-icon {
    height: 50px;
    margin-right: 10px;
  }
  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .location-icon {
    height: 50px;
    margin-top: 5px;
  }

  .button-container {
    position: relative;
    display: inline-block;
    text-align: center;
    margin-right: 50px;

    @media (max-width: 768px) {
      margin-left: 65px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .texto-encimaForm {
    font-family: MuseoSlab;
    color: white;
    font-size: 25px;
    position: absolute;
    top: 16px;
    left: 36.5px;

    @media (max-width: 768px) {
      margin-left: 8px;
    }
  }
`;
