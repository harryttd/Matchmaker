'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import Root from './components/Root';
import AllSingles from './components/AllSingles';
import Boys from './components/Boys';
import SingleBoy from '././components/SingleBoy';
import Girls from './components/Girls';
import SingleGirl from './components/SingleGirl';
import Matches from './components/Matches';

import { getAllSingles, getAllBoys, getAllGirls } from './reducers/singles';
import { getSelectedBoy, getSelectedGirl } from './reducers/selectedPerson';
import { getMatches } from './reducers/matches';

const Routes = ({ onAppEnter, onBoysEnter, onGirlsEnter, onSingleBoyEnter, onSingleGirlEnter, onMatchEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
      <IndexRoute component={AllSingles} onEnter={onAppEnter} />
      <Route path="/all" component={AllSingles} />
      <Route path="/boys" component={Boys} onEnter={onBoysEnter} />
      <Route path="/boys/:id" component={SingleBoy} onEnter={onSingleBoyEnter} />
      <Route path="/girls" component={Girls} onEnter={onGirlsEnter} />
      <Route path="/girls/:id" component={SingleGirl} onEnter={onSingleGirlEnter} />
      <Route path="/match" component={Matches} onEnter={onMatchEnter} />
    </Route>
  </Router>
);

const mapState = null;
const mapDispatch = dispatch => ({
  onAppEnter: () => dispatch(getAllSingles()),
  onBoysEnter: () => dispatch(getAllBoys()),
  onGirlsEnter: () => dispatch(getAllGirls()),
  onSingleGirlEnter: (nextRouterState) => dispatch(getSelectedGirl(nextRouterState.params.id)),
  onSingleBoyEnter: (nextRouterState) => dispatch(getSelectedBoy(nextRouterState.params.id)),
  onMatchEnter: (nextRouterState) => getMatches(nextRouterState.selectedPerson)
});
export default connect(mapState, mapDispatch)(Routes);
