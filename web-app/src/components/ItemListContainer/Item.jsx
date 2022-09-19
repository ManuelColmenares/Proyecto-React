import React from "react";

const Item = ({ nombre, imagen, precio }) => {
	return (
		<div className="card">
			<img src={"img/imgProductos/"+imagen} className="card-img-top" alt={nombre} />
			<div className="card-body">
				<h5 className="card-title text-center">
					<b>{nombre}</b>
				</h5>
				<p className="card-text text-center">${precio}</p>
				<a href="#" class="btn btn-secondary">Detalles</a>
			</div>
		</div>
	);
};

export default Item;
