import React from "react";
import styled from "styled-components";
import corteImg from "../images/CORTE.jpg";
import afeitadoImg from "../images/afeitado.jpg";
import corteAfeitadoImg from "../images/corte-y-afeitado.jpg";
import bgImage2 from "../images/fondo-2.png";

const Servicios = () => {
  return (
    <ServicesContainer>
      <div className="titles">
        <h4 className="title1">Nuestros</h4>
        <h1 className="title2">Servicios</h1>
      </div>
      <div className="container">
        <div className="img-container">
          <img src={corteImg} alt="corte" />
          <p>
            Lorem ipsum dolor sit <br /> amet consectetur adi-
          </p>
        </div>
        <div className="img-container">
          <img src={afeitadoImg} alt="afeitado" />
          <p>
            Lorem ipsum dolor sit <br /> amet consectetur adi-
          </p>
        </div>
        <div className="img-container">
          <img src={corteAfeitadoImg} alt="corte-y-afeitado" />
          <p>
            Lorem ipsum dolor sit <br /> amet consectetur adi-
          </p>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Servicios;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage2});
  background-repeat: no-repeat;
  background-size: 100rem;
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
    color: #ae862a;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .img-container {
    padding: 30px;
  }
`;
