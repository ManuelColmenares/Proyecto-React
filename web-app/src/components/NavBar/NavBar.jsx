import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/img/logo.png";
import CartWitget from "./CartWidget";

const NavBar = () => {
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

					<div className="collapse navbar-collapse justify-content-center">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="index.html">
									Inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									Productos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									Contactanos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									Nosotros
								</a>
							</li>
						</ul>
					</div>
					<CartWitget />
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
