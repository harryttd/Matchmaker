'use strict';
import React from 'react';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import Routes from './routes';

// import AllSingles from './components/AllSingles';
// import PersonalInfo from './components/PersonalInfo';

// import axios from 'axios';
// <AllSingles people={people} />
// <PersonalInfo person={people[0]} />
// axios.get('/boys').then(res => res.data).then(people => {
//   console.log(people);

render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
