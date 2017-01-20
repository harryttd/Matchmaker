'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleBoy = ({ selectedPerson }) => {
  const boy = selectedPerson;
  return (
    <div>
      <div>
        <img src={ boy.image } />
        <h2>{`${boy.firstName} ${boy.lastName}`}</h2>
        <h3>Address: { boy.address }</h3>
        <h3>Birthday: { boy.birthday }</h3>
        <h3>Height: { boy.height }</h3>
        <h3>Religious background: { boy.religiousBackground }</h3>
        <h3>Willing to relocate: { boy.relocate }</h3>
      </div>
      <div>
        <h5>{ boy.tags }</h5>
      </div>
      <Link to={`/match`}>
        <button>Make match</button>
      </Link>
    </div>
  );
};

const mapState = ({ selectedPerson }) => ({ selectedPerson });
export default connect(mapState)(SingleBoy);
