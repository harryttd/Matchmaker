'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Girls = ({ girls }) => {
  return (
    <div>
      {
        girls && girls.map((girl, index) =>
          <Link to={`/girls/${girl.indexId}`} key={girl.id}>
            <h2>{`${girl.firstName} ${girl.lastName}`}</h2>
          </Link>
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ girls: singles });
export default connect(mapState)(Girls);
