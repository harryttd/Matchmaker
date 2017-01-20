'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import Root from './components/Root';
import AllSingles from './components/AllSingles';
import Boys from './components/Boys';
import Girls from './components/Girls';
// import SingleBoy from './components/SingleBoy';
import SingleGirl from './components/SingleGirl';
import SingleBoy from '././components/SingleBoy';

import { getAllSingles, getAllBoys, getAllGirls } from './reducers/singles';
import { getSelectedBoy, getSelectedGirl } from './reducers/selectedPerson';

const Routes = ({ onAppEnter, onBoysEnter, onGirlsEnter, onSingleBoyEnter, onSingleGirlEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
      <IndexRoute component={AllSingles} onEnter={onAppEnter} />
      <Route path="/all" component={AllSingles} />
      <Route path="/boys" component={Boys} onEnter={onBoysEnter} />
      <Route path="/boys/:id" component={SingleBoy} onEnter={onSingleBoyEnter} />
      <Route path="/girls" component={Girls} onEnter={onGirlsEnter} />
      <Route path="/girls/:id" component={SingleGirl} onEnter={onSingleGirlEnter} />
    </Route>
  </Router>
);

const mapState = null;
const mapDispatch = dispatch => ({
  onAppEnter: () => dispatch(getAllSingles()),
  onBoysEnter: () => dispatch(getAllBoys()),
  onGirlsEnter: () => dispatch(getAllGirls()),
  onSingleGirlEnter: (nextRouterState) => dispatch(getSelectedGirl(nextRouterState.params.id)),
  onSingleBoyEnter: (nextRouterState) => dispatch(getSelectedBoy(nextRouterState.params.id))
});
export default connect(mapState, mapDispatch)(Routes);
