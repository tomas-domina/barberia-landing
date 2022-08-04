import React from "react";
import styled from "styled-components";

import nosotrosImg from "../images/team-2.jpg";
import bgImage3 from "../images/fondo-3.png";

const Nosotros = () => {
  return (
    <NosContainer>
      <div className="container">
        <div>
          <img src={nosotrosImg} alt="nosotros" />
        </div>
        <div className="text-container">
          <div className="title-container">
            <h4>SOBRE</h4>
            <h1>Nosotros</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.{" "}
              <br /> Nobis consequatur aperiam <br /> molestias
            </p>
          </div>
        </div>
      </div>
    </NosContainer>
  );
};

export default Nosotros;

const NosContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  background-image: url(${bgImage3});
  background-repeat: no-repeat;
  background-size: 100rem;
  background-position: 50% %70;

  @media (min-width: 3072px) {
    background-size: 192rem;
  }

  heigth: 600px;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 450px;
  }

  h4,
  h1 {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.6rem;
    color: #ae862a;
    margin-right: 150px;
  }

  h1 {
    font-family: ShadedLarch;
    font-size: 5rem;
    font-weight: 300;
    color: white;
  }

  p {
    font-family: MuseoSlab;
    color: white;
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 425px;
  }

  .text-container {
    margin-left: 70px;
    margin-top: 250px;
  }
  .title-container {
    margin-bottom: 45px;
    margin-right: 100px;
  }
`;
