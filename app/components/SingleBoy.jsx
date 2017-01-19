'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleBoy = ({ selectedPerson }) => {
  return (
    <div>
      {
        Object.keys(selectedPerson).map(key =>
          <h2 key={key}>{key + ' ' + selectedPerson[key]}</h2>
        )
      }
    </div>
  );
};

const mapState = ({ selectedPerson }) => ({ selectedPerson });
export default connect(mapState)(SingleBoy);
