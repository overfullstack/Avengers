import React from 'react';
import { Link } from 'react-router';
import Hero from './Hero.jsx';
import _ from 'lodash';
import mui from 'material-ui';
var {AppBar, Card, List} = mui;
import DialogWriter from './DialogWriter.jsx';
import Relay from 'react-relay';
import {debounce} from 'lodash';

export default class Avengers extends React.Component {

  search = (e) => {
    e.persist();
    console.log(e);
    this.debounceSearch(e);
  };

  debounceSearch = debounce((e) => {
    console.log(e);
    let query = e.target.value;
    this.props.relay.setVariables({query});
  }, 300);

  render() {
    var dialogs = this.props.dialogStore.dialogConnection.edges.map((edge, i) => {
      return (
        <Hero key={i} dialog={edge.node}/>
      );
    });

    return (
      <div>
        <AppBar
          style={{backgroundColor: '#009688'}}
          title="Avengers Jabber"/>

        <textarea
          onChange={this.search}
          style={{
            width: '25%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 10,
            color: '#555',
            fontSize: 10,
            outline: 'auto 0px'
          }}/>

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
  initialVariables: {
    query: ''
  },
  fragments: {
    dialogStore: () => Relay.QL `
      fragment on Store {
        id,
        dialogConnection(first: 100, query: $query) {
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