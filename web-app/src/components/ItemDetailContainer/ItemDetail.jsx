import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] =  useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
    }
    return (
        <div className="card md-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.nombre}</h5>
                        <p className="card-text text-center">{item.desc}</p>
                        <p className="card-text- text-center">${item.precio}</p>
                        <div className="d-flex justify-content-center">
                            {cantidad ? 
                                <div>
                                    <p>Producto Añadido...</p>
                                    <Link to="/cart" className="btn btn-secondary">Finalizar Compra</Link>
                                </div> 
                            : <ItemCount stock={5} initial={1} onAdd={onAdd} />}
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail;