import React, { useEffect, useState } from "react";
import Products from "./mock/Products"
import ItemList from "./ItemList";


const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getProductos = new Promise((resolve) => {
			setTimeout(() => {
				resolve(Products);
			}, 2000);
		});

		getProductos.then((respuesta) => {
			setItems(respuesta);
		});
	}, []);

	return (
		<div className="container">
			<h1>{props.name}</h1>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
