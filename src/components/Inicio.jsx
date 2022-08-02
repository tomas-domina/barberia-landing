import React from "react";
import styled from "styled-components";
import banner from "../images/img-banner.png";
import background1 from "../images/fondo-1.png";

const Inicio = ({ title1, title2 }) => {
  return (
    <TilteContainer>
      <div className="container">
        <h4 className="title1">{title1}</h4>
        <h1 className="title2">{title2}</h1>
        <button className="btn">
          <a className="btn-link" href="#">
            Obtener
          </a>
        </button>
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
  background-color: black;
  height: 600px;
  h1,
  h4 {
    color: white;
  }

  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: 60rem;
  background-position: 100% 70%;
  height: 600px;

  .title1,
  .title2 {
    margin: 0 auto;
    margin-right: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title1 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.5rem;
    margin-right: 66rem;
  }
  .title2 {
    font-family: ShadedLarch;
    font-size: 4rem;
    font-weight: 300;
  }

  .btn {
    margin-right: 830px;
    margin-top: 20px;
    height: 60px;
    width: 170px;
    background-color: #ae862a;
    color: white;
    font-family: MuseoSlab;
    font-size: 22px;

    border: solid 1px #ae862a;
  }

  .btn-link {
    text-decoration: none;
    color: white;
  }
`;
