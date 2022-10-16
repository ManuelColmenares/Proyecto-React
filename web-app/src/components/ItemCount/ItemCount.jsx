import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const sumar = () => {
		count < stock && setCount(count + 1);
	};

	const restar = () => {
		count > initial && setCount(count - 1);
	};

	const agregar = () => {
		onAdd(count)
	};

	return (
		<div className="container-counter">
			<div className="container-btn">
				<button type="button" className="btn btn-secondary btn-sm" onClick={restar}>-</button>
				<p className="p-counter fs-4">{count}</p>
				<button type="button" className="btn btn-secondary btn-sm" onClick={sumar}>+</button>
			</div>
			<button type="button" className="btn btn-secondary btn-sm" onClick={agregar}>Agregar</button>
		</div>
	);
};

export default ItemCount;
