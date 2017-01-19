'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Girls = ({ girls }) => {
  return (
    <div>
      {
        girls && girls.map(girl =>
          Object.keys(girl).map(key =>
            <h2>{key + ' ' + girl[key]}</h2>
          )
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ girls: singles });
export default connect(mapState)(Girls);
