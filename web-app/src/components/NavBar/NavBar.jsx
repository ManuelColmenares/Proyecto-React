import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import logo from "../../components/img/logo.png";
import CartWitget from "./CartWidget";

const NavBar = () => {
	const [cat, setCat] = useState([]);

	useEffect (() => {
		const categoryColecction = collection(db, 'categories');

		getDocs(categoryColecction).then((resp) => {
			const categorias = resp.docs.map((cat) => {
				return {
					id: cat.id,
					...cat.data(),
				};
			});
			setCat(categorias);
		});
	}, [])
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-navBar my-3">
				<div className="container">
					<Link to="/" className="navbar-brand title-dyc">
						<img
							src={logo}
							alt="Dulce y Crujiente"
							width="48"
							height="48"
							className="d-inline-block align-text-center me-2"
						/>
						Dulce y Crujiente
					</Link>

					<div className="justify-content-center">
						<ul>
							{cat.map((categoria) => (
								<NavLink 
									key={categoria.id}
									style={{ margin: '0px 8px', textDecoration: 'none', color:'GrayText' }}
									to={`/category/${categoria.path}`}
								>
									{categoria.name}
								</NavLink>
							))}
						</ul>
						{/* <ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="index.html">
									Chocolate
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									RedVelvet
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									Tres Leche
								</a>
							</li>
						</ul> */}
					</div>
					<CartWitget />
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
