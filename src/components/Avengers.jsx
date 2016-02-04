import React from 'react';
import { Link } from 'react-router';

export default class Avengers extends React.Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        "Captain America",
        "Thor",
        "Black Widow",
        "Hawk-eye"
      ]
    }
  }

  render() {
    var avengerNodes = this.state.avengers.map((avenger) => {
      return (
        <h1>{avenger}</h1>
      );
    });

    return (
      <div>
        <h1><Link to="/ironman">Iron Man</Link></h1>
        <h1><Link to="/hulk">Hulk</Link></h1>

        {avengerNodes}
        {this.props.children}
      </div>);
  }
}