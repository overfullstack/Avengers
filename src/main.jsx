import React from 'react';
import ReactDom from 'react-dom';
import IronMan from './components/IronMan.jsx'
import Hulk from './components/Hulk.jsx'

ReactDom.render(
  <div>
    <IronMan />
    <Hulk />
  </div> ,

  document.getElementById('avenger'));