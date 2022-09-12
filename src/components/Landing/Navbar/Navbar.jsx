import React from "react";

import styled from "styled-components";
import { Link } from "react-scroll";

import logo from "../../../images/logo.png";
import ListIcon from "../../ListIcon/ListIcon";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  const closeMenu = () => setClicked(false);

  return (
    <NavbarContainer>
      <div className="header">
        <img className="logo" src={logo} alt="logo" width={200} height={80} />

        <nav>
          <ul className={`nav-links ${clicked ? "active" : ""}`}>
            <li>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
                className="link"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="servicio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
                className="link"
              >
                Servicio
              </Link>
            </li>
            <li>
              <Link
                to="nosotros"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
                onClick={closeMenu}
                className="link"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="turnos-y-membresias"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
                className="link"
              >
                Turnos y <br /> Membresias
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
                className="link"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <div className="listIcon">
            <ListIcon clicked={clicked} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 120px;
  position: absolute;
  z-index: 1;

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
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    .link{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      .link{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }


  .nav-links.active  {
    width: 100%;
    display: block;
    position; absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 120px;
      .link{
        margin-bottom: 35px;
      }
    }
  }

  .listIcon {
    @media (min-width: 768px) {
      display: none;
    }
    color: white;
  }

  .nav-links li {
    display: inline-block;
    padding: 0px 20px;
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .nav-links li a {
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .nav-links li a:hover {
    color: #ae862a;
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 750px;
  }
`;
