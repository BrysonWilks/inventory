//import logo from './logo.svg';
import './App.css';
import Info from './Info.js';
import { useState } from 'react'; //You have to use curly braces because useState is not a default Export

/* Passing in props */
function App() {
  return (
    <div className="App">
      <p> Barebones react app </p>
      <Info title = "Inventory Application"></Info>
      <ButtonState />
    </div>
  );
}
function ButtonState() {
const [title, setTitle] = useState("");
const [count, setCount] = useState(0);

const updateTitleClicked = () => {
  setTitle("You have a title now! :) ");
}

const updateCountClicked = () =>{
  setCount(count + 1);
}

    return(
      <div>
      <Data title={title} count = {count}/>
      <button onClick = {updateTitleClicked}> Update Title </button>
      <button onClick = {updateCountClicked}> Update Counter </button>
      </div>
    );
}

function Data(props){
  return(
    <div>
    <p>Title: {props.title} </p>
    <p>Props: {props.count} </p>
    </div>
  );
}
Data.defaultProps = {
  title : "no title passed in :( ",
  count : 0
}
/*
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
AddItem.defaultProps = {  creating defaultProps
  number: 0,
  text: "Nada"
}
*/
export default App;
