/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import {DataContext} from '../../Context/Dataprovider'
import Productoitem from './Productoitem'

export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  console.log(productos);


  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {
          productos.map(producto => (
            <Productoitem 
            key={producto.id}
            id = {producto.id}
            title = {producto.title}
            price = {producto.price}
            image = {producto.image}
            category = {producto.category}
            img1 = {producto.img1}
            img2 = {producto.img2}
            cantidad = {producto.cantidad}
            />
          ))
        }
      </div>
    </>
  );
};
