import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

export default class Hero extends React.Component {
  render() {
    let style = {};
    style.backgroundColor = '#abcdef';
    return (
      <ListItem
        href={'/power/'+ this.props.hero}
        style={style}
        key={this.props.hero.key}
      >{this.props.hero}</ListItem>
    )
  };
}