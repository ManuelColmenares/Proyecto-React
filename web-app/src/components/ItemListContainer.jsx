import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const productos = [
			{
				id: 1,
				nombre: "Tres Leche",
				desc: "Bizcochuelo húmedo en tres leches (leche condensada, leche evaporada, crema de leche), con un toque de licor y canela, decorada con merengue italiano y cerezas",
				imagen:"tresleche.jpg",
				precio: 3800,
			},

			{
				id: 2,
				nombre: "Red Velvet",
				desc: "Esta torta es para los que no son tan amantes del chocolate, su sabor es entre vainilla y chocolate suave, con triple relleno de crema de queso y cobertura de buttercream con chocolate blanco",
				imagen:"redvelvet.jpg",
				precio: 7000,
			},

			{
				id: 3,
				nombre: "Triple Chocolate",
				desc: "Torta húmeda de chocolate, triple relleno de ganache de chocolate, cobertura de buttercream de chocolate semiamargo, drip y ferreros",
				imagen:"triplechocolate.jpg",
				precio: 7800,
			},

			{
				id: 4,
				nombre: "Matilda",
				desc: "Torta de chocolate húmeda con triple relleno y cobertura de ganache de chocolate semiamargo",
				imagen:"matilda.jpg",
				precio: 7500,
			},
		];

		const getProductos = new Promise((resolve) => {
			setTimeout(() => {
				resolve(productos);
			}, 2000);
		});

		getProductos.then((respuesta) => {
			setItems(respuesta);
		});
	}, []);

	return (
		<div className="container">
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
