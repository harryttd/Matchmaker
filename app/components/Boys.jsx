'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Boys = ({ boys }) => {
  return (
    <div>
      {
        boys && boys.map(boy =>
          Object.keys(boy).map(key =>
            <h2>{key + ' ' + boy[key]}</h2>
          )
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ boys: singles });
export default connect(mapState)(Boys);
