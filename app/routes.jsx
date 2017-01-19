'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import Root from './components/Root';
import AllSingles from './components/AllSingles';
import Boys from './components/Boys';
import Girls from './components/Girls';
// import SingleBoy from './components/SingleBoy';
// import SingleGirl from './components/SingleGirl';

import { getAllSingles, getAllBoys, getAllGirls } from './reducers/singles';
// <Route path="/boys/:id" component={SingleBoy} />
// <Route path="/girls/:id" component={SingleGirl} />
// <Route path="/girls" component={Girls} />
const Routes = ({ onAppEnter, onBoysEnter, onGirlsEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
      <Route path="/all" component={AllSingles} />
      <Route path="/boys" component={Boys} onEnter={onBoysEnter} />
      <Route path="/girls" component={Girls} onEnter={onGirlsEnter} />
    </Route>
  </Router>
);

const mapState = null;
const mapDispatch = dispatch => ({
  onAppEnter: () => dispatch(getAllSingles()),
  onBoysEnter: () => dispatch(getAllBoys()),
  onGirlsEnter: () => dispatch(getAllGirls())
});
export default connect(mapState, mapDispatch)(Routes);
