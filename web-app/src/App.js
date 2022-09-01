import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <hr />
      <ItemListContainer name="Item List Container" />
    </div>
  );
}

export default App;
