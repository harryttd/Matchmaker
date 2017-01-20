'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Matches = ({ selectedPerson, matches }) => {


  console.log(selectedPerson, matches);
  return (
    <div>
      {
        selectedPerson && Object.keys(selectedPerson).map(k => <h1>{k}</h1>)
      }
    </div>
  );
};

const mapState = ({ selectedPerson, matches }) => ({ selectedPerson, matches });
export default connect(mapState)(Matches);
