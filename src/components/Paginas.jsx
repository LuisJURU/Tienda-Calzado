/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio/index";
import { ProductosLista } from "./Productos/index";

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista />} />
      </Routes>
    </section>
  );
};

export default Paginas;