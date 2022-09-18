import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <hr />
      <ItemListContainer name="Item List Container" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
