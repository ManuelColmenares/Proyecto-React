import React from "react";
import logo from "../components/img/logo.png";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-navBar my-3">
				<div className="container">
					<a className="navbar-brand title-dyc" href="index.html">
						<img
							src={logo}
							alt="Dulce y Crujiente"
							width="48"
							height="48"
							className="d-inline-block align-text-center me-2"
						/>
						Dulce y Crujiente
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="index.htmlnavbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="index.html">
									Inicio
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="index.html"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Productos
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="index.html">
											Tortas
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="index.html">
											Cupcakes
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="index.html">
											Pasteles de Cumpleaños
										</a>
									</li>
								</ul>
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="currentColor"
						className="bi bi-cart"
						viewBox="0 0 16 16"
					>
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
					</svg>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
