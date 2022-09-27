import React, { useEffect, useState } from "react";
import Products from "../mock/Products";
import ItemList from "./ItemList";



const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getProductos = new Promise((resolve) => {
			setTimeout(() => {
				resolve(Products);
			}, 500);
		});

		getProductos.then((respuesta) => {
			setItems(respuesta);
		});
	}, []);

	return (
		<div className="container">
			<h1 className="text-center">{props.name}</h1>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
