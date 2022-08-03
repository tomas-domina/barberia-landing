import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="header">
        <img className="logo" src={logo} alt="logo" width={200} height={80} />

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicio">Servicio</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#turnos y membresias">
                Turnos y <br /> Membresias
              </a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #1e1d1c;
  height: 120px;

  li,
  a {
    font-family: MuseoSlab;
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
  }

  .logo {
    cursor: pointer;
  }

  .nav-links {
    list-style: none;
  }
  .nav-links li {
    display: inline-block;
    padding: 0px 20px;
  }
  .nav-links li a {
    transition: all 0.3s ease 0s;
  }
  .nav-links li a:hover {
    color: #ae862a;
  }
`;
