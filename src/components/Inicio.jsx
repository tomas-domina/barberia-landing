import React from "react";
import styled from "styled-components";

const Inicio = ({ title1, title2 }) => {
  return (
    <TilteContainer>
      <h4 className="title">{title1}</h4>
      <h1 className="title">{title2}</h1>
      <button className="btn">Obtener</button>
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

  .title {
    margin: 0 auto;
    margin-right: 1000px;
  }

  .btn {
    margin-right: 650px;
    margin-top: 10px;
    height: 45px;
    width: 150px;
    background-color: #aba91d;
    color: white;
  }
`;
