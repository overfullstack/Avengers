import React from 'react';
import {render} from 'react-dom';
import Relay from 'react-relay';
import {Router, Route, browserHistory} from 'react-router';
import {RelayRouter} from 'react-router-relay';
import Avengers from '../components/Avengers.jsx'

var HomeQueries = {
  dialogStore: (Component) => Relay.QL `
      query MainQuery {
        store {
          ${Component.getFragment('dialogStore')}
        }
      }
    `
};

render((
  <RelayRouter history={browserHistory}>
    <Route
      path="/" component={Avengers}
      queries={HomeQueries}/>
  </RelayRouter>
), document.getElementById('avenger'));




