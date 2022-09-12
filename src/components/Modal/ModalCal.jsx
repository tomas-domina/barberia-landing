import React, { useState } from "react";
import styled from "styled-components";

import bgImage4 from "../../images/ffondo-4.png";
import ModalForm from "./ModalForm";

const ModalCal = ({ closeModal, barber, service }) => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <ModalContainer>
      <div className="modal-background2">
        <div className="modal-container2">
          <div>
            <div className="title">
              <h4>Reservar</h4>
              <h1>Turno</h1>
              <div className="services">
                <p className="service">{service}</p>

                <p className="barberName">
                  ● <br /> {barber}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="body">
              <div>
                <h2>Horarios</h2>
              </div>
              <div>
                <button onClick={() => setOpenForm(true)}>next</button>
              </div>
            </div>
          </div>
          <div className="footer">
            <button id="cancel-btn2" onClick={() => closeModal(false)}>
              Atras
            </button>
          </div>
        </div>
      </div>
      {openForm && (
        <ModalForm closeModal={setOpenForm} service={service} barber={barber} />
      )}
    </ModalContainer>
  );
};

export default ModalCal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  .modal-background2 {
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
    }
  }

  .modal-container2 {
    width: 1200px;
    height: 600px;
    border-radius: 12px;
    background-image: url(${bgImage4});
    background-size: 80rem;
    background-position: 100% 70%;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: row;
    padding: 25px;

    @media (max-width: 768px) {
      width: 800px;
      height: 700px;
      flex-direction: column;
    }
  }

  .modal-container2 .title {
    display: inline-block;
    text-align: center;
    margin-top: -50px;
  }

  .modal-container2 .title .service {
    font-family: MuseoSlab;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 35px;
    margin-top: -80px;

    @media (max-width: 768px) {
      margin-top: -50px;
    }
  }

  .modal-container2 .title .barberName {
    font-family: MuseoSlab;
    color: white;
    font-size: 1.5rem;
    margin-top: -50px;
    padding: 10px;
  }

  .modal-container2 .title .services {
    padding: 0;

    margin-top: -94px;
    margin-left: -30px;

    @media (max-width: 768px) {
      margin-top: -20px;
      margin-left: 60px;
    }
  }

  .modal-container2 h4 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 3rem;
    color: #c09b32;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 60px;
      margin-left: 75px;
    }
  }
  .modal-container2 h1 {
    font-family: ShadedLarch;
    font-weight: 300;
    font-size: 8rem;
    color: white;
    margin-top: -60px;

    @media (max-width: 768px) {
      font-size: 4rem;
      margin-left: 80px;
      margin-bottom: 50px;
    }
  }

  .modal-container2 h2 {
    font-family: ShadedLarch;
    color: #775000;
    font-weight: 300;
    font-size: 5rem;

    @media (max-width: 768px) {
      margin-bottom: 30px;
      font-size: 4rem;
      margin-right: 40px;
    }
  }

  .titleCloseBtn {
    display: flex;
    justify-content: flex-end;
  }

  .titleCloseBtn button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }

  .modal-container2 .body {
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
    margin-left: 200px;
    margin-top: -50px;

    @media (max-width: 768px) {
      margin-bottom: 0px;
      margin-top: 140px;
      margin-left: -75px;
    }
  }

  .modal-container2 .footer {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-container2 .footer button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }

  #cancel-btn2 {
    background-color: #775000;
    font-family: MuseoSlab;
    margin-top: 182px;
    margin-left: -68px;
    margin-top: 530px;
    margin-left: -1729px;

    @media (max-width: 768px) {
      margin-top: 100px;
      margin-right: 80px;
    }
  }
`;
