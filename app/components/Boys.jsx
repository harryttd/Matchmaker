'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Boys = ({ boys }) => {
  return (
    <div>
      {
        boys && boys.map((boy, index) =>
          <Link to={`/boys/${index}`} key={boy.id}>
            <h2>{`${boy.firstName} ${boy.lastName}`}</h2>
          </Link>
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ boys: singles });
export default connect(mapState)(Boys);
