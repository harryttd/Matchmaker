'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleGirl = ({ selectedPerson }) => {
  const girl = selectedPerson;
  return (
    <div>
      <div>
        <img src={ girl.image } />
        <h2>{`${girl.firstName} ${girl.lastName}`}</h2>
        <h3>Address: { girl.address }</h3>
        <h3>Birthday: { girl.birthday }</h3>
        <h3>Height: { girl.height }</h3>
        <h3>Religious background: { girl.religiousBackground }</h3>
        <h3>Willing to relocate: { girl.relocate }</h3>
      </div>
      <div>
        <h5>{ girl.tags }</h5>
      </div>
      <button>Make match</button>
    </div>
  );
};

const mapState = ({ selectedPerson }) => ({ selectedPerson });
export default connect(mapState)(SingleGirl);
