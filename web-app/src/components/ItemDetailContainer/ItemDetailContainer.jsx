import React from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);	
	const {id} = useParams();

	useEffect(() => {
		const prodColecction = collection(db, 'products');
		const ref = doc(prodColecction, id);
		getDoc(ref).then((res) => {
			setItem({
				id: res.id,
				...res.data(),
			});
		});

	},[id]);

	return (
		<div className="container">
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;