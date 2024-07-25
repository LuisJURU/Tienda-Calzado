/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio/index";
import AuthForm from "./Login/Login";
import { ProductosLista } from "./Productos/index";
import { ProductosDetalles } from "./Productos/ProductosDetalles";


const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/" element={<AuthForm />} />
        <Route path="/productos" element={<ProductosLista />} />
        <Route path="/productos/:id" element={<ProductosDetalles />} />

      </Routes>
    </section>
  );
};

export default Paginas;