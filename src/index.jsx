/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { DataContext } from "./Context/Dataprovider";
import { Link } from "react-router-dom";
import Nike from "./images/DD1391-102.avif";
import Login from "./components/Login/Login"; // Asegúrate de importar el componente Login

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;
  const [showLogin, setShowLogin] = useState(false); // Estado para controlar la visibilidad del Login
  const [user, setUser] = useState("Guest"); // Estado para el nombre del usuario

  const toogleMenu = () => {
    setMenu(!menu);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (username) => {
    setUser(username);
    setShowLogin(false); // Ocultar el formulario de login después de iniciar sesión
  };

  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Nike} alt="Nike" width="150" />
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
        <div onClick={toggleLogin}>
          <box-icon name="user-circle"></box-icon>
          <span>{user}</span> {/* Mostrar el nombre del usuario */}
        </div>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className="item__total"> {carrito.length} </span>
        </div>
      </header>
      {showLogin && (
        <div className="login-container">
          <Login onLogin={handleLogin} /> {/* Pasar la función handleLogin como prop */}
        </div>
      )}
    </>
  );
};