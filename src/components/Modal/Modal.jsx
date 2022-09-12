import React from "react";
import { useState } from "react";

import styled from "styled-components";
import barber1 from "../../images/SANTI.jpg";
import barber2 from "../../images/fabri.jpg";
import bgImage4 from "../../images/ffondo-4.png";
import ModalCal from "./ModalCal";

const Modal = ({ closeModal, service }) => {
  const [openCal, setOpenCal] = useState(false);
  const [barber, setBarber] = useState("");

  return (
    <ModalContainer>
      <div className="modal-background">
        <div className="modal-container">
          <div>
            <div className="title">
              <h4>Reservar</h4>
              <h1>Turno</h1>
              <p className="service">{service}</p>
            </div>
          </div>
          <div>
            <div className="body">
              <div>
                <h2>Barbero</h2>
              </div>
              <div className="barber">
                <div onClick={() => setBarber("Fabri")}>
                  <img
                    src={barber2}
                    alt=""
                    onClick={() => {
                      setOpenCal(true);
                    }}
                  />
                </div>

                <div
                  onClick={() => {
                    setOpenCal(true);
                  }}
                >
                  <img
                    src={barber1}
                    alt=""
                    onClick={() => setBarber("Santi")}
                  />
                </div>

                <div
                  className="primero"
                  onClick={() => setBarber("Primero Disponible")}
                >
                  <p
                    onClick={() => {
                      setOpenCal(true);
                    }}
                  >
                    Primero Disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancel-btn">
              Atras
            </button>
          </div>
        </div>
      </div>
      {openCal && (
        <ModalCal closeModal={setOpenCal} barber={barber} service={service} />
      )}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  top: 575px;
  left: 20px;
  .modal-background {
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

  .modal-container {
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

  .modal-container .title {
    display: inline-block;
    text-align: center;
    margin-top: -50px;
  }

  .modal-container .title .service {
    font-family: MuseoSlab;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 35px;
    margin-top: -80px;
    padding: 10px;

    @media (max-width: 768px) {
      margin-top: -50px;
      margin-left: 60px;
    }
  }

  .modal-container h4 {
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
  .modal-container h1 {
    font-family: ShadedLarch;
    font-weight: 300;
    font-size: 8rem;
    color: white;
    margin-top: -60px;

    @media (max-width: 768px) {
      font-size: 4rem;
      margin-left: 80px;
    }
  }

  .modal-container h2 {
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

  .modal-container .body {
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

  .modal-container .body .barber img {
    height: 175px;
    width: 175px;
    margin: 20px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;

    @media (max-width: 768px) {
      height: 80px;
      width: 80px;
    }
  }

  .modal-container .body .barber {
    height: 175px;
    width: 175px;
    margin: -50px;
    display: flex;
    flex-direction: row;
    margin-left: -140px;

    @media (max-width: 768px) {
      margin-left: -160px;
    }
  }

  .modal-container .body p {
    height: 150px;
    width: 175px;
    color: black;
    font-family: ShadedLarch;
    margin-top: 110px;
  }
  .body .barber .primero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 175px;
    width: 500px;
    background-color: white;
    margin-top: 20px;
    margin-left: 15px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;

    @media (max-width: 768px) {
      height: 80px;
      width: 80px;
      font-size: 20px;
    }
  }

  .modal-container .footer {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-container .footer button {
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

  #cancel-btn {
    background-color: #775000;
    font-family: MuseoSlab;
    margin-top: 530px;
    margin-left: -1720px;

    @media (max-width: 768px) {
      margin-top: 100px;
      margin-right: 75px;
    }
  }

  .next {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
