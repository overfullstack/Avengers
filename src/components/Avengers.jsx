import React from 'react';
import { Link } from 'react-router';
import Hero from './Hero.jsx';
import _ from 'lodash';
import mui from 'material-ui';
var {AppBar, Card, List} = mui;
import DialogWriter from './DialogWriter.jsx';
import Relay from 'react-relay';

export default class Avengers extends React.Component {

  render() {
    var dialogs = this.props.dialogStore.dialogConnection.edges.map((edge, i) => {
        return (
          <Hero key={i} dialog={edge.node}/>
        );
      });

    let style = {};
    style.backgroundColor = '#009688';

    return (
      <div>
        <AppBar
          style={style}
          title="Avengers Jabber"/>

        <Card style={{
        flexGrow: 1
      }}>
          <List>
            {dialogs}
          </List>
        </Card>
        <DialogWriter store={this.props.dialogStore}/>
      </div>
    );
  }
}

Avengers = Relay.createContainer(Avengers, {
  fragments: {
    dialogStore: () => Relay.QL `
      fragment on Store {
        id,
        dialogConnection(first: 100) {
          edges {
            node {
              ${Hero.getFragment('dialog')}
            }
          }
        }
      }
    `
  }
});