import React from 'react';
import {render} from 'react-dom';
import Relay from 'react-relay';
import Avengers from '../components/Avengers.jsx'

class HomeRoute extends Relay.Route {
  static routeName = 'Avengers';
  static path = "/";
  static queries = {
    dialogStore: (Component) => Relay.QL `
      query MainQuery {
        store {
          ${Component.getFragment('dialogStore')}
        }
      }
    `
  };
}

render(
  <Relay.RootContainer
    Component={Avengers}
    route={new HomeRoute()}
  />,
  document.getElementById('avenger')
);