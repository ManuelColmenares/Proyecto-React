import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [cantidad, setCantidad] = useState(initial);
	const [itemStock, setItemStock] = useState(stock);
	const [itemAdd, setItemAdd] = useState(onAdd);

	const decremento = (valor) => {
		if (valor > 0) {
			setCantidad(valor);
		}
	};

	const incremento = (valor) => {
		if (valor <= itemStock) {
			setCantidad(valor);
		}
	};

	const agregarProducto = () => {
		if (cantidad <= itemStock) {
			setItemStock(itemStock - cantidad);
			setItemAdd(itemAdd + cantidad);
		}
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
								onClick={() => {
									decremento(cantidad - 1);
								}}
							/>
							<input
								type="text"
								className="form-control text-center"
								value={cantidad}
								onChange={() => {}}
							/>
							<input
								type="button"
								className="btn btn-secondary"
								value="+"
								onClick={() => {
									incremento(cantidad + 1);
								}}
							/>
						</div>
						<div className="d-grid gap-2 py-2">
							<input
								type="button"
								value="Agregar"
								onClick={() => {
									agregarProducto();
								}}
							/>
						</div>
						<p>Productos Seleccionados: {itemAdd} </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
