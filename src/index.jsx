/* eslint-disable no-unused-vars */
import React from "react";
import Nike from "./images/DD1391-102.avif";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Nike} alt="Nike Logo" width='150px' />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>
        </ul>
        <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="item_total">0</span>
        </div>


      </header>
    </div>
  );
};