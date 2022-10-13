import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad};
            if(isInCart(producto.id)) {
                sumarCantidad(producto);
            }else {
                setCart([...cart, producto]);
            }
    };
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (producto) => {
        const cartUpdate =  cart.map((productInCart) =>{
            if (producto.id === productInCart.id) {
                const productUpdated = {
                    ...productInCart,
                    cantidad: producto.cantidad,
                };
                return productUpdated;
            }else {
                return productInCart;
            }
        });
        setCart(cartUpdate);
    };

    const deleteAll = () => {
        setCart([]);
    };

    const totalUnidades = () => {
        const newCart = [...cart];
        let count = 0;
        newCart.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    };

    const totalPrecio = () => {
        const totalPrice = [...cart];
        let count = 0;
        totalPrice.forEach((producto) => {
            count = count + producto.cantidad * producto.precio;
        });
        return count;
    }

    const deleteOne = (id) => {
        const productsFiltered = cart.filter((prod) => prod.id !== id);
        setCart(productsFiltered);
    };


    return (
        <CartContext.Provider
        value={
            {
                cart,
                addToCart,
                deleteAll,
                totalUnidades,
                totalPrecio,
                deleteOne,
            }
        }
        >
            {props.children}

        </CartContext.Provider>
    );

};

export default CartProvider;