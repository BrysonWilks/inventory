//import logo from './logo.svg';
import './App.css';
import Info from './Info.js';

function App() {
  return (
    <div className="App">
      <p> Barebones react app </p>
      <Info title = "Inventory Application"></Info>
      <AddItem text ="Bryson" number = {2}></AddItem>
      <AddItem></AddItem>
      <AddItem></AddItem>
    </div>
  );
}

function AddItem(props){
  const value = props.text;
  return(
    <form>
    <label for="text-form">Type something: </label>
    <input type="text" value = {value} id="text-form"/>
    <p>{props.number}</p>
    </form>
  );
}
AddItem.defaultProps = {
  number: 0,
  text: "Nada"
}
export default App;
