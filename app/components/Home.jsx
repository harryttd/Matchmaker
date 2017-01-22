'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const Home = () => {
  return (
    <PageHeader>Welcome to Matchmaker!</PageHeader>
  );
};

const mapState = null;
export default connect(mapState)(Home);
