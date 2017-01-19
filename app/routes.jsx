'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import Root from './components/Root';
import AllSingles from './components/AllSingles';
// import Boys from './components/Boys';
// import Girls from './components/Girls';
// import SingleBoy from './components/SingleBoy';
// import SingleGirl from './components/SingleGirl';

import { getAllSingles } from './reducers/singles';
// <Route path="/boys" component={Boys} />
// <Route path="/boys/:id" component={SingleBoy} />
// <Route path="/girls/:id" component={SingleGirl} />
// <Route path="/girls" component={Girls} />
const Routes = ({ onAppEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
      <Route path="/all" component={AllSingles} />
    </Route>
  </Router>
);

const mapState = null;
const mapDispatch = dispatch => ({
  onAppEnter: () => dispatch(getAllSingles())
});
export default connect(mapState, mapDispatch)(Routes);
