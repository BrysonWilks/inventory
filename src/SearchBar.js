import {useState} from 'react';

function SearchBar(props){

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () =>{
    props.callback({name: name, price: price, type: type, brand: brand})
  }

  return(
    <div>
    <h2>Search for an item!</h2>
    <form>
      <label for="name-field">Name: </label>
      <input id="name-field"
             type = "text"
             value = {name}
             onChange = {(e) => setName(e.target.value)}/>

      <label for="price-field">Max Price: </label>
      <input id="price-field"
             type = "number"
             value = {price}
             onChange = {(e) => setPrice(e.target.value)}/>

      <label for="type-field">Type: </label>
      <input id="type-field"
             type = "type"
             value = {type}
             onChange = {(e) => setType(e.target.value)}/>

      <label for="brand-field">Brand: </label>
      <input id="brand-field"
             type = "brand"
             value = {brand}
             onChange = {(e) => setBrand(e.target.value)}/>

      <button type = "button" onClick = {searchButtonPressed}>Search</button>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Type: {type}</p>
      <p>Brand: {brand}</p>
    </form>
    </div>
  );

}

export default SearchBar;
