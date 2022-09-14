import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

	const [item, setItem] = useState({})

	useEffect(() => {
		const producto = {
			id: 1,
			nombre: "Tres Leche",
			desc: "Bizcochuelo húmedo en tres leches (leche condensada, leche evaporada, crema de leche), con un toque de licor y canela, decorada con merengue italiano y cerezas",
			imagen:"tresleche.jpg",
			precio: 3800
		};

		const getItem = new Promise((resolve) => {
			setTimeout(() => {
				resolve(producto);
			}, 2000);
		});

		getItem.then(respuesta => setItem(respuesta));

	}, []);

	return (
		<div>
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;