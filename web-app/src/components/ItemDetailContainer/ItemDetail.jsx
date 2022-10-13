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
                                <div className="container">
                                    <p className="card-text- text-center">Producto Añadido...</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <Link to="/cart" className="btn btn-secondary mr-50">Finalizar Compra</Link>

                                        <Link to="/" className="btn btn-secondary">Continuar comprando</Link>
                                    </div>
                                </div> 
                            : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail;