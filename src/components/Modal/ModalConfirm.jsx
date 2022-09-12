import React from "react";
import { useState } from "react";
import styled from "styled-components";
import bgImage4 from "../../images/ffondo-4.png";
import ModalMP from "./ModalMP";

const ModalConfirm = ({
  closeModal,
  name,
  lastName,
  mail,
  tel,
  service,
  barber,
}) => {
  const [mp, setMp] = useState(false);

  return (
    <ConfirmContainer>
      <div className="modal-background4">
        <div className="modal-container4">
          <div className="info4">
            <div className="column1">
              <div>
                <h4>Reservar</h4>
                <h1>Turno</h1>
              </div>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet
                  <br />
                  Repellendus, natus cum non <br /> qui rem dicta.{" "}
                </p>
              </div>
            </div>
            <div className="column2">
              <div className="confirm4">
                <h2>Confirmacion</h2>
              </div>
              <div className="services4">
                <p>{service}</p>
                <br />●<p>{barber}</p>
                <br />●<p>Martes 26 | 14 - 14:30hs</p>
                <br />●
                <p className="datos">
                  {name + " " + lastName} <br /> {tel} <br /> {mail}
                </p>
              </div>
            </div>
          </div>
          <div className="footer4">
            <button id="backBtn" onClick={() => closeModal(false)}>
              Atras
            </button>
            <button onClick={() => setMp(true)} id="next2Btn">
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {mp && <ModalMP />}
    </ConfirmContainer>
  );
};

export default ModalConfirm;

const ConfirmContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  .modal-background4 {
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

  .modal-container4 {
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
  .info4 {
    display: flex;

    justify-conter: center;
    align-items: center;
  }
  .column1 {
    color: white;
    margin-left: 20px;
    margin-bottom: 300px;

    @media (max-width: 768px) {
      margin-left: 300px;
      margin-bottom: 200px;
    }
  }

  .column1 h4 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 3rem;
    color: #c09b32;
    margin-top: 30px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 60px;
      margin-left: 0px;
    }
  }

  .column1 h1 {
    font-family: ShadedLarch;
    font-weight: 300;
    font-size: 8rem;
    color: white;
    margin-top: -60px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 4rem;
      margin-left: 20px;
    }
  }

  .column1 p {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-left: -30px;
    }
  }

  .column2 {
    color: white;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: -100px;

    @media (max-width: 768px) {
      margin-bottom: -600px;
      margin-left: -275px;
      margin-top: -30px;
    }
  }

  .column2 h2 {
    font-family: ShadedLarch;
    font-weight: 300;
    font-size: 5rem;
    color: #775000;

    @media (max-width: 768px) {
      margin-bottom: 55px;
      margin-top: -30px;
      font-size: 2rem;
      margin-right: -80px;
    }
  }

  .confirm4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -50px;
    margin-top: -200px;
  }

  .services4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    margin-left: 120px;

    @media (max-width: 768px) {
      margin-left: 40px;
    }
  }
  .services4 p {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: -20px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .footer4 {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer4 button {
    width: 150px;
    height: 45px;
    margin: 10px;

    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;

    @media (max-width: 768px) {
      width: 120px;
    }
  }

  #backBtn {
    background-color: #775000;
    font-family: MuseoSlab;
    margin-top: -270px;
    margin-right: 840px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-bottom: -450px;
      margin-right: 60px;
    }
  }

  #next2Btn {
    background-color: #775000;
    font-family: MuseoSlab;
    margin-top: -270px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-top: 190px;
    }
  }
`;
