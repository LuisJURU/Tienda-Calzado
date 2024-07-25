/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import Data from "../Data.jsx";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    console.log("Current carrito:", carrito);

    useEffect(() => {
        const producto = Data.items;
        if (producto) {
            setProductos(producto);
        } else {
            setProductos([]);
        }
    }, []);

    const addCarrito = (id) => {
        const check = carrito.every((item) => {
            return item.id !== id;
        });
        if (check) {
            const data = productos.filter((producto) => {
                return producto.id === id;
            });
            setCarrito([...carrito, ...data]);
        } else {
            alert("El producto se ha añadido al carrito");
        }
    };

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
        console.log("Loaded carrito from localStorage:", dataCarrito);
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }
    }, []);

    useEffect(() => {
        console.log("Saving carrito to localStorage:", carrito);
        localStorage.setItem("dataCarrito", JSON.stringify(carrito));
    }, [carrito]);

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                // Asegúrate de que item.cantidad esté definido
                return prev + item.price * (item.cantidad || 1);
            }, 0);
            setTotal(res);
        };
        getTotal();
    }, [carrito]);

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        carrito: [carrito, setCarrito],
        addCarrito: addCarrito,
        total: [total, setTotal],
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};