import React from 'react';

class Info extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

  const title = this.props.title;
  const showTitle = true;
    return (
      <div>
      <h1>{title}</h1>
      <p> Manage your stuff </p>
      </div>
    );
  }
}

export default Info;
