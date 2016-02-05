import React from 'react';

export default class Hero extends React.Component {
  render(){
    return(
      <h1 href={'/power/'+ this.props.hero}>{this.props.hero}</h1>
    )
  };
}