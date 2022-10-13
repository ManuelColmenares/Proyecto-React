import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './components/Context/CartContext';
import Cart from './components/ItemCount/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer tittle="NUESTROS PRODUCTOS" />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
