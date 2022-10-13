import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


const Cart = () => {
    const { cart, deleteOne, deleteAll, totalPrecio } = useContext(CartContext);
    const total = totalPrecio();

    return (

        <div className="container">
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">SubTotal</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                {cart.map((producto) => (
                    <tbody key={producto.id}>
                        <tr>
                            <th scope="row">
                                <img
                                    src={producto.imagen}
                                    width="80px"
                                    className="img-fluid rounded-start"
                                    alt={producto.nombre}
                                />
                            </th>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>$ {producto.precio}</td>
                            <td>$ {producto.precio * producto.cantidad}</td>
                            <td>
                                <button className="btn btn-secondary btn-sm fs-6 d-flex align-items-center" onClick={() => deleteOne(producto.id)}>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                     Eliminar
                                </button>

                            </td>
                        </tr>
                    </tbody>
                ))}
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                        <th scope="col">Total:</th>
                        <th scope="col">$ {total}</th>
                        <th scope="col"><button className="btn btn-danger btn-sm" onClick={deleteAll} >Eliminar Todo</button></th>
                    </tr>
                </thead>
            </table>
            <div className="d-flex justify-content-center">
                <Link to="/checkout" className="btn btn-success">Checkout</Link>
            </div>

        </div>

    );
}

export default Cart;