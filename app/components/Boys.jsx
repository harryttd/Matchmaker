'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Boys = ({ boys }) => {
  return (
    <div>
      {
        boys.length && boys.map((boy, index) =>
          <Link to={`/boys/${boy.indexId}`} key={boy.id} className="col  col-md-4">
            <img src={ boy.image } />
            <h2>{`${boy.firstName} ${boy.lastName}`}</h2>
          </Link>
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ boys: singles.boys });
export default connect(mapState)(Boys);
