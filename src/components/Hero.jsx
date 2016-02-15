import React from 'react';
import {ListItem} from 'material-ui';
import Relay from 'react-relay';

export default class Hero extends React.Component {
  render() {
    let style = {};
    style.backgroundColor = '#607D8B';
    style.color = '#B2DFDB';
    return (
      <ListItem
        style={style}
      >{this.props.dialog.hero} -~> {this.props.dialog.line}</ListItem>
    )
  };
}

Hero = Relay.createContainer(Hero, {
  fragments: {
    dialog: () => Relay.QL `
      fragment on Dialog {
        hero,
        line
      }
    `
  }
});