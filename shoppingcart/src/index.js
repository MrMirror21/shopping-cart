import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Routes from './Routes.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

serviceWorker.unregister();
