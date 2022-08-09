import React from "react";
import styled from "styled-components";

import button from "../images/Boton.png";
import igIcon from "../images/icon-ig.png";
import telIcon from "../images/icon-tel.png";
import pinIcon from "../images/icon-pin.png";

const Form = () => {
  return (
    <FormContainer>
      <div className="main-form">
        <h1>Contactanos</h1>
        <form action="">
          <input type="text" placeholder="Nombre" name="" id="" />
          <br />
          <input type="email" name="" id="" placeholder="Mail" />
          <br />
          <textarea
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="   Mensaje"
          ></textarea>
          <br />
        </form>
        <div className="button-container">
          <a href="">
            <img className="button" src={button} alt="enviar" />
            <div className="texto-encima">Enviar</div>
          </a>
        </div>
      </div>
      <div>
        <div className="ig">
          <h2>Seguinos en redes</h2>
          <img className="ig-icon" src={igIcon} alt="instagram" />
        </div>
        <hr />
        <div className="tel">
          <img className="tel-icon" src={telIcon} alt="tel" />
          <h3>0341 343-7234</h3>
        </div>
        <hr />
        <div className="location">
          <img className="location-icon" src={pinIcon} alt="location" />
          <p>
            3 de Febrero 2489, <br /> S2000 Rosario, Santa Fe
          </p>
        </div>
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

  h1 {
    font-family: ShadedLarch;
    font-size: 3.5rem;
    font-weight: 300;
    color: #775000;
    margin-top: 20px;
  }
  h2 {
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
  p {
    color: white;
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.1rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 10px;
    font-family: MuseoSlab;
  }
  textarea {
    font-family: MuseoSlab;
  }

  .button {
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
  }

  .texto-encima {
    font-family: MuseoSlab;
    color: white;
    font-size: 25px;
    position: absolute;
    top: 16px;
    left: 36.5px;
  }
`;
