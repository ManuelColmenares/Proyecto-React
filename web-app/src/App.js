import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <hr />
      <ItemListContainer name="Item List Container" />
      <ItemCount stock={5} initial={1} onAdd={0} />
    </div>
  );
}

export default App;
