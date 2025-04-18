// Header.jsx
import React from "react";
import logo from "/KasaLogo.png";
import "./header.scss";
import { NavLink } from "react-router";

function Header() {
      return (
            <>
                  <header className="header">
                        <img src={logo} className="logo" alt="kasa logo" />
                        <nav>
                              <ul>
                                    <li>
                                          <NavLink to="/">Accueil</NavLink>
                                    </li>
                                    <li>
                                          <NavLink to="/about">
                                                À propos
                                          </NavLink>
                                    </li>
                              </ul>
                        </nav>
                  </header>
            </>
      );
}

export default Header;
