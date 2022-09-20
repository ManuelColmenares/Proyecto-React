import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="card md-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"img/imgProductos/"+item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.desc}</p>
                        <p className="card-text">${item.precio}</p>
                        <ItemCount stock={5} initial={1} onAdd={0} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail;