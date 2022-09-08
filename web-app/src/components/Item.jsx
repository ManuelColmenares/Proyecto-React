import React from "react";

const Item = ({ nombre, img, precio }) => {
	return (
		<div className="card">
			<img src={img} className="card-img-top" alt={nombre} />
			<div className="card-body">
				<h5 className="card-title text-center">
					<b>{nombre}</b>
				</h5>
				<p className="card-text text-center">${precio}</p>
			</div>
		</div>
	);
};

export default Item;
