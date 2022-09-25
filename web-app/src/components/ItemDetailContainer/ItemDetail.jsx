import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] =  useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
    }
    return (
        <div className="card md-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p className="card-text">${item.precio}</p>
                        <div>
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