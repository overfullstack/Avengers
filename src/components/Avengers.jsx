import React from 'react';
import Hero from './Hero.jsx';
import {AppBar, Card, List} from 'material-ui';
import DialogWriter from './DialogWriter.jsx';
import Relay from 'react-relay';
import {debounce} from 'lodash';

class Avengers extends React.Component {

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
    console.log(this.props);
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

export default Relay.createContainer(Avengers, {
  initialVariables: {
    query: ''
  },
  fragments: {
    dialogStore: () => Relay.QL`
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