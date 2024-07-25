/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [moving, setMoving] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMoving(!moving);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      navigate("/productos");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleSignUp = () => {
    if (fullname && email && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some(user => user.email === email);
      if (userExists) {
        alert("El usuario ya existe");
      } else {
        users.push({ fullname, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/productos");
      }
    } else {
      alert("Por favor, completa todos los campos");
    }
  };

  return (
    <div className="container">
      <div className="backbox">
        <div className={`loginMsg ${isLogin ? "" : "visibility"}`}>
          <div className="textcontent">
            <p className="title">No tienes cuenta?</p>
            <button id="switch1" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
        <div className={`signupMsg ${isLogin ? "visibility" : ""}`}>
          <div className="textcontent">
            <p className="title">Tienes cuenta?</p>
            <button id="switch2" onClick={toggleForm}>LOG IN</button>
          </div>
        </div>
      </div>
      {/* backbox */}

      <div className={`frontbox ${moving ? "moving" : ""}`}>
        {isLogin ? (
          <div className={`login ${isLogin ? "" : "hide"}`}>
            <h2>LOG IN</h2>
            <div className="inputbox">
              <input
                type="text"
                name="email"
                placeholder="  EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="  PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>FORGET PASSWORD?</p>
            <button onClick={handleLogin}>LOG IN</button>
          </div>
        ) : (
          <div className={`signup ${isLogin ? "hide" : ""}`}>
            <h2>SIGN UP</h2>
            <div className="inputbox">
              <input
                type="text"
                name="fullname"
                placeholder="  FULLNAME"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="  EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="  PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSignUp}>SIGN UP</button>
          </div>
        )}
      </div>
      {/* frontbox */}
    </div>
  );
};

export default AuthForm;