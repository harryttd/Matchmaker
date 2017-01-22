'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import store from './store';

import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import AllSingles from './components/AllSingles';
import Boys from './components/Boys';
import SingleBoy from '././components/SingleBoy';
import Girls from './components/Girls';
import SingleGirl from './components/SingleGirl';
import Matches from './components/Matches';

import { getLoggedInUser } from './reducers/auth';
import { getAllSingles, getAllBoys, getAllGirls } from './reducers/singles';
import { getSelectedBoy, getSelectedGirl } from './reducers/selectedPerson';
import { getMatches } from './reducers/matches';

const Routes = ({ onAppEnter, onLoginEnter, onBoysEnter, onGirlsEnter, onSingleBoyEnter, onSingleGirlEnter, onMatchEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
      <IndexRoute component={Home} onEnter={onAppEnter} />
      <Route path="/login" component={Login} onEnter={onLoginEnter} />
      <Route path="/all" component={AllSingles} />
      <Route path="/boys" component={Boys} onEnter={onBoysEnter} />
      <Route path="/boys/:id" component={SingleBoy} onEnter={onSingleBoyEnter} />
      <Route path="/girls" component={Girls} onEnter={onGirlsEnter} />
      <Route path="/girls/:id" component={SingleGirl} onEnter={onSingleGirlEnter} />
      <Route path="/:personName/match" component={Matches} onEnter={onMatchEnter} />
    </Route>
  </Router>
);

const mapState = null;
const mapDispatch = dispatch => ({
  onAppEnter: () => {
    dispatch(getLoggedInUser());
  },
  onLoginEnter: () => dispatch(getAllSingles()),
  onBoysEnter: () => {
    if (store.getState().auth) dispatch(getAllBoys());
  },
  onGirlsEnter: () => {
    if (store.getState().auth) dispatch(getAllGirls());
  },
  onSingleGirlEnter: (nextRouterState) => {
    if (store.getState().auth) dispatch(getSelectedGirl(nextRouterState.params.id));
  },
  onSingleBoyEnter: (nextRouterState) => {
    if (store.getState().auth) dispatch(getSelectedBoy(nextRouterState.params.id));
  },
  onMatchEnter: (nextRouterState) => {
    dispatch(getMatches(store.getState().selectedPerson));
  }
});
export default connect(mapState, mapDispatch)(Routes);
