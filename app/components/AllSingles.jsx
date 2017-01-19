'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AllSingles = ({ singles }) => {
  console.log(singles);
  return (
    <div>
      {
        singles.map(single =>
          Object.keys(single).map(key =>
            <h2>{key + ' ' + single[key]}</h2>
          )
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ singles });
export default connect(mapState)(AllSingles);
