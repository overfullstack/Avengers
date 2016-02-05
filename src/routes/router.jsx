import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Index from '../index.jsx'
import Hero from '../components/Hero.jsx'
import Avengers from '../components/Avengers.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Avengers}>
      <IndexRoute component={Index}/>
    </Route>
    <Route path="/:hero" component={Avengers}/>
    <Route path="/:power" component={Hero}/>
  </Router>
), document.getElementById('avenger'));