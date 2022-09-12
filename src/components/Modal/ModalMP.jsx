import React from "react";
import styled from "styled-components";
import bgImage4 from "../../images/ffondo-4.png";

const ModalMP = () => {
  return (
    <MPContainer>
      <div className="modal-background5">
        <div className="modal-container5"></div>
      </div>
    </MPContainer>
  );
};

export default ModalMP;

const MPContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  .modal-background5 {
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 90vw;
      overflow: hidden;
      height: 100vh;
      flex-direction: column;
    }
  }

  .modal-container5 {
    width: 1200px;
    height: 600px;
    border-radius: 12px;
    background-image: url(${bgImage4});
    background-size: 80rem;
    background-position: 100% 70%;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;

    @media (max-width: 768px) {
      width: 800px;
      height: 700px;
    }
  }
`;
