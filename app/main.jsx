'use strict';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import Routes from './routes';

render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
