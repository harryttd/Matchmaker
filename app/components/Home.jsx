'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Login from './Login';
import AllSingles from './AllSingles';
import { PageHeader } from 'react-bootstrap';

const Home = ({ auth }) => {
  return auth ?
    <AllSingles />
    :
    <div>
      <PageHeader>Welcome to Matchmaker!</PageHeader>
      <Login />
    </div>;
};

const mapState = ({ auth }) => ({ auth });
export default connect(mapState)(Home);
