import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <h2>LOGO</h2>
      <div className="links">
        <a href="#inicio">Inicio</a>
        <a href="#servicio">Servicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#turnos y membresias">
          Turnos y <br /> Membresias
        </a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="responsive-btn"></div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: bold;
    margin-left: 20px;
  }
  padding: 0.8rem;
  background-color: #1e1f1e;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 2rem;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 53rem;
    margin-right: auto;
    text-align: center;
    font-family: MuseoSlab;
    a {
      color: white;
      font-size: 1rem;
      display: block;
      padding: 5px;
    }
  }
`;
