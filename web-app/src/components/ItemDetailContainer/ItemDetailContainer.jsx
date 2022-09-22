import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../mock/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);	
	const {id} = useParams();

	useEffect(() => {
		const getItem =
			new Promise((res, rej) => {
				const product = Products.find((prod) => prod.id === parseInt(id));
				setTimeout(() => {
					res(product);
			}, 2000);
		});

		getItem
		.then((info) => {
			setItem(info);
		})
		.catch((error) => {
			console.log(error);
		});

	},[]);

	return (
		<div className="container">
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;