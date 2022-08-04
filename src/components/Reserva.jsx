import React from "react";
import styled from "styled-components";

import agenda from "../images/icon-agenda.png";
import bgImage5 from "../images/ffondo-5.png";

const Reserva = () => {
  return (
    <ReservaContainer>
      <div>
        <h4>Reservá tu</h4>
        <h1>Turno</h1>
      </div>
      <div>
        <img src={agenda} alt="calendario" />
      </div>
    </ReservaContainer>
  );
};

export default Reserva;

const ReservaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 120rem;
  max-width: 100%;
  background-image: url(${bgImage5});
  background-repeat: no-repeat;
  background-size: 95rem;
  background-position: 10% 0;

  @media (min-width: 3072px) {
    background-size: 192rem;
  }

  h1,
  h4 {
    margin: 0 auto;
    margin-right: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-left: 500px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  h4 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 3rem;
    margin-right: 66rem;
    color: white;
    margin-right: -325px;
  }

  h1 {
    font-family: ShadedLarch;
    font-size: 8rem;
    font-weight: 300;
    color: #1e1d1c;
    margin-right: -350px;
  }
`;
