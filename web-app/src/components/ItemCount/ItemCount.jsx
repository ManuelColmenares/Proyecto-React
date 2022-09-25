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
		<div>
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-2">
						<p className="text-center">Torta Tres Leche</p>
						<div className="input-group">
							<input
								type="button"
								className="btn btn-secondary"
								value="-"
								onClick={restar} 
							/>
							<input
								type="text"
								className="form-control text-center"
								value={count}
							/>
							<input
								type="button"
								className="btn btn-secondary"
								value="+"
								onClick={sumar}
							/>
						</div>
						<div className="d-grid gap-2 py-2">
							<input
								type="button"
								value="Agregar al Carrito"
								onClick={agregar}
							/>
						</div>
						<p>Productos Seleccionados: {count} </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
