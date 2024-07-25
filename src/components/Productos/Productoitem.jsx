/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../../Context/Dataprovider'

const Productoitem = ({
    id,
    title,
    price,
    image,
    category,
}) => {


  const value = useContext(DataContext)
  const addCarrito = value.addCarrito;

  


  return (
    <div className="producto">
    <a href="#">
      <div className="producto_img">
        <img src={image} alt="title" />
      </div>
    </a>
    <div className="producto_footer">
      <h1>{title}</h1>
      <p>{category}</p>
      <p className="price">${price}</p>
    </div>
    <div className="bottom">
      <button className="btn" onClick={()=>{ addCarrito(id)}}>Añadir al carrito</button>
      <div>
      <a href={`/productos/${id}`} className="btn">Vista</a>
      </div>
    </div>
  </div>
  )
}

export default Productoitem