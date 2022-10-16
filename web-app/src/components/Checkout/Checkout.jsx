import React, { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Success from "../Success/Success";

const Checkout = () => {
    const { cart, deleteAll, totalUnidades, totalPrecio } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            //Creo el objeto con los Datos del Comprador
            const buyer = { name: nombre, email: email, phone: telefono };
            //Creo el array de productos
            const items = [];
            cart.forEach(item => { //Recorro el array del Carrito y voy agregando los productos, en el array de productos que voy a subir al Firestore
                items.push({ id: item.id, title: item.nombre, price: item.precio, quantity: item.cantidad });
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            //Creo el objeto con todos los datos de la Compra
            const order = { buyer: buyer, items: items, date: now, total: totalPrecio() };

            //Creo que la conexión al Firestore, para cargar la Orden de Compra
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then(({ id }) => {
                setOrderId(id);
                deleteAll();
            });
        }
    }

    return (
        <div className="container py-5">
            {totalUnidades() > 0 ?
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Nombre Apellido" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="ejemplo@gmail.com" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" placeholder="011-123456789" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => { sendOrder() }}>Generar Orden</button>
                    </div>
                    <div className="col-md-4">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-start"><img src={item.imagen} alt={item.nombre} title={item.nombre} width="80" /></td>
                                        <td className="text-start align-middle">{item.nombre} x {item.cantidad}</td>
                                        <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                    <td className="text-end fw-bold">${totalPrecio()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                : orderId !== "" ? <Success id={orderId} /> : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default Checkout;