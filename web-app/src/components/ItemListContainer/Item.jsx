import React from "react";
import { Link } from "react-router-dom"

const Item = ({ nombre, precio, id, imagen,  }) => {
	return (
		<div className="card">
			<img src={imagen} className="card-img-top" alt={nombre} />
			<div className="card-body">
				<h5 className="card-title text-center">
					<b>{nombre}</b>
				</h5>
				<p className="card-text text-center">${precio}</p>
				<Link to={ `/detail/${id}` } className="btn btn-secondary">Detalle</Link>
			</div>
		</div>
	);
};

export default Item;
