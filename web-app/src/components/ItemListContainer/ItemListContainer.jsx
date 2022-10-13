import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		const prodColecction = collection(db, 'products');
		const ref = categoryName ? query(prodColecction, where('categoria', '==', categoryName)) : prodColecction;

		getDocs(ref).then((response) => {
			const products = response.docs.map((prod) => {
				return {
					id: prod.id,
					...prod.data(),
				};
			});
			setItems(products);
		});

	},[categoryName]);

		

	return (
		<div className="container">
			<h1 className="text-center">{props.tittle}</h1>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
