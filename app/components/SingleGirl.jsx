'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleGirl = (props) => {
  console.log(props);
  return (
    <div>
      {
        Object.keys(girl).map(key =>
          <h2>{key + ' ' + girl[key]}</h2>
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({ girl: singles.selectedGirl });
export default connect(mapState)(SingleGirl);
