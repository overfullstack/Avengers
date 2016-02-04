import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Avengers from '../components/Avengers.jsx'
import IronMan from '../components/IronMan.jsx'
import Hulk from '../components/Hulk.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Avengers}>
      <Route path="iron" component={IronMan}/>
    </Route>
    <Route path="/ironman" component={IronMan}/>
    <Route path="/hulk" component={Hulk}/>
  </Router>
), document.getElementById('avenger'));