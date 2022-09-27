import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const Cart = () => {
    const {cart, deleteOne, deleteAll} = useContext(CartContext);
    return(
        <div className="card md-3">
            <div className="tbtn-cart">
            <h2>Productos Agregados</h2>
            <button className="btn btn-danger btn-sm" onClick={deleteAll} >Eliminar Productos</button>
            </div>
            
            {cart.map((producto) => (
                <div key={producto.id} className="row g-0">
                    <div className="col-md-4">
                        <img src={producto.imagen} className="img-fluid rounded-start" alt={producto.nombre} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">{producto.nombre}</h4>
                        <p className="card-text- text-center">${producto.precio}</p>
                        <button className="btn btn-secondary" onClick={() => deleteOne(producto.id)}>Eliminar</button>
                    </div>
                    
                    
                </div>
            ))}
            

        </div>
    );
}

export default Cart;