import React, { useState } from "react";
import styled from "styled-components";

import bgImage4 from "../../images/ffondo-4.png";
import ModalConfirm from "./ModalConfirm";

const ModalForm = ({ closeModal, service, barber }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [confirm, setConfirm] = useState(false);
  return (
    <ModalContainer>
      <div className="modal-background3">
        <div className="modal-container3">
          <div>
            <div className="title">
              <h4>Reservar</h4>
              <h1>Turno</h1>
              <div className="service">
                <p>{service}</p>
                <br />

                <p>
                  ●
                  <br />
                  {barber}
                </p>
                <p className="date">
                  ●
                  <br />
                  Martes 26 | 14 - 14:30hs
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="body">
              <div>
                <h2>Datos</h2>
              </div>
              <div>
                <form className="modalForm">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nombre"
                  />
                  <br />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Apellido"
                  />
                  <br />
                  <input
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    placeholder="Mail"
                  />
                  <br />
                  <input
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    type="tel"
                    placeholder="Telefono"
                  />
                  <br />
                  <textarea
                    className="textarea"
                    name=""
                    id=""
                    cols="30"
                    placeholder="Mensaje"
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
          <div className="footer">
            <button id="cancel-btn22" onClick={() => closeModal(false)}>
              Atras
            </button>
            <button onClick={() => setConfirm(true)} id="next-btn2">
              Siguiente
            </button>
          </div>
        </div>
      </div>
      {confirm && (
        <ModalConfirm
          closeModal={setConfirm}
          name={name}
          lastName={lastName}
          mail={mail}
          tel={tel}
          service={service}
          barber={barber}
        />
      )}
    </ModalContainer>
  );
};

export default ModalForm;

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  .modal-background3 {
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

  .modal-container3 {
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

  .modal-container3 .title {
    display: inline-block;
    text-align: center;
    margin-top: -50px;
  }

  .modal-container3 .title p {
    font-family: MuseoSlab;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 35px;
    margin-top: -80px;
    padding: 10px;
  }

  .modal-container3 .title .service {
    padding: 0;
    margin-bottom: -50px;
    margin-top: -100px;
    margin-left: -30px;

    @media (max-width: 768px) {
      margin-top: 70px;
      margin-left: 0px;
    }
  }

  .modal-container3 .title .service .date {
    padding: 0;
    margin-bottom: 20px;
    margin-top: -40px;
  }

  .modal-container3 h4 {
    font-family: MuseoSlab;
    font-weight: 300;
    font-size: 3rem;
    color: #c09b32;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 60px;
      margin-left: 0px;
    }
  }
  .modal-container3 h1 {
    font-family: ShadedLarch;
    font-weight: 300;
    font-size: 8rem;
    color: white;
    margin-top: -60px;

    @media (max-width: 768px) {
      font-size: 4rem;
      margin-left: 20px;
    }
  }

  .modal-container3 h2 {
    font-family: ShadedLarch;
    color: #775000;
    font-weight: 300;
    font-size: 5rem;
    margin-right: 100px;
    margin-left: -280px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
      margin-top: -30px;
      font-size: 2rem;
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

  .modal-container3 .body {
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
      margin-bottom: -120px;
      margin-top: 175px;
      margin-left: -75px;
    }
  }

  .modal-container3 .body .modalForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-top: -50px;
    margin-left: -40px;

    @media (max-width: 768px) {
      margin-left: 60px;
      margin-top: -150px;
    }
  }

  .modal-container3 .body .modalForm input {
    padding: 10px;
    font-family: MuseoSlab;
    border: none;
    height: 40px;
    width: 500px;

    @media (max-width: 768px) {
      width: 300px;
      height: 25px;
    }
  }
  .modal-container3 .body .modalForm .textarea {
    font-family: MuseoSlab;

    height: 75px;
  }

  .barber {
    height: 175px;
    width: 175px;
    margin: -50px;
    display: flex;
    flex-direction: row;
    margin-left: -140px;
  }

  .modal-container3 .body p {
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
  }

  .modal-container3 .footer {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-container3 .footer button {
    width: 150px;
    height: 45px;
    margin: 10px;

    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 120px;
    }
  }

  #cancel-btn22 {
    background-color: #775000;
    font-family: MuseoSlab;

    margin-top: 530px;
    margin-left: -2150px;
    margin-right: 830px;

    @media (max-width: 768px) {
      margin-top: 135px;
      margin-right: 120px;
      margin-left: -620px;
    }
  }

  .modal-container3 .body button {
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

  #next-btn2 {
    background-color: #775000;
    font-family: MuseoSlab;
    margin-top: 530px;
    margin-left: 0px;
    margin-right: -1200px;

    @media (max-width: 768px) {
      margin-top: 135px;
      margin-left: -75px;
      margin-right: -600px;
    }
  }
`;
