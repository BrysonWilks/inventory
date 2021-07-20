import React from 'react';

class Info extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      count: 0
    };
  }

  buttonPressed = () =>{
    this.setState({
      count: this.state.count + 1
    });
  }
  render(){
    return(
      <div>
      <p>Count: {this.state.count} </p>
      <button onClick={this.buttonPressed}>Click me! </button>
      </div>
    );
  }
}

export default Info;
