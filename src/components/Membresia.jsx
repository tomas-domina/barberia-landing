import React from "react";
import styled from "styled-components";

import button from "../images/Boton.png";
import bgImage4 from "../images/ffondo-4.png";

const Membresia = () => {
  return (
    <MembresiaContainer>
      <div className="text-container">
        <h4>Contratá nuestra</h4>
        <h1>Membresía</h1>
      </div>
      <div>
        <img src={button} alt="obtener" />
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

  img {
    margin-top: 10px;
    margin-bottom: 200px;
    margin-left: 275px;
  }

  h1,
  h4 {
    margin: 0 auto;
    margin-right: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 2rem;
    margin-right: 66rem;
    color: #ae862a;
    margin-right: -245px;
  }

  h1 {
    font-family: ShadedLarch;
    font-size: 6rem;
    font-weight: 300;
    color: white;
    margin-right: -350px;
  }

  .text-container {
    margin-top: 175px;
    // margin-left: 1350px;
  }
`;
