import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Home from './Home';
import SupportAdmin from './SupportAdmin';

const path = window.location.pathname

ReactDOM.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
);
