import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

export default class Hero extends React.Component {
  render() {
    let style = {};
    style.backgroundColor = '#607D8B';
    style.color = '#B2DFDB';
    return (
      <ListItem
        href={'/power/'+ this.props.dialog.hero}
        style={style}
        key={this.props.dialog.key}
      >{this.props.dialog.hero} -> {this.props.dialog.line}</ListItem>
    )
  };
}