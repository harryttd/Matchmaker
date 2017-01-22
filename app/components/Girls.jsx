'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Girls = ({ girls }) => {
  return (
    <div>
      {
        girls.length && girls.map((girl, index) =>
          <Link to={`/girls/${girl.indexId}`} key={girl.id} className="col col-md-4">
            <img src={ girl.image } />
            <h2>{`${girl.firstName} ${girl.lastName}`}</h2>
          </Link>
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ girls: singles.girls });
export default connect(mapState)(Girls);
