import React from "react";
import styled from "styled-components";

import nosotrosImg from "../../../images/team-2.jpg";
import bgImage3 from "../../../images/fondo-3.png";
import bgMobile3 from "../../../images/fondo-mobile-3.png";

const Nosotros = () => {
  return (
    <NosContainer id="nosotros">
      <div className="container">
        <div>
          <img className="nosotrosImg" src={nosotrosImg} alt="nosotros" />
        </div>
        <div className="text-container">
          <div className="title-container">
            <h4 className="sobre">SOBRE</h4>
            <h1 className="nosotros">Nosotros</h1>
          </div>
          <div>
            <p className="nosotrosDesc">
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
  max-height: 45rem;
  heigth: 600px;

  padding: 0;
  background-image: url(${bgImage3});
  background-repeat: no-repeat;
  background-size: 100rem;
  background-position: 50% %70;

  @media (min-width: 3072px) {
    background-size: 192rem;
  }

  @media (max-width: 768px) {
    background-image: url(${bgMobile3})
    background-size: 30rem;
    overflow: hidden;
  }


  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .nosotrosImg {
    padding: 50px;
    max-height: 500px;
    @media (max-width: 768px) {
      max-height: 400px;
      
    }
  }

  .sobre,
  .nosotros {
    margin: 0 auto;
    
  }

  .sobre {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.6rem;
    color: #ae862a;
    margin-right: 150px;
    @media (max-width: 768px) {
      font-size:  1.3rem;
    }
  }

  .nosotros {
    font-family: ShadedLarch;
    font-size: 5rem;
    font-weight: 300;
    color: white;
    @media (max-width: 768px) {
      font-size:  4rem;
    }
  }

  .nosotrosDesc {
    font-family: MuseoSlab;
    color: white;
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 25px;

    @media (max-width: 768px) {
      font-size:  20px;
    }
  }

  .text-container {
    margin-left: 70px;
    margin-top: 150px;
    margin-right: 100px;
    margin-bottom: 275px;

    @media (max-width: 768px) {
      margin-top: -20px;
    }
  }
`;
