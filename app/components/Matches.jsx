'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Matches = ({ selectedPerson, matches }) => {


  console.log("MATCHES COMPONENT", selectedPerson, "MATCHES", matches);
  return (
    <div>
      {
        matches.length && matches.map(match =>
          <div key={match.id}>
            <img src={ match.image } />
            <h3>{ `${match.firstName} ${match.lastName}` }</h3>
          </div>
        )
      }
    </div>
  );
};

const mapState = ({ selectedPerson, matches }) => ({ selectedPerson, matches });
export default connect(mapState)(Matches);
