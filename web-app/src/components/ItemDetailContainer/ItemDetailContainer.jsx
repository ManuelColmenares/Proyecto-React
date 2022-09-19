import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Products from "../mock/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({})

	useEffect(() => {
		const getItem = () => 
			new Promise((res, rej) => {
				const product = Products.find((prod) => prod.id === 1);
				setTimeout(() => {
					res(product);
			}, 2000);
		});

		getItem()
		.then((info) => {
			setItem(info);
		})
		.catch((error) => {
			console.log(error);
		})

	}, []);

	return (
		<div className="container">
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;